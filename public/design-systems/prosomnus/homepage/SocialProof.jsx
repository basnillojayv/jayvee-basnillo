window.HP = window.HP || {};
(function () {
  const { Stat, Icon } = window.DesignSystem_e5ed69;

  // Soft avatar initials in place of real patient photos
  const people = [
    ['DR', 'var(--blue-500)'], ['MG', 'var(--cyan-500)'], ['JW', 'var(--blue-700)'],
    ['SD', 'var(--cyan-700)'], ['DO', 'var(--blue-500)'], ['LP', 'var(--cyan-500)'], ['RC', 'var(--blue-700)'],
  ];

  window.HP.SocialProof = function SocialProof() {
    return (
      <section style={{ padding: '72px 0', background: 'var(--surface-card)' }}>
        <div className="wrap reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: '1 1 420px' }}>
            <div style={{ flexShrink: 0 }}>
              <Stat value={96} suffix="%" align="left" duration={1800} />
            </div>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--text-heading)', maxWidth: 300, fontWeight: 500 }}>
              of patients prefer ProSomnus over CPAP
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex' }}>
              {people.map(([initials, bg], i) => (
                <span key={i} style={{ width: 46, height: 46, borderRadius: '50%', background: bg, color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600,
                  border: '3px solid var(--surface-card)', marginLeft: i === 0 ? 0 : -14, boxShadow: 'var(--shadow-xs)' }}>
                  {initials}
                </span>
              ))}
              <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--color-primary)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700,
                border: '3px solid var(--surface-card)', marginLeft: -14 }}>100k+</span>
            </div>
            <div style={{ lineHeight: 1.3 }}>
              <div role="img" aria-label="Rated 5 out of 5 stars" style={{ display: 'flex', gap: 2, color: 'var(--amber-500)' }}>
                {Array.from({length:5}).map((_,i) => <Icon key={i} name="star" size={16} style={{ fill: 'var(--amber-500)' }} />)}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Trusted by patients nationwide</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
})();
