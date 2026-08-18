window.FAQ = window.FAQ || {};
(function () {
  const { Button, Icon, Input, Badge } = window.DesignSystem_e5ed69;

  const DATA = {
    patients: [
      { q: 'Does oral appliance therapy really work as well as CPAP?', a: 'For most people with mild to moderate obstructive sleep apnea — and many with severe OSA who can\u2019t tolerate CPAP — it\u2019s a clinically proven, guideline-recommended treatment. 96% of ProSomnus patients prefer it over CPAP, and because it\u2019s comfortable, people actually keep using it.' },
      { q: 'Is ProSomnus covered by my insurance?', a: 'Yes. ProSomnus is covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing out of pocket, and your provider\u2019s team verifies your specific coverage before you begin.' },
      { q: 'What does it feel like to wear?', a: 'It\u2019s worn like a retainer and precision-milled to fit your mouth exactly — no straps, masks, or hoses. Most people adjust within a few nights.' },
      { q: 'How do I get started?', a: 'Find a ProSomnus-trained provider near you. After a short consult and an at-home sleep test, your custom appliance is milled, fitted, and fine-tuned for comfort.' },
      { q: 'Will it help with snoring too?', a: 'Yes — by gently keeping your airway open, the appliance reduces or eliminates snoring for most patients, which your partner will appreciate as much as you do.' },
      { q: 'How do I clean and care for it?', a: 'Just rinse and brush it gently each morning — no distilled water, filters, or hoses. Your provider will share simple care instructions at your fitting.' },
    ],
    providers: [
      { q: 'What clinical evidence supports ProSomnus?', a: 'ProSomnus is backed by peer-reviewed outcomes showing significant AHI reduction and high adherence. Aggregated data shows a 91% average reduction in apnea events and 94% therapy continuation at one year.' },
      { q: 'How does the digital workflow work?', a: 'Submit an intraoral scan through the provider portal. Our AI-assisted design engine optimizes fit and airway geometry, a clinician reviews every case, and the appliance is precision-milled and shipped — typically within 48 hours of design approval.' },
      { q: 'What billing and prior-auth support do you offer?', a: 'We provide medical billing documentation and prior-authorization support so covered care doesn\u2019t become administrative burden. A dedicated clinical success manager helps your team throughout.' },
      { q: 'Is there a cost to join the network?', a: 'No. There\u2019s no upfront cost to join, and clinical onboarding is free and CE-eligible. You can be prescribing within a few weeks.' },
      { q: 'What training is provided?', a: 'Free, CE-eligible onboarding covers case selection, scanning, titration, and follow-up. Your success manager provides ongoing clinical and practice support.' },
    ],
  };

  function Item({ it, open, onToggle, query }) {
    const hl = (text) => {
      if (!query) return text;
      const i = text.toLowerCase().indexOf(query.toLowerCase());
      if (i < 0) return text;
      return (<>{text.slice(0,i)}<mark style={{ background: 'var(--amber-50)', color: 'inherit', padding: '0 2px', borderRadius: 3 }}>{text.slice(i,i+query.length)}</mark>{text.slice(i+query.length)}</>);
    };
    return (
      <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: open ? 'var(--shadow-md)' : 'var(--shadow-xs)', overflow: 'hidden', transition: 'box-shadow var(--duration-base) var(--ease-out)' }}>
        <button onClick={onToggle} aria-expanded={open}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, color: 'var(--text-heading)' }}>
          <span>{hl(it.q)}</span>
          <span style={{ flexShrink: 0, color: 'var(--color-primary)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }}><Icon name="chevron-down" size={22} /></span>
        </button>
        <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows var(--duration-base) var(--ease-out)' }}>
          <div style={{ overflow: 'hidden' }}>
            <p style={{ margin: 0, padding: '0 24px 22px', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 760 }}>{hl(it.a)}</p>
          </div>
        </div>
      </div>
    );
  }

  window.FAQ.Page = function Page() {
    const [tab, setTab] = React.useState('patients');
    const [query, setQuery] = React.useState('');
    const [open, setOpen] = React.useState('0');

    const list = DATA[tab].filter(it =>
      !query || (it.q + ' ' + it.a).toLowerCase().includes(query.toLowerCase()));

    const switchTab = (t) => { setTab(t); setOpen('0'); };

    return (
      <main id="main">
        <section style={{ background: 'linear-gradient(180deg, var(--blue-50), var(--surface-card))', padding: '72px 0 44px' }}>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, marginInline: 'auto' }}>
            <span className="eyebrow">We're here to help</span>
            <h1 style={{ fontSize: 'clamp(38px,5vw,58px)', lineHeight: 1.05, marginTop: 12 }}>Frequently Asked Questions</h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 540, margin: '16px auto 0' }}>
              Clear answers for patients and providers. Search, or browse by topic.
            </p>
            <div style={{ maxWidth: 520, margin: '28px auto 0' }}>
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions…" aria-label="Search questions" iconLeft={<Icon name="search" size={18} />} />
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 0 104px' }}>
          <div className="wrap" style={{ maxWidth: 820 }}>
            {/* Category tabs */}
            <div role="tablist" aria-label="FAQ audience" style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 'var(--radius-pill)', background: 'var(--surface-soft)', marginBottom: 32 }}>
              {[['patients','For Patients','user'],['providers','For Providers','stethoscope']].map(([k,l,ic]) => {
                const on = tab === k;
                return (
                  <button key={k} role="tab" aria-selected={on} onClick={() => switchTab(k)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', cursor: 'pointer', padding: '10px 22px', borderRadius: 'var(--radius-pill)',
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
                      background: on ? 'var(--color-primary)' : 'transparent', color: on ? '#fff' : 'var(--text-body)', transition: 'all var(--duration-base) var(--ease-out)' }}>
                    <Icon name={ic} size={17} /> {l}
                  </button>
                );
              })}
            </div>

            {/* List */}
            {list.length ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {list.map((it, i) => {
                  const id = `${tab}-${i}`;
                  return <Item key={id} it={it} query={query} open={open === id} onToggle={() => setOpen(open === id ? null : id)} />;
                })}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '56px 0', color: 'var(--text-muted)' }}>
                <Icon name="search-x" size={40} />
                <p style={{ fontSize: 17, marginTop: 12 }}>No questions match "{query}". Try a different search.</p>
                <Button variant="ghost" onClick={() => setQuery('')}>Clear search</Button>
              </div>
            )}

            {/* Still have questions */}
            <div style={{ marginTop: 40, borderRadius: 'var(--radius-lg)', background: 'var(--surface-soft)', padding: 'clamp(28px,4vw,44px)', textAlign: 'center' }}>
              <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--cyan-50)', color: 'var(--cyan-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name="messages-square" size={26} /></span>
              <h2 style={{ fontSize: 26 }}>Still have questions?</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 420, margin: '10px auto 22px' }}>
                Our care team is happy to help — or connect you with a provider near you.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="accent" iconLeft={<Icon name="phone" size={16} />}>Contact us</Button>
                <a href="../find-a-provider/index.html"><Button variant="secondary" iconRight={<Icon name="arrow-right" size={16} />}>Find a Provider</Button></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
})();
