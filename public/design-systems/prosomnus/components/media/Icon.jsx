import React from 'react';

/* Convert kebab-case or snake_case to PascalCase (lucide icon key). */
function toPascal(name) {
  return String(name)
    .split(/[-_\s]+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

/**
 * ProSomnus Icon — thin wrapper over Lucide (loaded from CDN).
 * Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
 */
export function Icon({ name, size = 20, strokeWidth = 2, color = 'currentColor', style = {}, ...rest }) {
  const lucide = typeof window !== 'undefined' ? window.lucide : null;
  const node = lucide && lucide.icons ? lucide.icons[toPascal(name)] : null;

  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { display: 'inline-block', flexShrink: 0, verticalAlign: 'middle', ...style },
    'aria-hidden': true,
    ...rest,
  };

  if (!node) {
    // Fallback: empty box so layout is preserved if Lucide isn't loaded.
    return <svg {...common} />;
  }

  const children = node.map((child, i) => {
    const [tag, attrs] = child;
    return React.createElement(tag, { key: i, ...attrs });
  });
  return React.createElement('svg', common, children);
}
