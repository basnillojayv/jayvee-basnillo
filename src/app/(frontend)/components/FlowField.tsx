'use client'

import { useEffect, useRef } from 'react'

/**
 * A BACKGROUND THAT MOVES, WITHOUT A LIBRARY AND WITHOUT A FRAME BUDGET.
 *
 * Two looks, one component, because they are the same machine with a different
 * fragment shader bolted on:
 *
 * · `haze`  — the homepage. A domain-warped noise field in near-whites. It has
 *             to be almost subliminal: the hero is near-black type and a
 *             cut-out portrait on white, and anything with real contrast in it
 *             turns the headline into a legibility problem.
 * · `silk`  — the Selected Projects band. The interference pattern of two sine
 *             fields, which is what reads as folded fabric, in the graphite and
 *             mauve the band already uses.
 *
 * WHY WEBGL AND NOT A CANVAS PIXEL LOOP
 * The obvious way to draw either of these in 2D is to walk every pixel and set
 * it from a formula. At this size that is roughly a third of a million
 * iterations per frame in JavaScript, on the main thread, forever — it pins a
 * core, and on a phone it takes the scroll with it. The same formula is a
 * fragment shader the GPU runs per pixel in parallel, which is the difference
 * between a background and a performance bug.
 *
 * WHY NO DEPENDENCY
 * A fullscreen shader needs a context, two compiled shaders, one buffer and a
 * draw call. Reaching for a WebGL wrapper to get that would add a package to
 * every page that renders this, to save about forty lines that never change.
 *
 * WHAT IT REFUSES TO DO
 * · Under `prefers-reduced-motion` it draws exactly one frame and stops. The
 *   look survives; the movement does not, because the movement is the part
 *   that causes harm.
 * · Off screen, or in a background tab, the loop is cancelled rather than
 *   throttled. A band halfway down a page should cost nothing while it is not
 *   being looked at.
 * · Without a WebGL context it renders nothing at all and leaves the CSS
 *   gradient underneath it showing, which is why that gradient is on the
 *   wrapper and not painted here.
 */

type Variant = 'haze' | 'silk'

const VERTEX = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`

/**
 * Value noise, four octaves, then the field is warped by itself twice before it
 * is sampled — the two `fbm` passes feeding a third are what bend the bands
 * into something that looks stirred rather than scrolled. Straight fbm drifting
 * past reads as fog on a conveyor belt.
 */
const HAZE = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uLow;
uniform vec3 uHigh;
uniform float uScale;
uniform float uContrast;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++){
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0) * uScale;
  float t = uTime * 0.05;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, -t * 0.7)));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.25),
                fbm(p + 3.0 * q + vec2(8.3, 2.8) - t * 0.2));
  float f = fbm(p + 3.0 * r);

  f = clamp((f - 0.5) * uContrast + 0.5, 0.0, 1.0);
  gl_FragColor = vec4(mix(uLow, uHigh, f), 1.0);
}
`

/**
 * Silk is two sine fields interfering: a slow one that decides where the folds
 * fall and a fast one that puts a sheen on them. The `sin(...)` inside the
 * first argument is the fold — without it the pattern is corduroy, perfectly
 * straight and obviously generated.
 *
 * The grain is a cheap per-pixel hash subtracted from the result rather than a
 * texture. It is there because a pure gradient of this kind bands badly on an
 * 8-bit display, and a little noise is what dither always was.
 */
const SILK = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uLow;
uniform vec3 uHigh;
uniform float uScale;
uniform float uContrast;

