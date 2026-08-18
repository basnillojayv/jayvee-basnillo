import React from 'react';

/** Removable/selectable chip. */
export function Tag({ selected = false, onRemove, onClick, style = {}, children }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 12px', fontFamily: 'var(--font-body)', fontSize: 14,
        fontWeight: 'var(--weight-medium)',
        color: selected ? 'var(--color-primary)' : 'var(--text-body)',
        background: selected ? 'var(--blue-50)' : 'var(--surface-card)',
        border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-pill)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all var(--duration-fast) var(--ease-out)',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          aria-label="Remove"
          style={{ display: 'inline-flex', border: 'none', background: 'none', padding: 0, cursor: 'pointer', color: 'inherit', opacity: 0.7 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      )}
    </span>
  );
}
