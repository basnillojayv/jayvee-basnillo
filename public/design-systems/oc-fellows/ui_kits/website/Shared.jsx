const { Eyebrow, SectionHeading } = window.OCFellowsDesignSystem_3dfef0;

const Icon = ({ name, size = 20 }) => <i data-lucide={name} style={{ width: size, height: size }} />;

function Section({ children, surface = 'white', compact = false, style }) {
  const bg = { white: 'var(--surface-page)', cream: 'var(--surface-cream)', aqua: 'var(--surface-aqua-soft)', navy: 'var(--surface-navy)' }[surface];
  return (
    <section style={{ background: bg, paddingBlock: compact ? 'var(--section-y-compact)' : 'var(--section-y)', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', paddingInline: 'var(--container-pad)' }}>{children}</div>
    </section>
  );
}

function PhotoPlaceholder({ ratio = '3 / 4', label, radius = 'var(--radius-media)' }) {
  return (
    <div style={{
      aspectRatio: ratio, borderRadius: radius, background: 'var(--aqua-50)',
      border: '1px dashed var(--aqua-700)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12, textAlign: 'center',
    }}>
      <img src={window.SITE.assets.symbol} alt="" style={{ width: 34, opacity: 0.28 }} />
      {label ? <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--aqua-700)', letterSpacing: '0.06em' }}>{label}</span> : null}
    </div>
  );
}

function PageHeader({ eyebrow, title, intro }) {
  return (
    <div style={{ background: 'var(--surface-navy)', paddingBlock: 'var(--space-20) var(--space-16)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', paddingInline: 'var(--container-pad)' }}>
        <SectionHeading tone="dark" level={1} eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Section, PhotoPlaceholder, PageHeader });
