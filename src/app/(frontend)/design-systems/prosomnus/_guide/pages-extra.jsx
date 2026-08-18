// VENDORED from public/design-systems/prosomnus/brand-guide/pages-extra.jsx.
// Unchanged apart from this React import — see ds-bundle.js for why.
import React from 'react'
// Brand Guide pages 13–14: Email, Patterns
(function () {
  const { Icon, Card, Badge, Button } = window.DesignSystem_e5ed69;
  const { PageHeader, Section, DoDont } = window.BG;

  /* ---------------- 13 EMAIL ---------------- */
  window.BG.pages['13'] = function Email() {
    return (
      <div className="ipage">
        <PageHeader num="13" label="Email" title="Branded email"
          intro="Emails carry the same calm: a navy header, warm body copy, one amber action, and a quiet footer. Built for real inbox widths (600px)." />
        <div className="ibody">
          <Section k="13.1" title="Patient template">
            <div className="g2" style={{ alignItems: 'start' }}>
              {/* Email mockup */}
              <div style={{ maxWidth: 600, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ background: 'linear-gradient(120deg,#0C447C,#06618B)', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <img src="/design-systems/prosomnus/assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 24 }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' }}>Sleep better</span>
                </div>
                <div style={{ padding: '32px 28px', background: '#fff' }}>
                  <h2 style={{ fontSize: 26, lineHeight: 1.2, color: 'var(--text-heading)' }}>You're one step from better sleep, Dana.</h2>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)', marginTop: 14 }}>Good news — ProSomnus is covered by your plan. Your next step is a quick visit with a provider near you. No masks, no hoses, no noise.</p>
                  <div style={{ margin: '24px 0' }}>
                    <span style={{ display: 'inline-flex', background: 'var(--amber-500)', color: 'var(--gray-900)', fontWeight: 600, fontSize: 15, padding: '13px 26px', borderRadius: 'var(--radius-sm)' }}>Find a Provider</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 18, display: 'flex', gap: 18 }}>
                    <div><div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--color-primary-strong)' }}>96%</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>prefer it to CPAP</div></div>
                    <div><div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--color-primary-strong)' }}>$0</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>typical cost with coverage</div></div>
                  </div>
                </div>
                <div style={{ padding: '18px 28px', background: 'var(--gray-900)', color: 'rgba(255,255,255,0.6)', fontSize: 12, lineHeight: 1.6 }}>
                  ProSomnus Sleep Technologies · You received this because you checked your coverage.<br/>Unsubscribe · Privacy
                </div>
              </div>
              {/* Anatomy */}
              <div className="panelSoft" style={{ padding: 26 }}>
                <h3 style={{ fontSize: 17, marginBottom: 12 }}>Structure</h3>
                <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-body)' }}>
                  <li>Navy header, reversed logo</li>
                  <li>Serif headline, personalized</li>
                  <li>Warm, concise body copy</li>
                  <li>One amber CTA button</li>
                  <li>Two proof points, max</li>
                  <li>Dark footer with legal + unsubscribe</li>
                </ol>
                <div style={{ marginTop: 18, fontSize: 13, color: 'var(--text-muted)' }}>Width 600px · single column · web-safe fallbacks for Newsreader/Manrope.</div>
              </div>
            </div>
          </Section>
          <Section k="13.2" title="Rules">
            <div className="g2">
              <DoDont good title="One action">A single amber CTA and at most two proof points keeps the message calm and clear.</DoDont>
              <DoDont title="Wall of buttons">No stacked competing CTAs, no rainbow of links, no dense paragraphs.</DoDont>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  /* ---------------- 14 PATTERNS ---------------- */
  window.BG.pages['14'] = function Patterns() {
    const patterns = [
      ['panels-top-left','Immersive hero','Deep-navy full-bleed band, reversed logo, serif headline, amber CTA. Opens patient pages.'],
      ['bar-chart-3','Proof strip','Count-up stats in a row — 96%, 200k+, coverage — right after the hero.'],
      ['layout-grid','Benefit trio','Three hover-lift cards with an icon, title, and one line each.'],
      ['list-ordered','Three-step how-it-works','Numbered steps with a simple diagram; ends in the primary CTA.'],
      ['quote','Testimonial wall','Masonry of quote cards with rating, name, and role for social proof.'],
      ['megaphone','Closing CTA band','Navy gradient panel, one reassuring line, single amber action.'],
    ];
    return (
      <div className="ipage">
        <PageHeader num="14" label="Patterns" title="Reusable page patterns"
          intro="Pages are assembled from a small kit of proven sections. Reach for these before inventing something new." />
        <div className="ibody">
          <Section k="14.1" title="The pattern kit">
            <div className="g3">
              {patterns.map(([ic,t,b])=>(
                <div key={t} className="panel" style={{ padding: 22 }}>
                  <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={21} /></span>
                  <h3 style={{ fontSize: 17, margin: '12px 0 6px' }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section k="14.2" title="Page recipe" sub="Patient landing">
            <div className="panel" style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Immersive hero','Proof strip','Benefit trio','Three-step how-it-works','Testimonial wall','Closing CTA band','Footer'].map((s,i)=>(
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-primary)', width: 26 }}>{String(i+1).padStart(2,'0')}</span>
                  <div style={{ flex: 1, height: 40, background: i===0 ? 'linear-gradient(120deg,#0C447C,#06618B)' : 'var(--surface-soft)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 14, fontWeight: 500, color: i===0 ? '#fff' : 'var(--text-heading)' }}>{s}</div>
                </div>
              ))}
            </div>
          </Section>
          <Section k="14.3" title="Do's & Don'ts summary">
            <div className="g2">
              <DoDont good title="Do">
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                  <li>Lead with feeling, back with proof</li>
                  <li>One amber CTA per view</li>
                  <li>Generous whitespace &amp; soft shadows</li>
                  <li>Serif heads, sans body</li>
                  <li>Honor reduced-motion</li>
                </ul>
              </DoDont>
              <DoDont title="Don't">
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                  <li>Clinical jargon or cold stock photos</li>
                  <li>Amber as decoration</li>
                  <li>Competing CTAs</li>
                  <li>Hard borders or harsh shadows</li>
                  <li>Decorative stats with no meaning</li>
                </ul>
              </DoDont>
            </div>
          </Section>

          <div style={{ marginTop: 52, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(120deg,#0A2038,#0C447C 55%,#06618B)', padding: 'clamp(40px,6vw,64px)', textAlign: 'center' }}>
            <span aria-hidden="true" style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', top: -140, right: -60, background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)' }}></span>
            <div style={{ position: 'relative' }}>
              <img src="/design-systems/prosomnus/assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 30, marginBottom: 16 }} />
              <h2 style={{ fontSize: 28, color: '#fff' }}>Build calm. Build trust. Build sleep.</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', maxWidth: 460, margin: '12px auto 0' }}>Everything in this guide serves one feeling: the relief of a good night's rest.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
})();
