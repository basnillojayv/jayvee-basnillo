window.PRV = window.PRV || {};
(function () {
  const { Button, Icon, Card, Badge, Input } = window.DesignSystem_e5ed69;

  window.PRV.Hero = function Hero() {
    return (
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(120deg, #0C447C, #16457E 45%, #06618B)', color: '#fff' }}>
        <div aria-hidden="true" style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', top: -160, right: -120, background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)' }}></div>
        <div className="wrap prv-hero" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center', padding: '84px 0' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--cyan-100)' }}>For dentists &amp; sleep physicians</span>
            <h1 style={{ fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.05, marginTop: 14, color: '#fff' }}>Prescribe with Confidence</h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.86)', maxWidth: 480, marginTop: 18 }}>
              Precision-milled oral appliances your patients actually wear — backed by clinical evidence, AI-assisted design, and streamlined insurance support.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
              <a href="#join"><Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Join our network</Button></a>
              <button className="prv-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 18, padding: '15px 28px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', color: '#fff', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.42)' }}>
                <Icon name="log-in" size={16} /> Provider login
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="prv-hero-stats">
            {[['94%','1-year adherence','heart-pulse'],['91%','AHI reduction','activity'],['48hr','design turnaround','timer'],['100%','digital workflow','scan']].map(([v,l,ic]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 'var(--radius-md)', padding: 20, backdropFilter: 'blur(4px)' }}>
                <Icon name={ic} size={22} color="var(--cyan-100)" />
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 30, marginTop: 10, color: '#fff' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const WHY = [
    ['smile-plus', 'Patients keep wearing it', 'Comfort drives compliance. 94% of patients continue therapy at one year — far above CPAP — which means better outcomes on your charts.'],
    ['line-chart', 'Predictable, measurable results', 'Precision milling and guided titration deliver consistent AHI reduction you can document and defend at follow-up.'],
    ['file-check-2', 'Insurance made simple', 'We support prior authorization and medical billing documentation, so covered care doesn\u2019t become administrative burden.'],
    ['trending-up', 'Grow your practice', 'Add a high-demand, reimbursable service line and become the go-to referral for sleep in your community.'],
  ];
  window.PRV.Why = function Why() {
    return (
      <section id="why" style={{ padding: '104px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
            <span className="eyebrow">Why prescribe ProSomnus</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>Better for patients. Better for practice.</h2>
          </div>
          <div className="reveal prv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {WHY.map(([ic, t, b]) => (
              <Card key={t} hoverLift>
                <div style={{ display: 'flex', gap: 16 }}>
                  <span style={{ width: 52, height: 52, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={ic} size={26} />
                  </span>
                  <div>
                    <h3 style={{ fontSize: 20, marginBottom: 8 }}>{t}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>{b}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  window.PRV.Tech = function Tech() {
    const blocks = [
      { tag: 'AI-assisted design', title: 'Every appliance, optimized by algorithm', icon: 'cpu',
        body: 'Our design engine analyzes each patient\u2019s scan and bite to optimize fit, retention, and airway geometry — then a clinician reviews every case before milling.',
        points: ['Scan-driven fit optimization', 'Clinician-reviewed, every case'] },
      { tag: 'Precision manufacturing', title: 'Medical-grade, milled to microns', icon: 'settings-2',
        body: 'Control-cured, precision-milled from a single medical-grade block — no injection-molded weak points. The result is a stronger, thinner, more comfortable device.',
        points: ['Single-block milled control', 'Thinner, stronger, more comfortable'] },
    ];
    return (
      <section style={{ padding: '104px 0', background: 'var(--surface-soft)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 52px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-secondary-strong)' }}>The technology</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>Precision, end to end</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {blocks.map((b, i) => (
              <div key={b.tag} className="reveal prv-tech" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
                background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px,3vw,40px)' }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <Badge tone="primary">{b.tag}</Badge>
                  <h3 style={{ fontSize: 26, margin: '14px 0 12px' }}>{b.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 440 }}>{b.body}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {b.points.map(p => <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--text-heading)' }}><Icon name="check" size={18} color="var(--success)" /> {p}</li>)}
                  </ul>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--radius-md)', background: 'linear-gradient(150deg, var(--blue-50), var(--cyan-50))', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <Icon name={b.icon} size={72} color="var(--color-primary)" style={{ opacity: 0.85 }} />
                    <span aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(34,97,174,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,97,174,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const STEPS = [
    ['clipboard-list', 'Apply', 'Tell us about your practice. Approval is quick and there\u2019s no upfront cost to join.'],
    ['graduation-cap', 'Get trained', 'Free clinical onboarding and CE-eligible education get your team confident fast.'],
    ['send', 'Start prescribing', 'Submit digital scans through the portal. We handle design, milling, and billing support.'],
  ];
  window.PRV.Start = function Start() {
    return (
      <section style={{ padding: '104px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
            <span className="eyebrow">Getting started</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>Up and running in three steps</h2>
          </div>
          <div className="reveal prv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {STEPS.map(([ic, t, b], i) => (
              <div key={t} style={{ position: 'relative', padding: '32px 24px', background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ position: 'absolute', top: 20, right: 22, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 40, color: 'var(--blue-50)' }}>{i+1}</span>
                <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--cyan-50)', color: 'var(--cyan-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={26} /></span>
                <h3 style={{ fontSize: 21, margin: '16px 0 8px' }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  window.PRV.Join = function Join() {
    const [sent, setSent] = React.useState(false);
    return (
      <section id="join" style={{ padding: '40px 0 104px' }}>
        <div className="wrap">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }} className="prv-join">
            <div style={{ padding: 'clamp(36px,5vw,56px)', background: 'linear-gradient(150deg, #0C447C, #06618B)', color: '#fff' }}>
              <img src="../../assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 28, marginBottom: 22 }} />
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,40px)', color: '#fff', lineHeight: 1.1 }}>Join our provider network</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', marginTop: 16, maxWidth: 380 }}>
                No upfront cost. Free training. Full billing support. Start offering the CPAP alternative your patients are asking for.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26 }}>
                {['Dedicated clinical success manager','CE-eligible onboarding','Digital scan-to-delivery workflow'].map(x => (
                  <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.9)' }}><Icon name="check-circle" size={18} color="var(--cyan-100)" /> {x}</div>
                ))}
              </div>
            </div>
            <div style={{ padding: 'clamp(36px,5vw,56px)', background: 'var(--surface-card)' }}>
              {sent ? (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <span style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--success-bg)', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name="check" size={30} /></span>
                  <h3 style={{ fontSize: 24 }}>Thanks — we'll be in touch</h3>
                  <p style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 8 }}>A clinical success manager will reach out within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <h3 style={{ fontSize: 22 }}>Request information</h3>
                  <Input label="Full name" placeholder="Dr. Jane Smith" required />
                  <Input label="Practice name" placeholder="Your clinic" required />
                  <Input label="Work email" type="email" placeholder="you@practice.com" iconLeft={<Icon name="mail" size={16} />} required />
                  <Button type="submit" variant="accent" size="lg" fullWidth iconRight={<Icon name="arrow-right" size={18} />}>Join our network</Button>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>Already a partner? <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Provider login</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
})();
