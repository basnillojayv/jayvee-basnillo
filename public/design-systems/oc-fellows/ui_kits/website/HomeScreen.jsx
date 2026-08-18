const { Button, SectionHeading, Eyebrow, Badge, ProgramCard, StatCounter, ValueItem, PersonCard, StoryCard, PressCard, LogoWall, TimelineStep, Card } = window.OCFellowsDesignSystem_3dfef0;

function HomeScreen({ go }) {
  const S = window.SITE;
  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'var(--surface-navy)', overflow: 'hidden' }}>
        <img src={S.photos.group} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
        <span style={{ position: 'absolute', inset: 0, background: 'var(--scrim-left)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', paddingInline: 'var(--container-pad)', paddingBlock: 'var(--space-32)' }}>
          <div style={{ maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <Eyebrow tone="inverse" uppercase>{S.hero.eyebrow}</Eyebrow>
            <h1 style={{ margin: 0, color: 'var(--text-inverse)', fontSize: 'var(--type-display-size)', fontWeight: 700, lineHeight: 1.08, letterSpacing: 'var(--tracking-tight)' }}>{S.hero.title}</h1>
            <p style={{ margin: 0, color: 'rgba(255,255,255,.88)', fontSize: 'var(--type-lead-size)', lineHeight: 'var(--leading-relaxed)', maxWidth: '52ch' }}>{S.hero.intro}</p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginTop: 'var(--space-2)' }}>
              <Button size="lg" onClick={() => go('/apply')}>Apply</Button>
              <Button size="lg" variant="inverse" onClick={() => go('/our-fellows')}>Welcome Class of 2026</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Employer logo wall */}
      <Section surface="white" compact>
        <LogoWall label="WHERE OUR FELLOWS WORK" logos={S.employers.map((n) => ({ name: n }))} />
      </Section>

      {/* Programs */}
      <Section surface="cream">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gutter)' }}>
          {S.programs.map((p, i) => (
            <ProgramCard key={p.title} title={p.title} description={p.description} href={p.href}
              image={i === 1 ? S.photos.networking : S.photos.group} />
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-16)' }}>
          <LogoWall label="OC FELLOWS IS SPONSORED BY" logos={S.sponsors.map((n) => ({ name: n }))} height={34} />
        </div>
      </Section>

      {/* About + stats */}
      <Section surface="white">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <SectionHeading eyebrow={S.about.eyebrow} title={S.about.title} />
            {S.about.body.map((t) => (
              <p key={t} style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: 'var(--measure-prose)' }}>{t}</p>
            ))}
            <div><Button variant="secondary" onClick={() => go('/our-fellows')}>Meet the OC Fellows</Button></div>
          </div>
          <img src={S.photos.networking} alt="OC Fellows at a networking event" style={{ width: '100%', borderRadius: 'var(--radius-media)', boxShadow: 'var(--shadow-md)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-20)', paddingTop: 'var(--space-12)', borderTop: '1px solid var(--border-subtle)' }}>
          <StatCounter value={48} suffix="+" label="Events Held" />
          <StatCounter value={96} suffix="%" label="Fellowship Completion Rate" />
          <StatCounter value={180} suffix="+" label="Early Career Professionals Impacted" />
        </div>
        <p style={{ margin: 'var(--space-4) 0 0', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Figures are placeholders — the supplied sources publish no counts.</p>
      </Section>

      {/* Values */}
      <Section surface="navy">
        <SectionHeading tone="dark" align="center" eyebrow={S.values.eyebrow} title={S.values.title} intro={S.values.intro} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
          {S.values.items.map((v) => <ValueItem key={v.title} tone="dark" title={v.title} description={v.description} icon={<Icon name={v.icon} />} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
          <Button variant="inverse">Learn About Our Program</Button>
        </div>
      </Section>

      {/* Fellows preview */}
      <Section surface="white">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-8)' }}>
          <SectionHeading eyebrow="Future Leaders Making a Difference" title="Meet the OC Fellows" />
          <Button variant="outline" onClick={() => go('/our-fellows')}>View All Fellows</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-12)' }}>
          {S.fellows.slice(0, 6).map((f) => (
            <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <PhotoPlaceholder label="HEADSHOT" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)' }}>{f.name}</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{f.year}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stories */}
      <Section surface="cream">
        <SectionHeading align="center" eyebrow="How OC Fellows Transform Lives" title="Impact Stories"
          intro="Stories from OC Fellows showcase growth, purpose, and connection. Each journey reflects the power of leadership, mentorship, and community in shaping change makers across Orange County and beyond." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-12)' }}>
          {S.stories.map((s, i) => (
            <StoryCard key={s.title} title={s.title} excerpt={s.excerpt} href="#"
              image={i === 1 ? S.photos.group : S.photos.networking} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
          <Button variant="secondary" onClick={() => go('/stories')}>View All Stories</Button>
        </div>
      </Section>

      {/* Team */}
      <Section surface="white">
        <SectionHeading align="center" eyebrow="Leaders United for Lasting Impact" title="OC Fellows Team"
          intro="The OC Fellows Network is a growing community of diverse, impact-driven leaders. Together, we uplift one another, build meaningful connections, and collaborate to shape a more inclusive Orange County." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-12)' }}>
          {S.team.map((t) => (
            <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ width: '68%' }}><PhotoPlaceholder ratio="1 / 1" radius="var(--radius-circle)" /></div>
              <span style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-heading)' }}>{t.name}</span>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{t.meta}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Press */}
      <Section surface="cream">
        <SectionHeading eyebrow="Featured in News & Media" title="Press"
          intro="Press from OC Fellows highlights the impact, voices, and leadership of our community." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--gutter)', marginTop: 'var(--space-12)' }}>
          {S.press.map((p) => (
            <Card key={p.publication} edge="border" padding="0" interactive href="#">
              <PhotoPlaceholder ratio="3 / 4" label="CLIPPING SCAN" radius="0" />
              <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-heading)' }}>{p.publication}</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{p.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CLAOC */}
      <Section surface="aqua">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 190 }}><PhotoPlaceholder ratio="1 / 1" radius="var(--radius-circle)" label="CLAOC LOGO NOT SUPPLIED" /></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <SectionHeading eyebrow={S.claoc.eyebrow} title={S.claoc.title} />
            {S.claoc.body.map((t) => (
              <p key={t} style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>{t}</p>
            ))}
            <div><Button variant="outline" href="https://claoc.org/">Learn more</Button></div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section surface="white">
        <SectionHeading eyebrow="Future Leaders Making a Difference" title="Timeline for our application process:" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-16)', marginTop: 'var(--space-12)' }}>
          {S.timeline.map((t, i) => (
            <TimelineStep key={t.title} number={i + 1} title={t.title} description={t.description}
              last={i >= S.timeline.length - 2} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section surface="navy" compact>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)', textAlign: 'center' }}>
          <SectionHeading tone="dark" align="center" eyebrow="Reach out if you are interested in OC Fellows" title="Get Involved with OC Fellows" />
          <Button size="lg" onClick={() => go('/apply')}>Contact us</Button>
        </div>
      </Section>
    </main>
  );
}

Object.assign(window, { HomeScreen });
