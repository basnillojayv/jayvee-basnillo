window.PS = window.PS || {};
(function () {
  const { Card, Icon } = window.DesignSystem_e5ed69;
  const steps = [
    ['calendar-check', 'Talk to a provider', 'Connect with a ProSomnus dentist or physician near you and confirm you\u2019re a good fit.'],
    ['scan', 'Get a custom scan', 'A quick digital scan captures your bite \u2014 no messy molds, no CPAP fitting.'],
    ['bed', 'Sleep comfortably', 'Wear your precision-milled appliance like a retainer and wake up rested.'],
  ];
  window.PS.SiteHowItWorks = function SiteHowItWorks() {
    return (
      <section id="how" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>How it works</div>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Three simple steps to better sleep</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {steps.map(([icon, title, body], i) => (
              <Card key={title} hoverLift className="reveal" style={{ transitionDelay: (i*0.08)+'s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={icon} size={24} />
                  </span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--color-primary)' }}>0{i+1}</span>
                </div>
                <h3 style={{ fontSize: 21, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
})();
