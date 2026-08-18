window.HIW = window.HIW || {};
(function () {
  const { Button, Icon, Card } = window.DesignSystem_e5ed69;

  /* ---------- Animated per-step diagrams (functional, icon-based) ---------- */
  function DiagramMeet() {
    return (
      <div style={dbox()}>
        <span style={{ ...ring(230), animation: 'hiw-pulse 4s var(--ease-in-out) infinite' }}></span>
        <span style={{ ...ring(160), animation: 'hiw-pulse 4s var(--ease-in-out) 1s infinite' }}></span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, position: 'relative' }}>
          <span style={avatar('var(--blue-50)', 'var(--color-primary)')}><Icon name="user" size={30} /></span>
          <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan-500)', animation: 'hiw-travel 2.4s var(--ease-in-out) infinite' }}></span>
          <span style={avatar('var(--cyan-50)', 'var(--cyan-700)')}><Icon name="stethoscope" size={30} /></span>
        </div>
        <div style={caption()}>A quick video or in-office visit</div>
      </div>
    );
  }
  function DiagramTest() {
    return (
      <div style={dbox()}>
        <span style={{ ...ring(230), animation: 'hiw-pulse 4s var(--ease-in-out) infinite' }}></span>
        <div style={{ position: 'relative', width: 130, height: 130, borderRadius: 28, background: '#fff', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
          {[0,1,2,3,4].map(i => (
            <span key={i} style={{ width: 8, borderRadius: 4, background: 'var(--color-primary)', height: 20, animation: `hiw-wave 1.1s var(--ease-in-out) ${i*0.13}s infinite` }}></span>
          ))}
          <span style={{ position: 'absolute', top: 12, right: 14, color: 'var(--cyan-500)' }}><Icon name="moon" size={18} /></span>
        </div>
        <div style={caption()}>Sleep at home, in your own bed</div>
      </div>
    );
  }
  function DiagramFit() {
    return (
      <div style={dbox()}>
        <span style={{ ...ring(230), animation: 'hiw-pulse 4s var(--ease-in-out) infinite' }}></span>
        <div style={{ position: 'relative', width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle at 50% 35%, var(--cyan-50), var(--blue-50))', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <Icon name="smile" size={54} color="var(--color-primary-strong)" />
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--cyan-500), transparent)', animation: 'hiw-scan 2.6s var(--ease-in-out) infinite' }}></span>
          </div>
          <div style={caption()}>A custom device, milled to fit</div>
      </div>
    );
  }

  const STEPS = [
    { key: 'meet', n: '01', title: 'Meet a Provider', icon: 'calendar-check',
      body: 'Connect with a ProSomnus-trained dentist or sleep physician near you. They review your history and confirm oral appliance therapy is right for you — often in a single visit.',
      points: ['No referral needed to start', 'In-office or virtual consult'], Diagram: DiagramMeet },
    { key: 'test', n: '02', title: 'Home Sleep Test', icon: 'moon',
      body: 'Skip the sleep lab. A simple, comfortable home test measures your breathing overnight in your own bed. Your provider uses the results to tailor your treatment.',
      points: ['Sleep in your own bed', 'Results in a few days'], Diagram: DiagramTest },
    { key: 'fit', n: '03', title: 'Get Fitted', icon: 'badge-check',
      body: 'A quick digital scan captures your bite — no messy molds. Your custom appliance is precision-milled, then fitted and fine-tuned for comfort and results.',
      points: ['Digital scan, no molds', 'Adjusted for a perfect fit'], Diagram: DiagramFit },
  ];

  window.HIW.Hero = function Hero() {
    return (
      <section style={{ position: 'relative', overflow: 'hidden', padding: '76px 0 88px',
        background: 'linear-gradient(180deg, var(--blue-50), #F4F9FE 60%, var(--surface-card))' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <span style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', top: -140, right: -80, background: 'radial-gradient(circle, rgba(0,154,217,0.18), transparent 68%)', filter: 'blur(6px)' }}></span>
        </div>
        <div className="wrap" style={{ position: 'relative', textAlign: 'center', maxWidth: 760, marginInline: 'auto' }}>
          <span className="eyebrow">Simple from day one</span>
          <h1 style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.05, marginTop: 14 }}>How ProSomnus Works</h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 560, margin: '18px auto 0' }}>
            Three calm, guided steps from first hello to a full night's sleep — no lab stays, no masks, no guesswork.
          </p>
        </div>
      </section>
    );
  };

  window.HIW.Steps = function Steps() {
    const [active, setActive] = React.useState(0);
    const step = STEPS[active];
    const Diagram = step.Diagram;
    return (
      <section id="steps" style={{ padding: '104px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }} className="reveal">
            <span className="eyebrow">The journey</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>Three steps to better sleep</h2>
          </div>

          {/* Step tabs */}
          <div role="tablist" aria-label="Treatment steps" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <button key={s.key} role="tab" aria-selected={on} aria-controls={`panel-${s.key}`} onClick={() => setActive(i)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 20px', cursor: 'pointer',
                    borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
                    border: `1px solid ${on ? 'transparent' : 'var(--border-default)'}`,
                    background: on ? 'var(--color-primary)' : 'var(--surface-card)', color: on ? '#fff' : 'var(--text-body)',
                    boxShadow: on ? 'var(--shadow-md)' : 'none', transition: 'all var(--duration-base) var(--ease-out)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, opacity: on ? 0.85 : 0.5 }}>{s.n}</span>
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div id={`panel-${step.key}`} role="tabpanel" key={step.key}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', animation: 'hiw-fade var(--duration-slow) var(--ease-out)' }}
            className="hiw-panel">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ width: 50, height: 50, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={step.icon} size={26} />
                </span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--color-primary)' }}>Step {step.n}</span>
              </div>
              <h3 style={{ fontSize: 30, marginBottom: 12 }}>{step.title}</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 460 }}>{step.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {step.points.map(p => (
                  <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--text-heading)' }}>
                    <Icon name="check" size={18} color="var(--success)" /> {p}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                {active > 0 && <Button variant="ghost" onClick={() => setActive(active-1)} iconLeft={<Icon name="arrow-left" size={16} />}>Back</Button>}
                {active < STEPS.length-1
                  ? <Button variant="secondary" onClick={() => setActive(active+1)} iconRight={<Icon name="arrow-right" size={16} />}>Next step</Button>
                  : <a href="../find-a-provider/index.html"><Button variant="accent" iconRight={<Icon name="arrow-right" size={16} />}>Find a Provider</Button></a>}
              </div>
            </div>
            <div style={{ order: 1 }}><Diagram /></div>
          </div>
        </div>
      </section>
    );
  };

  /* shared diagram styles */
  function dbox() { return { position: 'relative', minHeight: 320, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(160deg, var(--surface-soft), var(--blue-50))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }; }
  function ring(sz) { return { position: 'absolute', width: sz, height: sz, borderRadius: '50%', border: '1.5px solid rgba(34,97,174,0.16)', pointerEvents: 'none' }; }
  function avatar(bg, fg) { return { width: 84, height: 84, borderRadius: '50%', background: bg, color: fg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', zIndex: 1 }; }
  function caption() { return { position: 'relative', fontSize: 14, color: 'var(--text-muted)', fontWeight: 500 }; }
})();