float grain(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = uv * vec2(uRes.x / uRes.y, 1.0) * uScale;
  float t = uTime * 0.35;

  float x = p.x;
  float y = p.y + 0.03 * sin(8.0 * x - t);

  // The sheen is added INSIDE the fold's own sine, not folded and then added.
  // Sin it twice and the fine striations flatten into smoke — the second sine
  // is what draws the thread, and it has to be part of the phase to do that.
  float fold = 5.0 * (x + y + cos(3.0 * x + 5.0 * y) + 0.02 * t);
  float sheen = sin(20.0 * (x + y - 0.1 * t));
  float v = 0.6 + 0.4 * sin(fold + sheen);

  v -= grain(gl_FragCoord.xy) * 0.06;
  v = clamp((v - 0.5) * uContrast + 0.5, 0.0, 1.0);

  gl_FragColor = vec4(mix(uLow, uHigh, v), 1.0);
}
`

/** Colours as 0–1 triples, so the shader never has to divide by 255. */
const PALETTE: Record<Variant, { low: [number, number, number]; high: [number, number, number]; scale: number; contrast: number }> = {
  // Near-whites. The gap between the two is about six per cent of the range,
  // which is the most this can carry before it starts competing with the type.
  haze: { low: [1, 1, 1], high: [0.898, 0.914, 0.945], scale: 2.6, contrast: 1.15 },
  // Graphite to mauve — the band's own two colours, not a third palette.
  silk: { low: [0.078, 0.078, 0.086], high: [0.482, 0.455, 0.506], scale: 2.0, contrast: 1.1 },
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function FlowField({
  variant = 'haze',
  className,
}: {
  variant?: Variant
  className?: string
}) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const gl = (canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      // The field is redrawn every frame and never read back, so neither a
      // preserved buffer nor a depth attachment is anything but memory.
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: 'low-power',
    }) ?? null) as WebGLRenderingContext | null
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX)
    const fs = compile(gl, gl.FRAGMENT_SHADER, variant === 'silk' ? SILK : HAZE)
    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    /**
     * One triangle, not two. A triangle large enough to cover the clip volume
     * rasterises the whole screen in a single primitive with no seam down the
     * diagonal where two triangles meet — the standard fullscreen trick.
     */
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'uRes')
    const uTime = gl.getUniformLocation(program, 'uTime')
    const paint = PALETTE[variant]
    gl.uniform3fv(gl.getUniformLocation(program, 'uLow'), paint.low)
    gl.uniform3fv(gl.getUniformLocation(program, 'uHigh'), paint.high)
    gl.uniform1f(gl.getUniformLocation(program, 'uScale'), paint.scale)
    gl.uniform1f(gl.getUniformLocation(program, 'uContrast'), paint.contrast)

    /**
     * Capped at 1.5, not `devicePixelRatio`. This is a soft field with no edges
     * in it, so a phone's third pixel of density buys nothing visible and costs
     * a little over twice the fragments.
     */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr))
      if (canvas.width === w && canvas.height === h) return
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
      gl.uniform2f(uRes, w, h)
    }

    const draw = (seconds: number) => {
      gl.uniform1f(uTime, seconds)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    resize()

    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (still.matches) {
      // One frame, at a time offset that happens to look composed, and then
      // nothing. A static field is still a better background than flat white.
      draw(12)
      return () => {
        gl.getExtension('WEBGL_lose_context')?.loseContext()
      }
    }

    let frame = 0
    let running = false
    const start = performance.now()

    const tick = (now: number) => {
      resize()
      draw((now - start) / 1000)
      frame = requestAnimationFrame(tick)
    }

    const run = (on: boolean) => {
      if (on === running) return
      running = on
      if (on) frame = requestAnimationFrame(tick)
      else cancelAnimationFrame(frame)
    }

    // Visible *and* focused, or it does not run. Two conditions, one switch.
    let onScreen = true
    const sync = () => run(onScreen && !document.hidden)

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        sync()
      },
      { rootMargin: '120px' },
    )
    io.observe(canvas)

    document.addEventListener('visibilitychange', sync)
    window.addEventListener('resize', resize)
    sync()

    return () => {
      run(false)
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
      window.removeEventListener('resize', resize)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [variant])

  return (
    <canvas
      ref={ref}
      className={['flowfield', `flowfield--${variant}`, className].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  )
}
