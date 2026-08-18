window.FAP = window.FAP || {};
(function () {
  const { Button, Icon, Select, Input, Badge } = window.DesignSystem_e5ed69;

  const PROVIDERS = [
    { id: 1, name: 'Dr. Elena Ruiz', spec: 'Sleep Physician', clinic: 'Bayside Sleep Medicine', rating: 4.9, reviews: 212, dist: 1.2, x: 28, y: 34, insur: ['Aetna','Medicare'], initials: 'ER' },
    { id: 2, name: 'Dr. Marcus Lee', spec: 'Dental Sleep Medicine', clinic: 'Harborview Dental', rating: 4.8, reviews: 168, dist: 2.4, x: 54, y: 22, insur: ['Cigna','VA benefits'], initials: 'ML' },
    { id: 3, name: 'Dr. Priya Anand', spec: 'Sleep Physician', clinic: 'Cascade Sleep Center', rating: 5.0, reviews: 301, dist: 3.1, x: 43, y: 58, insur: ['BCBS','Medicare'], initials: 'PA' },
    { id: 4, name: 'Dr. James Whitfield', spec: 'Dental Sleep Medicine', clinic: 'Summit Family Dental', rating: 4.7, reviews: 94, dist: 4.0, x: 70, y: 47, insur: ['UnitedHealthcare'], initials: 'JW' },
    { id: 5, name: 'Dr. Dana Okafor', spec: 'Sleep Physician', clinic: 'Lakeside Pulmonary', rating: 4.9, reviews: 145, dist: 5.3, x: 18, y: 66, insur: ['Aetna','VA benefits'], initials: 'DO' },
    { id: 6, name: 'Dr. Sofia Martone', spec: 'Dental Sleep Medicine', clinic: 'Meridian Dental Group', rating: 4.8, reviews: 187, dist: 6.1, x: 62, y: 72, insur: ['Medicare','Cigna'], initials: 'SM' },
  ];

  function Stars({ r }) {
    return (
      <span role="img" aria-label={`Rated ${r} out of 5`} style={{ display: 'inline-flex', alignItems: 'center', gap: 3, color: 'var(--amber-500)' }}>
        <Icon name="star" size={15} style={{ fill: 'var(--amber-500)' }} />
        <strong style={{ color: 'var(--text-heading)', fontSize: 14 }}>{r.toFixed(1)}</strong>
      </span>
    );
  }

  function Skeleton() {
    return (
      <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: 22 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <span style={sk(52, 52, '50%')}></span>
          <div style={{ flex: 1 }}>
            <span style={sk('60%', 15, 6, '0 0 8px')}></span>
            <span style={sk('40%', 12, 6)}></span>
          </div>
        </div>
        <span style={sk('100%', 12, 6, '18px 0 8px')}></span>
        <span style={sk('70%', 12, 6)}></span>
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <span style={sk('50%', 40, 8)}></span>
          <span style={sk('50%', 40, 8)}></span>
        </div>
      </div>
    );
  }
  function sk(w, h, r, m) { return { display: 'block', width: w, height: h, borderRadius: r, margin: m || 0,
    background: 'linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 37%, var(--gray-100) 63%)', backgroundSize: '400% 100%', animation: 'fap-shimmer 1.4s ease infinite' }; }

  function ProviderCard({ p, hovered, onHover }) {
    return (
      <div onMouseEnter={() => onHover(p.id)} onMouseLeave={() => onHover(null)}
        style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 22,
          boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transform: hovered ? 'translateY(-3px)' : 'none',
          transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
          border: hovered ? '1px solid var(--color-secondary)' : '1px solid transparent' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <span style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, background: 'var(--blue-50)', color: 'var(--blue-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{p.initials}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, color: 'var(--text-heading)' }}>{p.name}</div>
            <div style={{ fontSize: 13, color: 'var(--color-primary)', fontWeight: 500 }}>{p.spec}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14, fontSize: 13, color: 'var(--text-muted)' }}>
          <Stars r={p.rating} /> <span>({p.reviews})</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="map-pin" size={14} /> {p.dist} mi</span>
        </div>
        <div style={{ fontSize: 14, color: 'var(--text-body)', marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="building-2" size={15} color="var(--text-muted)" /> {p.clinic}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
          {p.insur.map(x => <Badge key={x} tone="wellness" size="sm">{x}</Badge>)}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <Button variant="secondary" size="sm" fullWidth iconLeft={<Icon name="phone" size={15} />}>Call</Button>
          <Button variant="accent" size="sm" fullWidth iconRight={<Icon name="arrow-right" size={15} />}>Book</Button>
        </div>
      </div>
    );
  }

  window.FAP.Page = function Page() {
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState(PROVIDERS);
    const [hovered, setHovered] = React.useState(null);

    const runSearch = () => {
      setLoading(true);
      setResults([]);
      setTimeout(() => { setResults(PROVIDERS); setLoading(false); }, 1300);
    };

    return (
      <main id="main">
        {/* Hero + search */}
        <section style={{ background: 'linear-gradient(180deg, var(--blue-50), var(--surface-card))', padding: '56px 0 40px' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }}>
              <span className="eyebrow">100k+ patients treated near you</span>
              <h1 style={{ fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.06, marginTop: 12 }}>Find a Provider</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-body)', marginTop: 14 }}>
                Search ProSomnus-trained dentists and sleep physicians who accept your insurance.
              </p>
            </div>
            <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 18, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr auto', gap: 12, alignItems: 'end', maxWidth: 940, margin: '0 auto' }} className="fap-search">
              <Input label="Location" defaultValue="San Mateo, CA" iconLeft={<Icon name="map-pin" size={16} />} />
              <Select label="Specialty" options={['All specialties','Sleep Physician','Dental Sleep Medicine']} />
              <Select label="Insurance" options={['All insurance','Aetna','BCBS','Cigna','UnitedHealthcare','Medicare','VA benefits']} />
              <Button variant="accent" size="lg" onClick={runSearch} iconLeft={<Icon name="search" size={18} />} style={{ whiteSpace: 'nowrap' }}>Search</Button>
            </div>
          </div>
        </section>

        {/* Map + results */}
        <section style={{ padding: '40px 0 96px' }}>
          <div className="wrap fap-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 32, alignItems: 'start' }}>
            {/* Map */}
            <div style={{ position: 'sticky', top: 92 }}>
              <div style={{ position: 'relative', height: 560, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)',
                background: 'linear-gradient(160deg,#eaf2fb,#dfeef8)' }}>
                {/* stylized street grid */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(34,97,174,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,97,174,0.08) 1px, transparent 1px)',
                  backgroundSize: '46px 46px' }}></div>
                <div aria-hidden="true" style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', left: '35%', top: '30%', background: 'radial-gradient(circle, rgba(0,154,217,0.12), transparent 70%)' }}></div>
                {PROVIDERS.map(p => {
                  const on = hovered === p.id;
                  return (
                    <button key={p.id} onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}
                      aria-label={`${p.name}, ${p.dist} miles`}
                      style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, transform: `translate(-50%,-100%) scale(${on ? 1.18 : 1})`,
                        border: 'none', background: 'none', cursor: 'pointer', transition: 'transform var(--duration-base) var(--ease-out)', zIndex: on ? 5 : 1 }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ width: 34, height: 34, borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)',
                          background: on ? 'var(--amber-500)' : 'var(--color-primary)', boxShadow: 'var(--shadow-md)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ transform: 'rotate(45deg)', color: on ? 'var(--gray-900)' : '#fff', fontWeight: 700, fontSize: 12, fontFamily: 'var(--font-heading)' }}>{p.initials}</span>
                        </span>
                        {on && <span style={{ marginTop: 6, background: 'var(--surface-card)', boxShadow: 'var(--shadow-md)', borderRadius: 6, padding: '4px 8px', fontSize: 12, fontWeight: 600, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>{p.clinic}</span>}
                      </span>
                    </button>
                  );
                })}
                <div style={{ position: 'absolute', left: 14, bottom: 14, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(6px)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontSize: 13, color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Icon name="navigation" size={15} color="var(--color-primary)" /> {results.length || 6} providers within 10 miles
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <h2 style={{ fontSize: 22 }}>{loading ? 'Searching…' : `${results.length} providers near you`}</h2>
                <Select options={['Sort: Distance','Sort: Rating','Sort: Availability']} aria-label="Sort results" style={{ maxWidth: 200 }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fap-cards">
                {loading
                  ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
                  : results.map(p => <ProviderCard key={p.id} p={p} hovered={hovered === p.id} onHover={setHovered} />)}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
})();
