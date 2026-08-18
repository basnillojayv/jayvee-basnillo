window.HP = window.HP || {};
(function () {
  const { Button, Icon } = window.DesignSystem_e5ed69;

  const trust = [
    ['badge-check', 'FDA cleared'],
    ['shield-check', 'Medicare & VA'],
    ['users', '100k+ patients treated'],
  ];

  window.HP.Hero = function Hero() {
    return (
      <section id="top" style={{ position: 'relative', overflow: 'hidden', minHeight: 'min(94vh, 760px)',
        marginTop: -82, paddingTop: 82,
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(120deg, #0C447C 0%, #16457E 42%, #06618B 100%)' }}>

        {/* Full-bleed lifestyle photo zone (right) */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="hero-photo" style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '48%',
            background: 'linear-gradient(150deg, rgba(0,154,217,0.35), rgba(12,68,124,0.05))',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>Full-bleed lifestyle photo</span>
          </div>
          {/* left-side scrim so text stays legible over any photo */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #0C447C 34%, rgba(12,68,124,0.72) 52%, rgba(12,68,124,0) 78%)' }}></div>
          {/* calm drifting glow */}
          <span style={orb('560px', 'radial-gradient(circle, rgba(0,154,217,0.55), transparent 68%)', '-160px', 'auto', '30s', 'auto', '4%')}></span>
          <span style={orb('360px', 'radial-gradient(circle, rgba(191,231,248,0.28), transparent 70%)', 'auto', '46%', '26s', '-120px', 'auto')}></span>
        </div>

        <div className="wrap" style={{ position: 'relative', width: '100%' }}>
          <div className="reveal in" style={{ maxWidth: 640 }}>
            <span className="eyebrow" style={{ color: 'var(--cyan-100)' }}>The CPAP alternative</span>
            <h1 style={{ fontSize: 'clamp(40px, 5.6vw, 66px)', lineHeight: 1.03, marginTop: 16, color: '#fff' }}>
              Sleep Better<br />Without the Machine
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.6, color: 'rgba(255,255,255,0.86)', maxWidth: 490, marginTop: 20 }}>
              Comfortable, custom-fit, and covered — the modern alternative to CPAP. No masks, no hoses, no noise.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="../pages/find-a-provider/index.html"><Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />} style={{ whiteSpace: 'nowrap' }}>Find a Provider</Button></a>
              <a href="../pages/how-it-works/index.html" className="hero-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 18,
                padding: '15px 28px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', color: '#fff', textDecoration: 'none',
                background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.42)',
                transition: 'background var(--duration-fast) var(--ease-out)' }}>
                <Icon name="play" size={16} /> See How It Works
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 26px', marginTop: 38 }}>
              {trust.map(([icon, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                  <Icon name={icon} size={17} color="var(--cyan-100)" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .hero-ghost:hover { background: rgba(255,255,255,0.24) !important; }
          @keyframes hp-drift { 0%{transform:translate(0,0)} 50%{transform:translate(40px,-30px)} 100%{transform:translate(0,0)} }
          @media (max-width: 900px){ .hero-photo{ opacity:0.55; width:100% !important; } }
          @media (prefers-reduced-motion: reduce){ [style*="hp-drift"]{animation:none !important} }
        `}</style>
      </section>
    );
  };

  function orb(size, bg, top, left, dur, bottom, right) {
    return { position: 'absolute', width: size, height: size, borderRadius: '50%', background: bg, filter: 'blur(8px)',
      top: top, left: left, bottom: bottom || 'auto', right: right || 'auto',
      animation: `hp-drift ${dur} var(--ease-in-out) infinite` };
  }
})();
