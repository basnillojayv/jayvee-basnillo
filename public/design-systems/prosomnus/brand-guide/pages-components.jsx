// Brand Guide pages 09–12: Buttons, Cards, Forms & Inputs, Motion
(function () {
  const { Icon, Card, Badge, Button, Input, Select, Checkbox, Radio, Switch, Testimonial, Alert, Stat } = window.DesignSystem_e5ed69;
  const { PageHeader, Section, DoDont } = window.BG;

  /* ---------------- 09 BUTTONS ---------------- */
  window.BG.pages['09'] = function Buttons() {
    return (
      <div className="ipage">
        <PageHeader num="09" label="Buttons" title="Clear actions, one hero"
          intro="Amber is the primary action and appears once per view. Blue, outlined, and ghost carry everything else in descending emphasis." />
        <div className="ibody">
          <Section k="9.1" title="Variants">
            <div className="panel" style={{ padding: 28, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <Button variant="accent" iconRight={<Icon name="arrow-right" size={16} />}>Find a Provider</Button>
              <Button variant="primary">Save changes</Button>
              <Button variant="secondary" iconLeft={<Icon name="download" size={16} />}>Download</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
            <div className="g4" style={{ marginTop: 16 }}>
              {[['Accent','The one primary CTA (amber)'],['Primary','Standard actions (blue)'],['Secondary','Lower emphasis (outlined)'],['Ghost','Tertiary / inline']].map(([t,d])=>(
                <div key={t} className="panelSoft" style={{ padding: 16 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{t}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{d}</div>
                </div>
              ))}
            </div>
          </Section>
          <Section k="9.2" title="Sizes">
            <div className="panel" style={{ padding: 28, display: 'flex', gap: 16, alignItems: 'center' }}>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </Section>
          <Section k="9.3" title="States">
            <div className="g4">
              {[['Default', {}],['Disabled',{disabled:true}]].map(([label, props])=>(
                <div key={label} className="panel" style={{ padding: 22, textAlign: 'center' }}>
                  <Button variant="accent" {...props}>Book now</Button>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>{label}</div>
                </div>
              ))}
              <div className="panel" style={{ padding: 22, textAlign: 'center' }}>
                <Button variant="primary">Hover / press</Button>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>Darkens + 0.97 scale</div>
              </div>
              <div className="panel" style={{ padding: 22, textAlign: 'center' }}>
                <Button variant="secondary" fullWidth>Full width</Button>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>fullWidth</div>
              </div>
            </div>
          </Section>
          <Section k="9.4" title="Rules">
            <div className="g2">
              <DoDont good title="One amber per view">Reserve the amber accent for the single most important action on the screen.</DoDont>
              <DoDont title="Competing CTAs">Never place two amber buttons side by side — pair amber with a secondary or ghost.</DoDont>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 10 CARDS ---------------- */
  window.BG.pages['10'] = function Cards() {
    return (
      <div className="ipage">
        <PageHeader num="10" label="Cards" title="Soft surfaces"
          intro="Cards are the system's base container — white, 12px radius, gentle shadow, generous padding. They lift on hover to invite interaction." />
        <div className="ibody">
          <Section k="10.1" title="Default & hover-lift">
            <div className="g2">
              <Card>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Custom-fit comfort</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>Worn like a retainer, precision-milled for your mouth — no masks, hoses, or noise.</p>
              </Card>
              <Card hoverLift>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Hover me</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>With <span className="mono">hoverLift</span>, the card rises 4px and deepens its shadow.</p>
              </Card>
            </div>
          </Section>
          <Section k="10.2" title="Testimonial card">
            <div className="g2">
              <Testimonial rating={5} quote="I finally sleep through the night — and so does my husband." name="Dana R." role="Patient · 2 years" />
              <Testimonial rating={5} quote="Compliance is night and day versus CPAP. My patients actually wear it." name="Dr. Elena Ruiz" role="Sleep physician" />
            </div>
          </Section>
          <Section k="10.3" title="Provider card" sub="Composed from primitives">
            <div className="g2">
              <div className="panel" style={{ padding: 22 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--blue-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>ER</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, color: 'var(--text-heading)' }}>Dr. Elena Ruiz</div>
                    <div style={{ fontSize: 13, color: 'var(--color-primary)', fontWeight: 500 }}>Sleep Physician</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, fontSize: 13, color: 'var(--text-muted)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--amber-500)' }}><Icon name="star" size={15} style={{ fill: 'var(--amber-500)' }} /><strong style={{ color: 'var(--text-heading)' }}>4.9</strong></span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="map-pin" size={14} /> 1.2 mi</span>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  <Badge tone="wellness" size="sm">Aetna</Badge><Badge tone="wellness" size="sm">Medicare</Badge>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                  <Button variant="secondary" size="sm" fullWidth iconLeft={<Icon name="phone" size={15} />}>Call</Button>
                  <Button variant="accent" size="sm" fullWidth>Book</Button>
                </div>
              </div>
              <div className="panelSoft" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: 17, marginBottom: 10 }}>Anatomy</h3>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.8, color: 'var(--text-body)' }}>
                  <li>Avatar + name + specialty</li>
                  <li>Rating &amp; distance meta</li>
                  <li>Insurance <span className="mono">Badge</span>s</li>
                  <li>Call (secondary) + Book (accent)</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 11 FORMS & INPUTS ---------------- */
  window.BG.pages['11'] = function Forms() {
    return (
      <div className="ipage">
        <PageHeader num="11" label="Forms & Inputs" title="Calm, clear input"
          intro="Inputs share an 8px radius and a soft focus ring. Errors are stated plainly and kindly — never alarming red walls." />
        <div className="ibody">
          <Section k="11.1" title="Text fields">
            <div className="g3">
              <div className="panel" style={{ padding: 22 }}>
                <Input label="Email" type="email" placeholder="you@example.com" iconLeft={<Icon name="mail" size={16} />} />
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>Default</div>
              </div>
              <div className="panel" style={{ padding: 22 }}>
                <Input label="ZIP code" defaultValue="94063" hint="We use this to find nearby providers." />
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>With hint</div>
              </div>
              <div className="panel" style={{ padding: 22 }}>
                <Input label="Email" defaultValue="dana@sleep" error="Please enter a valid email address." />
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>Error</div>
              </div>
            </div>
          </Section>
          <Section k="11.2" title="Selection controls">
            <div className="g3">
              <div className="panel" style={{ padding: 22 }}>
                <Select label="Insurance" options={['Aetna','Cigna','Medicare','VA benefits']} />
              </div>
              <div className="panel" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Checkbox label="I agree to the privacy policy" defaultChecked />
                <Radio options={['Patient','Dentist','Physician']} defaultValue="Patient" />
              </div>
              <div className="panel" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
                <Switch label="Email reminders" defaultChecked />
                <Switch label="SMS reminders" />
              </div>
            </div>
          </Section>
          <Section k="11.3" title="Validation & feedback">
            <div className="g2">
              <Alert tone="success" title="You're covered">ProSomnus is in network with your plan.</Alert>
              <Alert tone="error" title="Something went wrong">We couldn't verify your insurance. Please try again.</Alert>
            </div>
          </Section>
          <Section k="11.4" title="Rules">
            <div className="g2">
              <DoDont good title="Label everything">Every field has a visible label and, where useful, a short hint beneath it.</DoDont>
              <DoDont title="Placeholder as label">Never rely on placeholder text alone — it disappears on input and fails accessibility.</DoDont>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 12 MOTION ---------------- */
  window.BG.pages['12'] = function Motion() {
    const [replay, setReplay] = React.useState(0);
    return (
      <div className="ipage">
        <PageHeader num="12" label="Motion" title="Motion that reassures"
          intro="Movement guides attention, never distracts. Soft ease-outs, short durations, and full respect for reduced-motion preferences." />
        <div className="ibody">
          <Section k="12.1" title="Timing tokens">
            <div className="g4">
              {[['Fast','150ms','hover, press'],['Base','250ms','toggles, reveals'],['Slow','450ms','page & count-up'],['Ease','cubic-bezier(.16,1,.3,1)','soft ease-out']].map(([n,v,u])=>(
                <div key={n} className="panelSoft" style={{ padding: 18 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-heading)' }}>{n}</div>
                  <div className="mono" style={{ color: 'var(--color-primary)', marginTop: 6, fontSize: 11.5 }}>{v}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 6 }}>{u}</div>
                </div>
              ))}
            </div>
          </Section>
          <Section k="12.2" title="Signature motions" sub="Hover the cards">
            <div className="g3">
              <Card hoverLift>
                <Icon name="mouse-pointer-click" size={22} color="var(--color-primary)" />
                <h3 style={{ fontSize: 18, margin: '12px 0 6px' }}>Hover-lift</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>translateY(-4px) + deeper shadow · 250ms</p>
              </Card>
              <div className="panel" style={{ padding: 24 }}>
                <Icon name="trending-up" size={22} color="var(--color-primary)" />
                <h3 style={{ fontSize: 18, margin: '12px 0 6px' }}>Count-up</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>Stats animate from 0 on scroll-in · ~1.6s</p>
              </div>
              <div className="panel" style={{ padding: 24 }}>
                <Icon name="arrow-down-to-line" size={22} color="var(--color-primary)" />
                <h3 style={{ fontSize: 18, margin: '12px 0 6px' }}>Scroll reveal</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>Fade + 16px rise as sections enter · 1s</p>
              </div>
            </div>
          </Section>
          <Section k="12.3" title="Count-up in action">
            <div className="panel" style={{ padding: 32 }} key={replay}>
              <div className="g3">
                <Stat value={96} suffix="%" label="prefer ProSomnus over CPAP" />
                <Stat value={200000} suffix="+" label="patients treated" />
                <Stat value={94} suffix="%" label="continue at one year" />
              </div>
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <Button variant="secondary" size="sm" iconLeft={<Icon name="rotate-ccw" size={15} />} onClick={() => setReplay(r=>r+1)}>Replay</Button>
              </div>
            </div>
          </Section>
          <Section k="12.4" title="Reduced motion">
            <Alert tone="info" title="Always honored">Under <span className="mono">prefers-reduced-motion</span>, durations collapse to 0, count-ups jump to final values, and scroll reveals show content immediately.</Alert>
          </Section>
        </div>
      </div>
    );
  };
})();
