window.PS = window.PS || {};
(function () {
  const { Button, Badge, Icon } = window.DesignSystem_e5ed69;

  window.PS.SiteHero = function SiteHero() {
    return (
      <section id="top" style={{ background: 'linear-gradient(180deg, var(--blue-50) 0%, var(--surface-card) 78%)', paddingTop: 64, paddingBottom: 72 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
          <div className="reveal in">
            <Badge tone="wellness"><Icon name="badge-check" size={14} /> FDA cleared · 100k+ patients</Badge>
            <h1 style={{ fontSize: 56, lineHeight: 1.05, marginTop: 20 }}>Sleep, restored.</h1>
            <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 480, marginTop: 18 }}>
              A comfortable, custom-fit alternative to CPAP — worn like a retainer.
              No masks, no hoses, no noise. Just a quiet night's sleep.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Check my coverage</Button>
              <Button variant="secondary" size="lg" iconLeft={<Icon name="play" size={16} />}>See how it works</Button>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 34, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 3, color: 'var(--amber-500)' }}>
                {Array.from({length:5}).map((_,i)=>(<Icon key={i} name="star" size={18} style={{fill:'var(--amber-500)'}} />))}
              </div>
              <span style={{ fontSize: 15, color: 'var(--text-muted)' }}><strong style={{color:'var(--text-heading)'}}>96%</strong> prefer ProSomnus over CPAP</span>
            </div>
          </div>
          <div className="reveal in" style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/5', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
              background: 'linear-gradient(150deg, #cfe2f7, #eaf3fc 60%, #e7f7f0)',
              boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center', color: 'var(--blue-700)', opacity: 0.5, marginBottom: 'auto', marginTop: 'auto' }}>
                <Icon name="image" size={40} />
                <div style={{ fontSize: 13, marginTop: 8 }}>Patient photo</div>
              </div>
            </div>
            <div style={{
              position: 'absolute', bottom: 24, left: -24, background: 'var(--surface-card)',
              borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '16px 18px',
              display: 'flex', alignItems: 'center', gap: 12, maxWidth: 240,
            }}>
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--cyan-50)', color: 'var(--cyan-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="shield-check" size={20} />
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--text-heading)' }}>Covered by most insurance, Medicare &amp; VA</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
})();
