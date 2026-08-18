// Shared page chrome for ProSomnus interior pages: solid sticky header + footer.
// Registers window.SITE.Header and window.SITE.Footer.
window.SITE = window.SITE || {};
(function () {
  const { Button, Input, Icon } = window.DesignSystem_e5ed69;

  // active: which nav key is the current page (for aria-current + styling)
  const LINKS = [
    ['how',       'How It Works',   '../how-it-works/index.html'],
    ['provider',  'Find a Provider','../find-a-provider/index.html'],
    ['results',   'The Results',    '../results/index.html'],
    ['providers', 'For Providers',  '../providers/index.html'],
    ['faq',       'FAQ',            '../faq/index.html'],
  ];

  window.SITE.Header = function Header({ active }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const on = () => setScrolled(window.scrollY > 10);
      on(); window.addEventListener('scroll', on, { passive: true });
      return () => window.removeEventListener('scroll', on);
    }, []);
    const barH = scrolled ? 60 : 78;
    const logoH = scrolled ? 25 : 30;
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : '0 1px 0 var(--border-subtle)',
        transition: 'box-shadow var(--duration-slow) var(--ease-out)' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: barH, transition: 'height var(--duration-slow) var(--ease-out)' }}>
          <a href="../../homepage/index.html" aria-label="ProSomnus home">
            <img src="../../assets/prosomnus-logo.svg" alt="ProSomnus" style={{ height: logoH, display: 'block', transition: 'height var(--duration-slow) var(--ease-out)' }} />
          </a>
          <nav className="desktop-only" aria-label="Primary" style={{ display: 'flex', gap: 32 }}>
            {LINKS.map(([k,l,h]) => (
              <a key={k} href={h} aria-current={active === k ? 'page' : undefined}
                style={{ fontSize: 15, fontWeight: active === k ? 600 : 500,
                  color: active === k ? 'var(--color-primary)' : 'var(--text-body)', whiteSpace: 'nowrap', borderRadius: 4 }}>{l}</a>
            ))}
          </nav>
          <div className="desktop-only" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="ghost" size="sm" style={{ whiteSpace: 'nowrap' }}>Provider login</Button>
            <a href="../find-a-provider/index.html"><Button variant="accent" size="sm" iconRight={<Icon name="arrow-right" size={16} />} style={{ whiteSpace: 'nowrap' }}>Find a Provider</Button></a>
          </div>
          <div className="mobile-cluster" style={{ display: 'none', gap: 8, alignItems: 'center' }}>
            <a href="../find-a-provider/index.html"><Button variant="accent" size="sm" style={{ whiteSpace: 'nowrap' }}>Find a Provider</Button></a>
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="m-menu"
              style={{ display: 'inline-flex', border: '1px solid var(--border-default)', background: 'var(--surface-card)', borderRadius: 'var(--radius-sm)',
                width: 40, height: 40, alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-heading)' }}>
              <Icon name={open ? 'x' : 'menu'} size={22} />
            </button>
          </div>
        </div>
        {open && (
          <div id="m-menu" className="mobile-cluster" style={{ display: 'none', flexDirection: 'column', gap: 2, padding: '4px 22px 18px', background: 'rgba(255,255,255,0.98)' }}>
            {LINKS.map(([k,l,h]) => <a key={k} href={h} style={{ padding: '12px 0', fontSize: 16, fontWeight: 500, borderBottom: '1px solid var(--border-subtle)' }}>{l}</a>)}
          </div>
        )}
        <style>{`
          @media (max-width:900px){ .mobile-cluster{display:flex !important} }
          header a:focus-visible, header button:focus-visible { outline:3px solid var(--color-primary); outline-offset:3px; }
        `}</style>
      </header>
    );
  };

  const cols = [
    ['Company', ['About', 'Newsroom', 'Careers', 'Contact']],
    ['Patients', ['How it works', 'The results', 'Insurance & coverage', 'Find a provider']],
    ['Providers', ['Prescribe ProSomnus', 'Provider portal', 'Clinical evidence', 'Join our network']],
    ['Legal', ['Privacy', 'Terms', 'Accessibility', 'HIPAA notice']],
  ];

  // Reusable single-open accordion. items: [{q, a}]. defaultOpen index or -1.
  window.SITE.Accordion = function Accordion({ items, defaultOpen = 0 }) {
    const [open, setOpen] = React.useState(defaultOpen);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it, i) => {
          const on = open === i;
          return (
            <div key={i} style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: on ? 'var(--shadow-md)' : 'var(--shadow-xs)', overflow: 'hidden', transition: 'box-shadow var(--duration-base) var(--ease-out)' }}>
              <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textAlign: 'left',
                  padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, color: 'var(--text-heading)' }}>
                {it.q}
                <span style={{ flexShrink: 0, color: 'var(--color-primary)', transform: on ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }}>
                  <Icon name="chevron-down" size={22} />
                </span>
              </button>
              <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows var(--duration-base) var(--ease-out)' }}>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ margin: 0, padding: '0 24px 22px', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 720 }}>{it.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  window.SITE.Footer = function Footer() {
    const [sent, setSent] = React.useState(false);
    return (
      <footer style={{ background: 'var(--gray-900)', color: 'rgba(255,255,255,0.72)', paddingTop: 64 }}>
        <div className="wrap">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: 32, paddingBottom: 48 }}>
            <div>
              <img src="../../assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 30 }} />
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
                <div style={{ flex: 1 }}><Input type="email" placeholder="you@example.com" required aria-label="Email address" /></div>
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
