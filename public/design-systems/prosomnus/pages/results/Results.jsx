window.RES = window.RES || {};
(function () {
  const { Button, Icon, Stat, Testimonial, Card, Badge } = window.DesignSystem_e5ed69;

  window.RES.Hero = function Hero() {
    return (
      <section style={{ background: 'linear-gradient(180deg, var(--blue-50), var(--surface-card))', padding: '72px 0 40px' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, marginInline: 'auto' }}>
          <span className="eyebrow">Evidence-led outcomes</span>
          <h1 style={{ fontSize: 'clamp(38px,5vw,60px)', lineHeight: 1.05, marginTop: 12 }}>The Results Speak for Themselves</h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 560, margin: '18px auto 0' }}>
            Better sleep isn't a promise — it's measured. Here's what precision oral appliance therapy delivers for real patients.
          </p>
        </div>
      </section>
    );
  };

  window.RES.Stats = function Stats() {
    return (
      <section style={{ padding: '72px 0' }}>
        <div className="wrap">
          <div className="reveal res-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
            <Stat value={96} suffix="%" label="of patients prefer ProSomnus over CPAP" />
            <Stat value={91} suffix="%" label="average reduction in apnea events (AHI)" />
            <Stat value={200000} suffix="+" label="patients treated worldwide" />
            <Stat value={94} suffix="%" label="continue therapy at one year" />
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 28 }}>
            Figures reflect aggregated ProSomnus clinical data and peer-reviewed outcomes. Individual results vary.
          </p>
        </div>
      </section>
    );
  };

  /* Before / After sleep quality visualization */
  const BEFORE = [2,1,3,1,1,2,1,3,1,2,1,1]; // fragmented, frequent wake
  const AFTER  = [3,4,4,3,4,4,3,4,4,4,3,4]; // deep, steady
  window.RES.BeforeAfter = function BeforeAfter() {
    const [view, setView] = React.useState('after');
    const data = view === 'before' ? BEFORE : AFTER;
    const isAfter = view === 'after';
    return (
      <section style={{ padding: '96px 0', background: 'var(--surface-soft)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-secondary-strong)' }}>A single night, transformed</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>Sleep quality, before &amp; after</h2>
          </div>

          <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 'clamp(24px,4vw,40px)' }}>
            <div role="tablist" aria-label="Sleep view" style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 'var(--radius-pill)', background: 'var(--surface-soft)', marginBottom: 28 }}>
              {[['before','Before ProSomnus'],['after','With ProSomnus']].map(([k,l]) => {
                const on = view === k;
                return <button key={k} role="tab" aria-selected={on} onClick={() => setView(k)}
                  style={{ border: 'none', cursor: 'pointer', padding: '9px 18px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                    background: on ? (k==='after' ? 'var(--color-primary)' : 'var(--gray-700)') : 'transparent', color: on ? '#fff' : 'var(--text-body)', transition: 'all var(--duration-base) var(--ease-out)' }}>{l}</button>;
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(4px,1vw,10px)', height: 200 }}>
              {data.map((v, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                  <div style={{ height: `${v/4*100}%`, borderRadius: '6px 6px 3px 3px',
                    background: isAfter ? 'linear-gradient(180deg, var(--cyan-500), var(--color-primary))' : 'var(--gray-300)',
                    transition: 'height var(--duration-slow) var(--ease-out), background var(--duration-slow) var(--ease-out)' }}></div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 12, color: 'var(--text-muted)' }}>
              <span>10 PM</span><span>Sleep depth over the night</span><span>6 AM</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 28 }} className="res-stats">
              {(isAfter
                ? [['Times woken','2','moon'],['Deep sleep','+58%','trending-up'],['Feel rested','Yes','smile']]
                : [['Times woken','11','alarm-clock'],['Deep sleep','Low','trending-down'],['Feel rested','Rarely','frown']]
              ).map(([l,v,ic]) => (
                <div key={l} style={{ textAlign: 'center', padding: '16px 8px', borderRadius: 'var(--radius-md)', background: 'var(--surface-soft)' }}>
                  <Icon name={ic} size={22} color={isAfter ? 'var(--color-secondary-strong)' : 'var(--text-muted)'} />
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: 'var(--text-heading)', marginTop: 6 }}>{v}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const WALL = [
    { quote: 'I finally sleep through the night — and so does my husband. I stopped dreading bedtime.', name: 'Dana R.', role: 'Patient · 2 years', rating: 5 },
    { quote: 'I travel constantly. It fits in my pocket. No more lugging a machine through airports.', name: 'Marcus T.', role: 'Patient · 1 year', rating: 5 },
    { quote: 'My AHI dropped from 28 to 4. My doctor was genuinely impressed at my follow-up.', name: 'Robert C.', role: 'Patient · 8 months', rating: 5 },
    { quote: 'After years of fighting my CPAP, this just works. I wear it every single night.', name: 'Susan D.', role: 'Patient · 3 years', rating: 5 },
    { quote: 'Quiet, comfortable, and covered by my VA benefits. I wish I\u2019d switched sooner.', name: 'James W.', role: 'Veteran · 1 year', rating: 5 },
    { quote: 'The fit is perfect and my mornings are completely different. I have energy again.', name: 'Linda P.', role: 'Patient · 6 months', rating: 5 },
  ];
  window.RES.Wall = function Wall() {
    return (
      <section style={{ padding: '96px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
            <Badge tone="warning">4.9 average · 3,200+ reviews</Badge>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 14 }}>Thousands of quiet nights</h2>
          </div>
          <div className="reveal res-wall" style={{ columnCount: 3, columnGap: 20 }}>
            {WALL.map((t, i) => (
              <div key={i} style={{ breakInside: 'avoid', marginBottom: 20 }}>
                <Testimonial {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  window.RES.CTA = function CTA() {
    return (
      <section style={{ padding: '40px 0 104px' }}>
        <div className="wrap">
          <div className="reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(120deg, #0C447C, #16457E 45%, #06618B)', padding: 'clamp(48px,7vw,80px)', textAlign: 'center' }}>
            <span aria-hidden="true" style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', top: -160, left: -80, background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)' }}></span>
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', color: '#fff' }}>Your results start tonight.</h2>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '16px auto 32px' }}>
                Join hundreds of thousands who traded the machine for a good night's sleep.
              </p>
              <a href="../find-a-provider/index.html"><Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Find a Provider</Button></a>
            </div>
          </div>
        </div>
      </section>
    );
  };
})();
