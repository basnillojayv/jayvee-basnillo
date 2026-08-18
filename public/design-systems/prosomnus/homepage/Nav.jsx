window.HP = window.HP || {};
(function () {
  const { Button, Icon } = window.DesignSystem_e5ed69;
  const links = [['How It Works','../pages/how-it-works/index.html'],['Find a Provider','../pages/find-a-provider/index.html'],['The Results','../pages/results/index.html'],['For Providers','../pages/providers/index.html'],['FAQ','../pages/faq/index.html']];
  window.HP.Nav = function Nav() {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const on = () => setScrolled(window.scrollY > 10);
      on();
      window.addEventListener('scroll', on, { passive: true });
      return () => window.removeEventListener('scroll', on);
    }, []);
    const barH = scrolled ? 60 : 82;
    const logoH = scrolled ? 25 : 31;
    const onDark = !scrolled; // hero is a deep-blue full-bleed band
    const linkColor = onDark ? 'rgba(255,255,255,0.92)' : 'var(--text-body)';
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 60,
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'background var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) var(--ease-out)' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: barH, transition: 'height var(--duration-slow) var(--ease-out)' }}>
          <a href="#top" aria-label="ProSomnus home">
            <img src={onDark ? '../assets/prosomnus-logo-white.svg' : '../assets/prosomnus-logo.svg'} alt="ProSomnus" style={{ height: logoH, display: 'block', transition: 'height var(--duration-slow) var(--ease-out)' }} />
          </a>
          <nav className="desktop-only" aria-label="Primary" style={{ display: 'flex', gap: 34 }}>
            {links.map(([l,h]) => <a key={h} href={h} style={{ fontSize: 15, fontWeight: 500, color: linkColor, whiteSpace: 'nowrap', borderRadius: 4, transition: 'color var(--duration-slow) var(--ease-out)' }}>{l}</a>)}
          </nav>
          <div className="desktop-only" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="ghost" size="sm" style={{ whiteSpace: 'nowrap', color: onDark ? '#fff' : undefined }}>Provider login</Button>
            <a href="../pages/find-a-provider/index.html"><Button variant="accent" size="sm" iconRight={<Icon name="arrow-right" size={16} />} style={{ whiteSpace: 'nowrap' }}>Find a Provider</Button></a>
          </div>
          {/* Mobile: CTA stays visible next to the menu toggle */}
          <div className="mobile-cluster" style={{ display: 'none', gap: 8, alignItems: 'center' }}>
            <a href="../pages/find-a-provider/index.html"><Button variant="accent" size="sm" style={{ whiteSpace: 'nowrap' }}>Find a Provider</Button></a>
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu"
              style={{ display: 'inline-flex', border: '1px solid var(--border-default)', background: 'var(--surface-card)', borderRadius: 'var(--radius-sm)',
                width: 40, height: 40, alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-heading)' }}>
              <Icon name={open ? 'x' : 'menu'} size={22} />
            </button>
          </div>
        </div>
        {open && (
          <div id="mobile-menu" className="mobile-cluster" style={{ display: 'none', flexDirection: 'column', gap: 4, padding: '4px 22px 20px', background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)' }}>
            {links.map(([l,h]) => <a key={h} href={h} onClick={() => setOpen(false)} style={{ padding: '12px 0', fontSize: 16, fontWeight: 500, borderBottom: '1px solid var(--border-subtle)' }}>{l}</a>)}
          </div>
        )}
        <style>{`
          @media (max-width:900px){
            .mobile-cluster{display:flex !important}
          }
          header nav a:focus-visible, header a:focus-visible, header button:focus-visible {
            outline: 3px solid var(--color-primary); outline-offset: 3px;
          }
        `}</style>
      </header>
    );
  };
})();
