window.HP = window.HP || {};
(function () {
  const { Card, Icon } = window.DesignSystem_e5ed69;
  const providers = [
    ['Compliance is night and day versus CPAP. My patients actually wear it — and their outcomes show it.', 'Dr. Elena Ruiz', 'Sleep Physician · Board Certified', 'stethoscope'],
    ['Precision-milled fit and predictable titration make this the first appliance I reach for in my practice.', 'Dr. Aaron Feld', 'Dental Sleep Medicine', 'activity'],
    ['The insurance documentation is streamlined, so I can focus on care instead of paperwork.', 'Dr. Nadia Khan', 'DDS · Sleep Apnea Specialist', 'clipboard-check'],
  ];

  window.HP.ProviderTrust = function ProviderTrust() {
    return (
      <section id="providers" style={{ padding: '120px 0', background: 'var(--blue-700)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -140, right: -120, width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,154,217,0.35), transparent 68%)' }}></div>
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 48px' }}>
            <span className="eyebrow" style={{ color: 'var(--cyan-100)' }}>For dentists &amp; physicians</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,42px)', marginTop: 12, color: '#fff' }}>Trusted by the providers who prescribe it</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', marginTop: 14 }}>
              Clinical precision and streamlined workflows, backed by peer-reviewed evidence.
            </p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {providers.map(([quote, name, role, icon], i) => (
              <div className="reveal" key={name} style={{ transitionDelay: (i*0.09)+'s' }}>
                <Card padding={30} style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--cyan-50)', color: 'var(--cyan-700)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={icon} size={24} />
                  </span>
                  <blockquote style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-heading)', flex: 1 }}>“{quote}”</blockquote>
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 15 }}>{name}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 2 }}>{role}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
})();
