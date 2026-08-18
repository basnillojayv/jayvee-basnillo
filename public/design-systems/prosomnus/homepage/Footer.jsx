window.HP = window.HP || {};
(function () {
  const { Button, Input, Icon } = window.DesignSystem_e5ed69;
  const cols = [
    ['Company', ['About', 'Newsroom', 'Careers', 'Contact']],
    ['Patients', ['How it works', 'Benefits', 'Insurance & coverage', 'Find a provider']],
    ['Providers', ['Prescribe ProSomnus', 'Provider portal', 'Clinical evidence', 'Education']],
    ['Legal', ['Privacy', 'Terms', 'Accessibility', 'HIPAA notice']],
  ];

  window.HP.Footer = function Footer() {
    const [sent, setSent] = React.useState(false);
    return (
      <footer style={{ background: 'var(--gray-900)', color: 'rgba(255,255,255,0.72)', paddingTop: 64 }}>
        <div className="wrap">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: 32, paddingBottom: 48 }}>
            <div style={{ gridColumn: 'auto' }}>
              <img src="../assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 30 }} />
              <p style={{ fontSize: 14, lineHeight: 1.65, marginTop: 16, maxWidth: 260 }}>
                Precision oral appliance therapy for obstructive sleep apnea — a comfortable, covered alternative to CPAP.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {['facebook','instagram','linkedin','youtube'].map(n => (
                  <a key={n} href="#" aria-label={n} style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)' }}>
                    <Icon name={n} size={18} />
                  </a>
                ))}
              </div>
            </div>
            {cols.map(([title, items]) => (
              <div key={title}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: 15, marginBottom: 16 }}>{title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {items.map(it => <li key={it}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>{it}</a></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '32px 0', display: 'flex', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ maxWidth: 420 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: 18 }}>Sleep tips, straight to your inbox</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>Occasional, useful, never spammy.</p>
            </div>
            {sent ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--cyan-100)', fontSize: 15, fontWeight: 500 }}>
                <Icon name="check-circle" size={20} /> Thanks — you're subscribed!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', gap: 10, alignItems: 'stretch', flex: '1 1 340px', maxWidth: 440 }}>
                <div style={{ flex: 1 }}>
                  <Input type="email" placeholder="you@example.com" required aria-label="Email address"
                    style={{ }} />
                </div>
                <Button type="submit" variant="accent">Subscribe</Button>
              </form>
            )}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '22px 0 32px', fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <span>© 2026 ProSomnus Sleep Technologies. All rights reserved.</span>
            <span>Custom-fit comfort. Covered care. Quiet nights.</span>
          </div>
        </div>
      </footer>
    );
  };
})();
