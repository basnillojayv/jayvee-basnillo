import React from 'react';

/**
 * Big statistic with count-up animation when scrolled into view.
 * value: the target number. prefix/suffix wrap it (e.g. "96", "%").
 */
export function Stat({ value, prefix = '', suffix = '', label, duration = 1600, decimals = 0, align = 'center', style = {} }) {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = () => {
      if (started) return;
      started = true;
      if (reduce) { setDisplay(value); return; }
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(value * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) run(); });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const shown = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();

  return (
    <div ref={ref} style={{ textAlign: align, fontFamily: 'var(--font-body)', ...style }}>
      <div style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-bold)',
        fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1, color: 'var(--color-primary-strong)',
        letterSpacing: 'var(--tracking-tight)',
      }}>
        {prefix}{shown}{suffix}
      </div>
      {label && (
        <div style={{ marginTop: 10, fontSize: 16, color: 'var(--text-muted)', maxWidth: 260, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
          {label}
        </div>
      )}
    </div>
  );
}
