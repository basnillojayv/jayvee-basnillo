const { NavBar, Footer } = window.OCFellowsDesignSystem_3dfef0;

function App() {
  const S = window.SITE;
  const [route, setRoute] = React.useState('/');
  const go = (href) => { setRoute(href); window.scrollTo({ top: 0, behavior: 'instant' }); };
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [route]);
  React.useEffect(() => {
    const t = setInterval(() => { if (window.lucide) window.lucide.createIcons(); }, 600);
    return () => clearInterval(t);
  }, []);
  const Screen = route === '/our-fellows' ? FellowsScreen : route === '/stories' ? StoriesScreen : route === '/apply' ? ApplyScreen : HomeScreen;
  return (
    <div>
      <NavBar logo={S.assets.logoPrimary} items={S.nav} activeHref={route} onNavigate={go} cta={{ label: 'Apply', href: '#' }} />
      <Screen go={go} />
      <Footer logo={S.assets.logoWhite}
        columns={[
          { title: 'Navigate', links: [{ label: 'About', href: '#' }, { label: 'Our Fellows', href: '#' }, { label: 'Stories', href: '#' }, { label: 'Our Network', href: '#' }] },
          { title: 'Our Program', links: [{ label: 'Learning', href: '#' }, { label: 'Social', href: '#' }, { label: 'Community', href: '#' }] },
          { title: 'More', links: [{ label: 'Our Team', href: '#' }, { label: 'Press', href: '#' }, { label: 'Apply', href: '#' }, { label: 'Contact us', href: '#' }] },
        ]}
        social={[{ label: 'Follow us on LinkedIn', href: 'https://www.linkedin.com/company/orangefellowship/', icon: <Icon name="linkedin" size={18} /> }]}
        legal={[{ label: 'Privacy Policy', href: '#' }]} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
if (window.lucide) window.lucide.createIcons();
