// Shared helpers + page registry for the ProSomnus Brand Guide interior pages.
window.BG = window.BG || {};
window.BG.pages = window.BG.pages || {};
(function () {
  const { Icon } = window.DesignSystem_e5ed69;

  // Page header band (navy "night" easing into the light "morning" body)
  window.BG.PageHeader = function PageHeader({ num, label, eyebrow, title, intro }) {
    return (
      <div className="ihead">
        <div className="glow" aria-hidden="true"></div>
        <div className="wm" aria-hidden="true">{num}</div>
        <div className="hzn" aria-hidden="true"></div>
        <div className="eyebrow2"><span className="d"></span> {eyebrow || `${num} · ${label}`}</div>
        <h1>{title}</h1>
        {intro && <p className="intro">{intro}</p>}
      </div>
    );
  };

  window.BG.Section = function Section({ k, title, sub, children }) {
    return (
      <section className="isec">
        <div className="isecHead">
          {k && <span className="k">{k}</span>}
          <h2>{title}</h2>
          {sub && <span className="sub">{sub}</span>}
        </div>
        {children}
      </section>
    );
  };

  // Do / Don't paired card
  window.BG.DoDont = function DoDont({ good, children, title }) {
    const c = good ? { fg: 'var(--success)', bg: 'var(--success-bg)', ic: 'check', word: 'Do' }
                   : { fg: 'var(--error)', bg: 'var(--error-bg)', ic: 'x', word: "Don't" };
    return (
      <div className="panel" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 18px', background: c.bg, color: c.fg, fontWeight: 700, fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase' }}>
          <Icon name={c.ic} size={16} /> {title || c.word}
        </div>
        <div style={{ padding: '16px 18px', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{children}</div>
      </div>
    );
  };

  // token chip: label + mono value
  window.BG.Token = function Token({ name, value }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '9px 12px', background: 'var(--surface-soft)', borderRadius: 'var(--radius-sm)' }}>
        <span className="mono" style={{ color: 'var(--text-heading)' }}>{name}</span>
        <span className="mono" style={{ color: 'var(--text-muted)' }}>{value}</span>
      </div>
    );
  };
})();
