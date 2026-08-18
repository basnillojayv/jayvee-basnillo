const { StoryCard, Button, SectionHeading, Badge } = window.OCFellowsDesignSystem_3dfef0;

function StoriesScreen() {
  const S = window.SITE;
  const featured = S.stories[0];
  return (
    <main>
      <PageHeader eyebrow="How OC Fellows Transform Lives" title="Impact Stories"
        intro="Stories from OC Fellows showcase growth, purpose, and connection. Each journey reflects the power of leadership, mentorship, and community in shaping change makers across Orange County and beyond." />
      <Section surface="white">
        <a href="#" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-12)', alignItems: 'center', textDecoration: 'none' }}>
          <img src={S.photos.group} alt="" style={{ width: '100%', borderRadius: 'var(--radius-media)', boxShadow: 'var(--shadow-md)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Badge tone="orange">Featured Story</Badge>
            <h2 style={{ margin: 0, fontSize: 'var(--type-h2-size)', lineHeight: 'var(--leading-snug)' }}>{featured.title}</h2>
            <p style={{ margin: 0, fontSize: 'var(--type-lead-size)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>{featured.excerpt}</p>
            <div style={{ marginTop: 'var(--space-2)' }}><Button>Read More</Button></div>
          </div>
        </a>
      </Section>
      <Section surface="cream" compact>
        <SectionHeading eyebrow="More from the network" title="All Stories" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-10)' }}>
          {S.stories.concat(S.stories).map((s, i) => (
            <StoryCard key={i} title={s.title} excerpt={s.excerpt} href="#"
              image={i % 2 ? S.photos.networking : S.photos.group} />
          ))}
        </div>
        <p style={{ margin: 'var(--space-8) 0 0', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          Three stories exist in the fetched source; the grid repeats them to show the layout at scale.
        </p>
      </Section>
    </main>
  );
}

Object.assign(window, { StoriesScreen });
