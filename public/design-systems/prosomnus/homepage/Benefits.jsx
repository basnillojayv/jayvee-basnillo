window.HP = window.HP || {};
(function () {
  const { Card, Icon } = window.DesignSystem_e5ed69;
  const benefits = [
    ['piggy-bank', 'Affordable', 'A fraction of the lifetime cost of CPAP — no ongoing supplies, filters, or replacement parts to buy.'],
    ['shield-check', 'Covered by Insurance', 'Covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing.'],
    ['calendar-heart', 'Flexible Payment Plans', 'Simple monthly options make treatment easy to start. We\u2019ll help you find a plan that fits.'],
  ];

  window.HP.Benefits = function Benefits() {
    return (
      <section id="benefits" style={{ padding: '120px 0', background: 'var(--surface-soft)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="eyebrow">Why ProSomnus</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,42px)', marginTop: 12 }}>Better sleep, within reach</h2>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {benefits.map(([icon, title, body], i) => (
              <div className="reveal" key={title} style={{ transitionDelay: (i*0.09)+'s' }}>
                <BenefitCard icon={icon} title={title} body={body} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  function BenefitCard({ icon, title, body }) {
    const [hover, setHover] = React.useState(false);
    return (
      <Card hoverLift padding={30} style={{ height: '100%' }}>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <span style={{ display: 'inline-flex', width: 60, height: 60, borderRadius: 'var(--radius-lg)',
            background: hover ? 'var(--color-primary)' : 'var(--blue-50)', color: hover ? '#fff' : 'var(--color-primary)',
            alignItems: 'center', justifyContent: 'center', marginBottom: 20,
            transition: 'all var(--duration-base) var(--ease-out)',
            transform: hover ? 'translateY(-4px) rotate(-6deg)' : 'none' }}>
            <Icon name={icon} size={28} />
          </span>
          <h3 style={{ fontSize: 22, marginBottom: 10 }}>{title}</h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)' }}>{body}</p>
        </div>
      </Card>
    );
  }
})();
