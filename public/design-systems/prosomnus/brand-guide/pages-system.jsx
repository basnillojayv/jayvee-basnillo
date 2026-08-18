// Brand Guide pages 05–08: Grid & Spacing, Voice & Tone, Imagery, Components
(function () {
  const { Icon, Card, Badge, Button } = window.DesignSystem_e5ed69;
  const { PageHeader, Section, DoDont, Token } = window.BG;

  /* ---------------- 05 GRID & SPACING ---------------- */
  window.BG.pages['05'] = function Grid() {
    const scale = [['space-1','4'],['space-2','8'],['space-3','12'],['space-4','16'],['space-6','24'],['space-8','32'],['space-12','48']];
    return (
      <div className="ipage">
        <PageHeader num="05" label="Grid & Spacing" title="Room to breathe"
          intro="A 4px base scale keeps rhythm consistent, while generous whitespace does the calming work. Space is a feature, not empty room." />
        <div className="ibody">
          <Section k="5.1" title="Spacing scale" sub="4px base">
            <div className="panel" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {scale.map(([tok, px]) => (
                <div key={tok} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  <span className="mono" style={{ width: 90, color: 'var(--text-heading)' }}>{tok}</span>
                  <span style={{ height: 16, width: px+'px', background: 'var(--color-primary)', borderRadius: 3 }}></span>
                  <span className="mono" style={{ color: 'var(--text-muted)' }}>{px}px</span>
                </div>
              ))}
            </div>
          </Section>
          <Section k="5.2" title="Layout grid" sub="12 columns · 1160px max">
            <div className="panel" style={{ padding: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 10, height: 120 }}>
                {Array.from({length:12}).map((_,i)=>(<div key={i} style={{ background: 'var(--blue-50)', borderRadius: 4 }}></div>))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>12 cols</span>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>gutter 24px · margin 40px</span>
              </div>
            </div>
          </Section>
          <Section k="5.3" title="Breakpoints">
            <div className="g4">
              {[['Mobile','< 640','smartphone'],['Tablet','640–1024','tablet'],['Desktop','1024–1440','monitor'],['Wide','> 1440','tv']].map(([n,r,ic])=>(
                <div key={n} className="panel" style={{ padding: 22 }}>
                  <Icon name={ic} size={22} color="var(--color-primary)" />
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', marginTop: 12 }}>{n}</div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginTop: 4 }}>{r}px</div>
                </div>
              ))}
            </div>
          </Section>
          <Section k="5.4" title="Radius & elevation">
            <div className="g2">
              <div className="panel" style={{ padding: 28, display: 'flex', gap: 18, alignItems: 'flex-end' }}>
                {[['sm','8'],['md','12'],['lg','16']].map(([n,px])=>(
                  <div key={n} style={{ textAlign: 'center' }}>
                    <div style={{ width: 72, height: 56, background: 'var(--blue-50)', boxShadow: 'inset 0 0 0 1.5px var(--color-primary)', borderRadius: px+'px' }}></div>
                    <div className="mono" style={{ color: 'var(--text-muted)', marginTop: 8 }}>{px}px</div>
                  </div>
                ))}
              </div>
              <div className="panelSoft" style={{ padding: 28, display: 'flex', gap: 22, alignItems: 'center', justifyContent: 'center' }}>
                {['var(--shadow-sm)','var(--shadow-md)','var(--shadow-lg)'].map((s,i)=>(
                  <div key={i} style={{ width: 66, height: 54, background: '#fff', borderRadius: 12, boxShadow: s }}></div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 06 VOICE & TONE ---------------- */
  window.BG.pages['06'] = function Voice() {
    return (
      <div className="ipage">
        <PageHeader num="06" label="Voice & Tone" title="Reassuring. Warm. Human."
          intro="We talk like a trusted person who happens to be an expert — never like a device manual. Lead with how life feels better, then back it with proof." />
        <div className="ibody">
          <Section k="6.1" title="Principles">
            <div className="g3">
              {[['messages-square','Speak human','Plain words over jargon. "A comfortable device worn like a retainer," not "mandibular advancement device."'],['hand-heart','Reassure first','Lead with relief and comfort; address worry gently and honestly.'],['badge-check','Earn the claim','Every promise is backed by proof, coverage, or a credential.']].map(([ic,t,b])=>(
                <div key={t} className="panel" style={{ padding: 22 }}>
                  <Icon name={ic} size={22} color="var(--color-primary)" />
                  <h3 style={{ fontSize: 18, margin: '12px 0 6px' }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section k="6.2" title="Do & Don't">
            <div className="g2">
              <DoDont good title="We say">"Sleep through the night — no mask, no hose, no noise. 96% of patients prefer it."</DoDont>
              <DoDont title="Not this">"Utilize our FDA-cleared MAD for the clinical management of OSA and associated comorbidities."</DoDont>
            </div>
          </Section>
          <Section k="6.3" title="Tone by audience">
            <div className="g2">
              <Card>
                <Badge tone="primary">Patients</Badge>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 20, lineHeight: 1.35, color: 'var(--text-heading)', margin: '14px 0 0' }}>"You deserve a good night's sleep. We'll match you with a provider near you."</p>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 10 }}>Warm, second-person, life-focused.</p>
              </Card>
              <Card>
                <Badge tone="wellness">Providers</Badge>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 20, lineHeight: 1.35, color: 'var(--text-heading)', margin: '14px 0 0' }}>"Predictable titration and streamlined documentation — therapy your patients actually adhere to."</p>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 10 }}>Credible, efficient, still human.</p>
              </Card>
            </div>
          </Section>
          <Section k="6.4" title="Mechanics">
            <div className="g4">
              {[['Casing','Sentence case'],['Person','You / we'],['Emoji','Never in UI'],['Numbers','Only real proof']].map(([k,v])=>(
                <div key={k} className="panelSoft" style={{ padding: 18 }}>
                  <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', marginTop: 6 }}>{v}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 07 IMAGERY ---------------- */
  window.BG.pages['07'] = function Imagery() {
    const gradients = [
      ['Warm morning light','linear-gradient(150deg,#cfe6f6,#eaf4fc 55%,#fff3d6)'],
      ['Restful, real people','linear-gradient(150deg,#dfeef8,#cfe0f2)'],
      ['Calm bedroom tones','linear-gradient(150deg,#0C3B6B,#06618B)'],
    ];
    return (
      <div className="ipage">
        <PageHeader num="07" label="Imagery" title="Calm, real, human"
          intro="Photography shows real rest and real people — soft natural light, warm mornings, quiet bedrooms. Never cold, clinical, or staged stock." />
        <div className="ibody">
          <Section k="7.1" title="Direction">
            <div className="g3">
              {gradients.map(([label, g], i)=>(
                <div key={i} className="panel" style={{ overflow: 'hidden' }}>
                  <div style={{ height: 150, background: g, display: 'flex', alignItems: 'flex-end', padding: 14 }}>
                    <span style={{ color: i===2?'#fff':'var(--blue-700)', fontSize: 13, fontWeight: 600, background: i===2?'rgba(255,255,255,0.15)':'rgba(255,255,255,0.6)', padding: '4px 10px', borderRadius: 999, backdropFilter: 'blur(4px)' }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>Placeholders shown — supply real ProSomnus photography for production.</p>
          </Section>
          <Section k="7.2" title="Do & Don't">
            <div className="g2">
              <DoDont good title="Do">Warm natural light, genuine calm, real patients and partners, generous negative space, soft focus backgrounds.</DoDont>
              <DoDont title="Don't">Cold blue clinical lighting, medical equipment close-ups, stock "doctor points at camera," harsh flash, clutter.</DoDont>
            </div>
          </Section>
          <Section k="7.3" title="Treatment">
            <div className="g4">
              {[['sun','Warm white balance'],['aperture','Soft depth of field'],['maximize','Room to breathe'],['users','People, not devices']].map(([ic,t])=>(
                <div key={t} className="panelSoft" style={{ padding: 20 }}>
                  <Icon name={ic} size={22} color="var(--color-secondary-strong)" />
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-heading)', marginTop: 10 }}>{t}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 08 COMPONENTS ---------------- */
  window.BG.pages['08'] = function Components() {
    const set = [
      ['forms','Forms','Button, Input, Select, Checkbox, Radio, Switch'],
      ['display','Display','Card, Badge, Tag, Stat, Testimonial'],
      ['feedback','Feedback','Alert, Dialog'],
      ['media','Media','Icon (Lucide wrapper)'],
    ];
    return (
      <div className="ipage">
        <PageHeader num="08" label="Components" title="The building blocks"
          intro="Fourteen reusable primitives, grouped by concern. All share the system's tokens — soft radius, gentle shadows, and the amber-for-CTA rule." />
        <div className="ibody">
          <Section k="8.1" title="The set">
            <div className="g2">
              {set.map(([ic,t,list])=>(
                <div key={t} className="panel" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic==='forms'?'text-cursor-input':ic==='display'?'layout-grid':ic==='feedback'?'message-circle':'image'} size={20} /></span>
                    <h3 style={{ fontSize: 19 }}>{t}</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.6 }}>{list}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section k="8.2" title="Live sampler">
            <div className="panel" style={{ padding: 28, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              <Button variant="accent">Primary CTA</Button>
              <Button variant="secondary">Secondary</Button>
              <Badge tone="primary">FDA cleared</Badge>
              <Badge tone="wellness">In network</Badge>
              <Badge tone="success">Approved</Badge>
            </div>
          </Section>
          <Section k="8.3" title="Principles">
            <div className="g3">
              {[['blocks','Composable','Screens are built from primitives — never one-off markup.'],['palette','Token-driven','Color, space, and type come from CSS variables, not literals.'],['accessibility','Accessible','Focus rings, labels, and reduced-motion are built in.']].map(([ic,t,b])=>(
                <div key={t} className="panelSoft" style={{ padding: 20 }}>
                  <Icon name={ic} size={20} color="var(--color-primary)" />
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', margin: '10px 0 5px' }}>{t}</div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>{b}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    );
  };
})();
