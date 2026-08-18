import React from 'react';

export function StatCounter({ value, suffix = '', label, tone = 'light', animate = true, style, ...rest }) {
  const [shown, setShown] = React.useState(animate ? 0 : value);
  React.useEffect(() => {
    if (!animate) { setShown(value); return; }
    const dur = 1200, t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, animate]);
  const dark = tone === 'dark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--type-stat-size)', fontWeight: 'var(--type-stat-weight)',
        lineHeight: 1, letterSpacing: 'var(--tracking-tight)',
        color: dark ? 'var(--text-inverse)' : 'var(--navy-500)',
      }}>{shown}{suffix}</span>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--fw-medium)',
        color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      }}>{label}</span>
    </div>
  );
}
