window.HIW = window.HIW || {};
(function () {
  const { Button, Icon } = window.DesignSystem_e5ed69;

  const ROWS = [
    ['Comfort', 'Worn like a retainer', 'Mask strapped to your face'],
    ['Noise', 'Silent', 'Constant motor hum'],
    ['Travel', 'Fits in your pocket', 'Bulky machine + power'],
    ['Maintenance', 'Just rinse & go', 'Hoses, filters, distilled water'],
    ['Getting started', 'Home sleep test', 'Often a sleep-lab stay'],
  ];

  window.HIW.Comparison = function Comparison() {
    return (
      <section style={{ padding: '104px 0', background: 'var(--surface-soft)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-secondary-strong)' }}>An honest comparison</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>ProSomnus vs. CPAP</h2>
          </div>
          <div className="reveal" style={{ maxWidth: 880, margin: '0 auto', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr' }}>
              <div style={{ padding: '20px 24px' }}></div>
              <div style={{ padding: '20px 24px', background: 'var(--blue-50)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="../../assets/prosomnus-mark.svg" style={{ height: 22 }} alt="" aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--blue-700)' }}>ProSomnus</span>
              </div>
              <div style={{ padding: '20px 24px', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--text-muted)' }}>CPAP</div>
            </div>
            {ROWS.map(([label, ps, cpap]) => (
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

  const FAQS = [
    { q: 'Does it really work as well as CPAP?', a: 'For most people with mild to moderate obstructive sleep apnea — and many with severe OSA who can\u2019t tolerate CPAP — oral appliance therapy is a clinically proven, guideline-recommended treatment. 96% of ProSomnus patients prefer it over CPAP, and higher comfort means people actually keep using it.' },
    { q: 'Is it covered by insurance?', a: 'Yes. ProSomnus is covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing out of pocket. Your provider\u2019s team verifies your specific coverage before you start.' },
    { q: 'Is it comfortable to wear?', a: 'It\u2019s worn like a retainer and precision-milled to fit your mouth exactly. There are no straps, masks, or hoses — most people adjust within a few nights.' },
    { q: 'How long does the whole process take?', a: 'Many patients go from first consult to a fitted device in a few weeks. The home sleep test returns results in days, and your custom appliance is milled and fitted shortly after.' },
  ];

  window.HIW.FAQ = function FAQ() {
    return (
      <section style={{ padding: '104px 0' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Good to know</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,40px)', marginTop: 10 }}>Common questions</h2>
          </div>
          <div className="reveal"><window.SITE.Accordion items={FAQS} /></div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <a href="../faq/index.html" style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              See all FAQs <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </section>
    );
  };

  window.HIW.CTA = function CTA() {
    return (
      <section style={{ padding: '104px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(120deg, #0C447C, #16457E 45%, #06618B)', padding: 'clamp(48px,7vw,80px)', textAlign: 'center' }}>
            <span aria-hidden="true" style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', top: -160, right: -80, background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)' }}></span>
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', color: '#fff' }}>Ready, set, sleep.</h2>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '16px auto 32px' }}>
                Find a ProSomnus-trained provider near you and take the first step tonight.
              </p>
              <a href="../find-a-provider/index.html"><Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Find a Provider</Button></a>
            </div>
          </div>
        </div>
      </section>
    );
  };
})();
