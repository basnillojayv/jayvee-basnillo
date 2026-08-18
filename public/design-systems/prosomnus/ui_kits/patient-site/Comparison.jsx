window.PS = window.PS || {};
(function () {
  const { Icon } = window.DesignSystem_e5ed69;
  const rows = [
    ['Comfort', 'Worn like a retainer', 'Mask strapped to your face'],
    ['Noise', 'Silent', 'Constant motor hum'],
    ['Travel', 'Fits in your pocket', 'Bulky machine + power'],
    ['Maintenance', 'Just rinse & go', 'Hoses, filters, distilled water'],
    ['Partner-friendly', 'Quiet, unobtrusive', 'Noise & bedside clutter'],
  ];
  window.PS.Comparison = function Comparison() {
    return (
      <section id="why" style={{ padding: '84px 0', background: 'var(--surface-soft)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-secondary-strong)' }}>Why ProSomnus</div>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>The CPAP alternative people actually use</h2>
          </div>
          <div className="reveal" style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', maxWidth: 860, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr' }}>
              <div style={{ padding: '18px 24px' }}></div>
              <div style={{ padding: '18px 24px', background: 'var(--blue-50)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="../../assets/prosomnus-mark.svg" style={{ height: 22 }} alt="" />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--blue-700)' }}>ProSomnus</span>
              </div>
              <div style={{ padding: '18px 24px', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--text-muted)' }}>CPAP</div>
            </div>
            {rows.map(([label, ps, cpap], i) => (
              <div key={label} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-heading)', fontSize: 15 }}>{label}</div>
                <div style={{ padding: '16px 24px', background: 'rgba(230,241,251,0.4)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: 'var(--text-heading)' }}>
                  <Icon name="check" size={18} color="var(--success)" /> {ps}
                </div>
                <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: 'var(--text-muted)' }}>
                  <Icon name="x" size={18} color="var(--gray-400)" /> {cpap}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
})();
