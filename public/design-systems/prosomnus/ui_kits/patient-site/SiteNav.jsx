window.PS = window.PS || {};
const { Button, Icon } = window.DesignSystem_e5ed69;

// Scroll-reveal hook shared across sections
window.PS.useRevealObserver = function useRevealObserver() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

window.PS.SiteNav = function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['How it works','#how'],['Why ProSomnus','#why'],['Reviews','#proof'],['Coverage','#coverage']];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.85)' : 'var(--surface-card)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#top"><img src="../../assets/prosomnus-logo.svg" alt="ProSomnus" style={{ height: 30, display: 'block' }} /></a>
        <nav style={{ display: 'flex', gap: 32 }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-body)' }}>{label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button variant="ghost" size="sm">Find a provider</Button>
          <Button variant="accent" size="sm" iconRight={<Icon name="arrow-right" size={16} />}>Check coverage</Button>
        </div>
      </div>
    </header>
  );
};
