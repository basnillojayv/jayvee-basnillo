const { Button, Input, Select, Textarea, Checkbox, TimelineStep, SectionHeading, Card } = window.OCFellowsDesignSystem_3dfef0;

function ApplyScreen() {
  const S = window.SITE;
  const [sent, setSent] = React.useState(false);
  return (
    <main>
      <PageHeader eyebrow="Connect. Grow. Succeed." title="Apply to OC Fellows"
        intro="Applications open on March 1st each year and close at the end of April." />
      <Section surface="white">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'var(--space-16)', alignItems: 'start' }}>
          <div>
            <SectionHeading eyebrow="Future Leaders Making a Difference" title="Timeline for our application process:" />
            <div style={{ marginTop: 'var(--space-8)' }}>
              {S.timeline.map((t, i) => (
                <TimelineStep key={t.title} number={i + 1} title={t.title} description={t.description}
                  active={i === 0} last={i === S.timeline.length - 1} />
              ))}
            </div>
          </div>
          <Card surface="cream" edge="border" padding="var(--space-8)">
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--status-success-bg)', color: 'var(--status-success)' }}>
                  <Icon name="check" size={24} />
                </span>
                <h3 style={{ margin: 0 }}>Thanks — we have your interest.</h3>
                <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
                  The OC Fellows team reviews expressions of interest as applications open. Final decisions are announced the first week of July.
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <h3 style={{ margin: 0 }}>Express your interest</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <Input id="a-first" label="First name" required />
                  <Input id="a-last" label="Last name" required />
                </div>
                <Input id="a-email" label="Work email" type="email" required icon={<Icon name="mail" size={18} />} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <Input id="a-employer" label="Employer" placeholder="Where you work today" />
                  <Select id="a-cohort" label="Target cohort" placeholder="Select a year" options={['2027', '2028']} />
                </div>
                <Textarea id="a-why" label="Why do you want to join OC Fellows?" rows={4}
                  hint="Two or three sentences is plenty." />
                <Checkbox id="a-news" label="Add me to the OC Fellows mailing list" description="Quarterly updates only." />
                <Button type="submit" size="lg" fullWidth>Submit</Button>
                <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                  The live site collects applications through an external Google Form. This form is a recreation of that step, not a working submission.
                </p>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </main>
  );
}

Object.assign(window, { ApplyScreen });
