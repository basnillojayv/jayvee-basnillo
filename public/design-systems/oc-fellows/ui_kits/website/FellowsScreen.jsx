const { FilterChip, Select, Input, Badge } = window.OCFellowsDesignSystem_3dfef0;

function FellowsScreen() {
  const S = window.SITE;
  const years = ['All', ...Array.from(new Set(S.fellows.map((f) => String(f.year)))).sort((a, b) => b - a)];
  const [year, setYear] = React.useState('All');
  const [query, setQuery] = React.useState('');
  const list = S.fellows.filter((f) => (year === 'All' || String(f.year) === year) && f.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <main>
      <PageHeader eyebrow="Future Leaders Making a Difference" title="Meet the OC Fellows"
        intro="Every Fellow joins a two-year cohort of early-career professionals working across Orange County." />
      <Section surface="white">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span style={{ fontSize: 'var(--type-label-size)', fontWeight: 600, color: 'var(--text-heading)' }}>OC Fellows Group Filter</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {years.map((y) => <FilterChip key={y} active={year === y} onClick={() => setYear(y)}>{y}</FilterChip>)}
            </div>
          </div>
          <div style={{ width: 280 }}>
            <Input id="fellow-search" label="Search Fellows" placeholder="Search by name"
              value={query} onChange={(e) => setQuery(e.target.value)} icon={<Icon name="search" size={18} />} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{list.length} {list.length === 1 ? 'Fellow' : 'Fellows'}</span>
          {year !== 'All' ? <Badge tone="aqua">Class of {year}</Badge> : null}
        </div>

        {list.length ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-6)' }}>
            {list.map((f) => (
              <a key={f.name} href="#" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textDecoration: 'none' }}>
                <PhotoPlaceholder label="HEADSHOT" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)' }}>{f.name}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{f.year}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p style={{ marginTop: 'var(--space-8)', fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>No data was found</p>
        )}

        <p style={{ margin: 'var(--space-10) 0 0', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)' }}>
          Fellow headshots are intentionally left as placeholders — no portrait photography was included in the supplied brand assets, and the brand forbids stock substitutes.
        </p>
      </Section>
    </main>
  );
}

Object.assign(window, { FellowsScreen });
