window.PS = window.PS || {};
(function () {
  const { Icon } = window.DesignSystem_e5ed69;
  const cols = [
    ['Product', ['How it works', 'ProSomnus vs CPAP', 'Comfort & fit', 'Insurance & coverage']],
    ['For providers', ['Prescribe ProSomnus', 'Provider portal', 'Clinical evidence', 'Education']],
    ['Company', ['About', 'Newsroom', 'Careers', 'Contact']],
  ];
  window.PS.SiteFooter = function SiteFooter() {
    return (
      <footer style={{ background: 'var(--gray-900)', color: 'rgba(255,255,255,0.7)', padding: '56px 0 32px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
            <div>
              <img src="../../assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 30 }} />
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 16, maxWidth: 260 }}>
                Precision oral appliance therapy for obstructive sleep apnea. A comfortable, covered alternative to CPAP.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 18, color: 'rgba(255,255,255,0.6)' }}>
                {['facebook','instagram','linkedin','youtube'].map(n => <Icon key={n} name={n} size={20} />)}
              </div>
            </div>
            {cols.map(([title, items]) => (
              <div key={title}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: 14, marginBottom: 14 }}>{title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map(it => <li key={it}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{it}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 40, paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            <span>© 2026 ProSomnus Sleep Technologies. All rights reserved.</span>
            <span style={{ display: 'flex', gap: 20 }}><a href="#" style={{color:'inherit'}}>Privacy</a><a href="#" style={{color:'inherit'}}>Terms</a><a href="#" style={{color:'inherit'}}>Accessibility</a></span>
          </div>
        </div>
      </footer>
    );
  };
})();
