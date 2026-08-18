// ProSomnus Brand & Style Guide — page registry.
// Each page: { num, label, render } where render is a React component (or null = stub).
window.BRANDGUIDE_PAGES = (function () {
  const { Icon } = window.DesignSystem_e5ed69;

  function Cover() {
    // stars clustered in the upper night sky (x%, y%, size, delay)
    const stars = [[10,10,2,0],[20,20,1.5,1.2],[32,8,1,0.5],[46,15,1.5,2],[60,9,2,0.8],[72,18,1,1.6],[84,12,1.5,0.3],[15,32,1,2.4],[28,38,1.5,0.9],[54,30,1,1.4],[68,36,2,2.1],[88,30,1,0.6],[6,24,1.5,1.8],[40,26,1,3]];
    return (
      <div className="cover">
        <div className="sky" aria-hidden="true"></div>
        <div className="crescent" aria-hidden="true"></div>
        <div className="sun" aria-hidden="true"></div>
        <div className="horizon" aria-hidden="true"></div>
        <div className="stars" aria-hidden="true">
          {stars.map((s,i) => <i key={i} style={{ left: s[0]+'%', top: s[1]+'%', width: s[2], height: s[2], animationDelay: s[3]+'s' }} />)}
        </div>

        {/* Top meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          <span>Brand &amp; Style Guide</span>
          <span>PSX.BRAND.001</span>
        </div>

        {/* Center statement */}
        <div style={{ maxWidth: 780, marginTop: 'auto', marginBottom: 'auto', paddingTop: 36 }}>
          <img src="../assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 40, marginBottom: 44 }} />
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--cyan-100)', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--amber-500)', boxShadow: '0 0 12px 2px rgba(251,191,36,0.7)' }}></span> The system behind the sleep
          </div>
          <h1 style={{ fontSize: 'clamp(46px, 6.4vw, 88px)', lineHeight: 0.98, color: '#fff', letterSpacing: '-0.025em', fontWeight: 500 }}>
            Night <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--cyan-100)' }}>into</span> morning.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', maxWidth: 480, marginTop: 28 }}>
            The design system that carries ProSomnus from first hello to a full night's rest — calm, warm, and unmistakably human.
          </p>
        </div>

        {/* Bottom metadata grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 24, maxWidth: 780 }}>
          {[['System ID','PSX.BRAND.001'],['Revision','1.0 — 07.06.2026'],['Owner','Brand & Design'],['Status','Living document']].map(([k,v]) => (
            <div key={k}>
              <div style={{ fontSize: 10.5, letterSpacing: '.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{k}</div>
              <div style={{ fontSize: 14.5, color: '#fff', marginTop: 6, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return [
    { num: '00', label: 'Cover', render: Cover },
    { num: '01', label: 'Foundation', render: null },
    { num: '02', label: 'Logo', render: null },
    { num: '03', label: 'Color', render: null },
    { num: '04', label: 'Type', render: null },
    { num: '05', label: 'Grid & Spacing', render: null },
    { num: '06', label: 'Voice & Tone', render: null },
    { num: '07', label: 'Imagery', render: null },
    { num: '08', label: 'Components', render: null },
    { num: '09', label: 'Buttons', render: null },
    { num: '10', label: 'Cards', render: null },
    { num: '11', label: 'Forms & Inputs', render: null },
    { num: '12', label: 'Motion', render: null },
    { num: '13', label: 'Email', render: null },
    { num: '14', label: 'Patterns', render: null },
  ];
})();
