window.HP = window.HP || {};
(function () {
  const { Icon } = window.DesignSystem_e5ed69;
  const steps = [
    ['user-round-check', 'Meet a Provider', 'Connect with a ProSomnus dentist or sleep physician near you to confirm you\u2019re a good fit.', 'stethoscope'],
    ['house', 'Home Sleep Test', 'Test comfortably in your own bed with an easy at-home kit — no overnight lab visit required.', 'moon'],
    ['smile', 'Get Fitted', 'Receive your custom-milled appliance, fitted just for you. Wear it like a retainer and rest easy.', 'sparkles'],
  ];

  window.HP.HowItWorks = function HowItWorks() {
    return (
      <section id="how" style={{ padding: '120px 0', background: 'var(--surface-card)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <span className="eyebrow">How it works</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,42px)', marginTop: 12 }}>Three simple steps to better sleep</h2>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, position: 'relative' }}>
            {/* connecting line (desktop) */}
            <div className="desktop-only" aria-hidden="true" style={{ position: 'absolute', top: 78, left: '18%', right: '18%', height: 2,
              background: 'repeating-linear-gradient(90deg, var(--cyan-100) 0 10px, transparent 10px 20px)' }}></div>
            {steps.map(([icon, title, body, deco], i) => (
              <div className="reveal" key={title} style={{ transitionDelay: (i*0.1)+'s', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: 132, height: 132, borderRadius: '50%',
                    background: 'linear-gradient(150deg, var(--blue-50), var(--cyan-50))', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)' }}>
                    <Icon name={icon} size={48} color="var(--color-primary)" strokeWidth={1.6} />
                    <span style={{ position: 'absolute', top: -6, right: 8, width: 34, height: 34, borderRadius: '50%',
                      background: 'var(--color-primary)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, boxShadow: 'var(--shadow-md)' }}>{i+1}</span>
                  </div>
                  <h3 style={{ fontSize: 22, marginTop: 24 }}>{title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)', marginTop: 10, maxWidth: 300 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
})();
