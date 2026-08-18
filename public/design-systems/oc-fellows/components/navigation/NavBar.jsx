import React from 'react';
import { Button } from '../core/Button.jsx';

export function NavBar({
  logo, items = [], activeHref, cta = { label: 'Apply', href: '#' },
  onNavigate, sticky = true, style, ...rest
}) {
  const [open, setOpen] = React.useState(null);
  return (
    <header style={{
      position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,.96)', backdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-subtle)', ...style,
    }} {...rest}>
      <nav style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--space-4) var(--container-pad)',
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/'); }} style={{ display: 'flex', flex: '0 0 auto' }}>
          {logo ? <img src={logo} alt="OC Fellows" style={{ height: 40, width: 'auto' }} />
            : <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-xl)', color: 'var(--navy-500)' }}>OC Fellows</span>}
        </a>
        <ul style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
          listStyle: 'none', margin: 0, padding: 0, marginLeft: 'auto',
        }}>
          {items.map((item) => {
            const active = activeHref === item.href;
            const hasChildren = item.children && item.children.length > 0;
            return (
              <li key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => hasChildren && setOpen(item.label)}
                onMouseLeave={() => hasChildren && setOpen(null)}>
                <a href={item.href} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(item.href); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
                    color: active ? 'var(--orange-600)' : 'var(--navy-500)', whiteSpace: 'nowrap',
                    paddingBottom: 2, borderBottom: '2px solid ' + (active ? 'var(--orange-500)' : 'transparent'),
                  }}>
                  {item.label}
                  {hasChildren ? <i data-lucide="chevron-down" style={{ width: 15, height: 15 }} /> : null}
                </a>
                {hasChildren && open === item.label ? (
                  <ul style={{
                    position: 'absolute', top: '100%', left: -12, marginTop: 10, padding: 'var(--space-2)',
                    listStyle: 'none', minWidth: 210, background: 'var(--neutral-0)',
                    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--shadow-md)',
                  }}>
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(c.href); }}
                          style={{
                            display: 'block', padding: '9px 12px', borderRadius: 'var(--radius-sm)',
                            fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--navy-500)',
                          }}>{c.label}</a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
        {cta ? <Button href={cta.href} size="sm" style={{ flex: '0 0 auto' }}>{cta.label}</Button> : null}
      </nav>
    </header>
  );
}
