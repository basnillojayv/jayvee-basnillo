// Brand Guide pages 01–04: Foundation, Logo, Color, Type
(function () {
  const { Icon, Card, Badge, Button } = window.DesignSystem_e5ed69;
  const { PageHeader, Section, DoDont, Token } = window.BG;

  /* ---------------- 01 FOUNDATION ---------------- */
  window.BG.pages['01'] = function Foundation() {
    const principles = [
      ['feather', 'Calm over clever', 'Every screen should lower the heart rate. Generous space, soft shadows, no visual shouting.'],
      ['heart-handshake', 'Human, not clinical', 'We speak like a trusted person, not a device manual. Warmth is a feature, not decoration.'],
      ['shield-check', 'Earned trust', 'Proof, coverage, and credentials are shown plainly — reassurance you can verify.'],
      ['accessibility', 'Care for everyone', 'Legible type, strong contrast, large targets, motion that respects preferences.'],
    ];
    return (
      <div className="ipage">
        <PageHeader num="01" label="Foundation" title="What ProSomnus stands for"
          intro="Before a single color or component, the brand is a promise: restful sleep, made human. These principles guide every decision in this system." />
        <div className="ibody">
          <Section k="1.1" title="Brand story">
            <div className="g2" style={{ alignItems: 'start' }}>
              <div className="prose">
                <p>ProSomnus makes custom-fit oral appliances that treat sleep apnea — a comfortable, insurance-covered alternative to the CPAP machine. No masks. No hoses. No noise.</p>
                <p>For hundreds of thousands of people, that means finally sleeping through the night — and finally wanting to. Our job as a brand is to make that relief feel close, credible, and calm.</p>
              </div>
              <div className="panelSoft" style={{ padding: 28 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Mission</div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 24, lineHeight: 1.3, color: 'var(--text-heading)', margin: '12px 0 0' }}>
                  Help people breathe easier and sleep better — comfortably, and without the machine.
                </p>
              </div>
            </div>
          </Section>

          <Section k="1.2" title="Two audiences, one voice" sub="Primary & secondary">
            <div className="g2">
              <Card>
                <Badge tone="primary">Primary</Badge>
                <h3 style={{ fontSize: 22, margin: '14px 0 8px' }}>Patients</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>People with sleep apnea seeking a CPAP alternative. Speak to relief, comfort, and everyday life — reassuring and human. Lead with feeling, back it with proof.</p>
              </Card>
              <Card>
                <Badge tone="wellness">Secondary</Badge>
                <h3 style={{ fontSize: 22, margin: '14px 0 8px' }}>Providers</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)' }}>Dentists &amp; sleep physicians who prescribe. Speak to evidence, adherence, and workflow — credible and efficient, but never cold.</p>
              </Card>
            </div>
          </Section>

          <Section k="1.3" title="Design principles">
            <div className="g2">
              {principles.map(([ic, t, b]) => (
                <div key={t} className="panel" style={{ padding: 22, display: 'flex', gap: 16 }}>
                  <span style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={23} /></span>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 6 }}>{t}</h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 02 LOGO ---------------- */
  window.BG.pages['02'] = function Logo() {
    return (
      <div className="ipage">
        <PageHeader num="02" label="Logo" title="The mark"
          intro="The ProSomnus wordmark pairs a crescent — a quiet nod to sleep — with a confident, trustworthy wordmark. Protect it with space and use it consistently." />
        <div className="ibody">
          <Section k="2.1" title="Primary lockup">
            <div className="panel" style={{ padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-soft)' }}>
              <img src="../assets/prosomnus-logo.svg" alt="ProSomnus primary logo" style={{ height: 64 }} />
            </div>
            <div className="g3" style={{ marginTop: 20 }}>
              <div className="panel" style={{ padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="../assets/prosomnus-mark.svg" alt="ProSomnus mark" style={{ height: 52 }} />
                <span style={{ position: 'absolute' }}></span>
              </div>
              <div className="panel" style={{ padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--blue-700)' }}>
                <img src="../assets/prosomnus-logo-white.svg" alt="ProSomnus reversed" style={{ height: 40 }} />
              </div>
              <div className="panelSoft" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-heading)' }}>Files</div>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>prosomnus-logo.svg</span>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>prosomnus-logo.png</span>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>prosomnus-logo-white.svg</span>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>prosomnus-mark.svg</span>
              </div>
            </div>
          </Section>

          <Section k="2.2" title="Clear space & minimum size">
            <div className="g2" style={{ alignItems: 'stretch' }}>
              <div className="panel" style={{ padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'relative', padding: 26, outline: '1px dashed var(--border-default)' }}>
                  <img src="../assets/prosomnus-logo.svg" alt="Clear space diagram" style={{ height: 44, display: 'block' }} />
                </div>
                <span style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center', fontSize: 13, color: 'var(--text-muted)' }}>Clear space = the height of the crescent mark on all sides.</span>
              </div>
              <div className="panelSoft" style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img src="../assets/prosomnus-logo.svg" alt="" style={{ height: 24 }} />
                  <span className="mono" style={{ color: 'var(--text-muted)' }}>min 140px wide (digital)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img src="../assets/prosomnus-mark.svg" alt="" style={{ height: 22 }} />
                  <span className="mono" style={{ color: 'var(--text-muted)' }}>mark min 20px</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>Never place the logo smaller than these sizes; legibility of the wordmark comes first.</p>
              </div>
            </div>
          </Section>

          <Section k="2.3" title="Misuse">
            <div className="g4">
              {[['stretch','Don\u2019t stretch or distort'],['palette','Don\u2019t recolor the mark'],['sparkles','Don\u2019t add effects or shadows'],['type','Don\u2019t rebuild it in another font']].map(([ic,t]) => (
                <div key={t} className="panel" style={{ overflow: 'hidden' }}>
                  <div style={{ height: 92, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-soft)', position: 'relative' }}>
                    <img src="../assets/prosomnus-mark.svg" alt="" style={{ height: 34, opacity: 0.5, filter: ic==='palette' ? 'hue-rotate(120deg) saturate(3)' : ic==='stretch' ? 'none' : 'none', transform: ic==='stretch' ? 'scaleX(1.8)' : 'none' }} />
                    <span style={{ position: 'absolute', top: 8, right: 8, width: 22, height: 22, borderRadius: '50%', background: 'var(--error-bg)', color: 'var(--error)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={14} /></span>
                  </div>
                  <div style={{ padding: '12px 14px', fontSize: 13.5, color: 'var(--text-body)' }}>{t}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 03 COLOR ---------------- */
  window.BG.pages['03'] = function Color() {
    const Swatch = ({ v, name, hex, dark }) => (
      <div className="panel" style={{ overflow: 'hidden' }}>
        <div style={{ height: 92, background: v }}></div>
        <div style={{ padding: '12px 14px' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{name}</div>
          <div className="mono" style={{ color: 'var(--text-muted)', marginTop: 3 }}>{hex}</div>
        </div>
      </div>
    );
    return (
      <div className="ipage">
        <PageHeader num="03" label="Color" title="A palette drawn from the logo"
          intro="Royal blue anchors the system; cyan supports it. Amber is the single warm accent — reserved exclusively for primary calls to action." />
        <div className="ibody">
          <Section k="3.1" title="Primary — Royal blue" sub="Trust & calm">
            <div className="g4">
              <Swatch v="var(--blue-50)" name="Blue 50" hex="#EAF1FA" />
              <Swatch v="var(--blue-100)" name="Blue 100" hex="#CFE0F2" />
              <Swatch v="var(--blue-500)" name="Blue 500 · Primary" hex="#2261AE" />
              <Swatch v="var(--blue-700)" name="Blue 700 · Dark" hex="#16457E" />
            </div>
          </Section>
          <Section k="3.2" title="Secondary — Cyan" sub="Wellness & reassurance">
            <div className="g4">
              <Swatch v="var(--cyan-50)" name="Cyan 50" hex="#E1F4FC" />
              <Swatch v="var(--cyan-100)" name="Cyan 100" hex="#BFE7F8" />
              <Swatch v="var(--cyan-500)" name="Cyan 500 · Secondary" hex="#009AD9" />
              <Swatch v="var(--cyan-700)" name="Cyan 700 · Dark" hex="#06618B" />
            </div>
          </Section>
          <Section k="3.3" title="Accent & status" sub="Amber = CTA only">
            <div className="g4">
              <Swatch v="var(--amber-500)" name="Amber 500 · Accent" hex="#FBBF24" />
              <Swatch v="var(--success)" name="Success" hex="#059669" />
              <Swatch v="var(--error)" name="Error" hex="#DC2626" />
              <div className="panel" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, display: 'flex' }}>
                  <div style={{ flex: 1, background: 'var(--gray-100)' }}></div>
                  <div style={{ flex: 1, background: 'var(--gray-500)' }}></div>
                  <div style={{ flex: 1, background: 'var(--gray-900)' }}></div>
                </div>
                <div style={{ padding: '12px 14px' }}><div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Neutrals</div><div className="mono" style={{ color: 'var(--text-muted)', marginTop: 3 }}>#F3F4F6 → #1F2937</div></div>
              </div>
            </div>
          </Section>
          <Section k="3.4" title="Usage rules">
            <div className="g2">
              <DoDont good title="Amber for the one primary action">Use amber for the single most important CTA on a view — "Find a Provider," "Book." One per screen.</DoDont>
              <DoDont title="Amber as decoration">Never use amber for backgrounds, icons, borders, or a second competing button. It loses its meaning.</DoDont>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 04 TYPE ---------------- */
  window.BG.pages['04'] = function Type() {
    const scale = [['H1','48 / 600','Sleep, restored', 48],['H2','32 / 600','A better way to breathe', 32],['H3','24 / 600','Custom-fit for comfort', 24],['H4','20 / 500','Covered by your insurance', 20]];
    return (
      <div className="ipage">
        <PageHeader num="04" label="Type" title="Serif warmth, sans clarity"
          intro="Newsreader (a modern serif) leads with editorial warmth; Manrope carries body and UI with clean legibility. Substitutes for the licensed Utopia + Univers." />
        <div className="ibody">
          <Section k="4.1" title="Typefaces">
            <div className="g2">
              <div className="panel" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 52, color: 'var(--text-heading)', lineHeight: 1 }}>Aa</div>
                <div style={{ marginTop: 16, fontFamily: 'var(--font-heading)', fontSize: 20, color: 'var(--text-heading)' }}>Newsreader</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>Headings · 400–700 · ≈ Utopia</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-body)', marginTop: 14 }}>ABCDEFGabcdefg 0123456789</div>
              </div>
              <div className="panel" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 52, fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1 }}>Aa</div>
                <div style={{ marginTop: 16, fontFamily: 'var(--font-heading)', fontSize: 20, color: 'var(--text-heading)' }}>Manrope</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>Body &amp; UI · 400–800 · ≈ Univers</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--text-body)', marginTop: 14 }}>ABCDEFGabcdefg 0123456789</div>
              </div>
            </div>
          </Section>
          <Section k="4.2" title="Type scale">
            <div className="panel" style={{ padding: '8px 28px' }}>
              {scale.map(([tag, spec, sample, px]) => (
                <div key={tag} style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '18px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span className="mono" style={{ color: 'var(--color-primary)', width: 34 }}>{tag}</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: px>=24?600:500, fontSize: Math.min(px, 40), color: 'var(--text-heading)', flex: 1 }}>{sample}</span>
                  <span className="mono" style={{ color: 'var(--text-muted)' }}>{spec}</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '18px 0' }}>
                <span className="mono" style={{ color: 'var(--color-primary)', width: 34 }}>Body</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', flex: 1, maxWidth: 520 }}>Worn like a retainer and precisely made for your mouth — no masks, hoses, or noise.</span>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>16 / 1.7</span>
              </div>
            </div>
          </Section>
          <Section k="4.3" title="Pairing rules">
            <div className="g2">
              <DoDont good title="Serif heads, sans body">Set headlines in Newsreader and everything functional — body, labels, buttons, captions — in Manrope.</DoDont>
              <DoDont title="Serif in the UI">Don't set buttons, form labels, or long body copy in the serif. It's for headlines and big stats only.</DoDont>
            </div>
          </Section>
        </div>
      </div>
    );
  };
})();
