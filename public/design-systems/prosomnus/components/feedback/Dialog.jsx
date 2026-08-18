import React from 'react';

/** Modal dialog with soft backdrop. Renders nothing when `open` is false. */
export function Dialog({ open, onClose, title, footer, width = 460, style = {}, children }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, fontFamily: 'var(--font-body)',
        animation: 'ps-fade var(--duration-base) var(--ease-out)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface-card)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden', animation: 'ps-pop var(--duration-base) var(--ease-out)',
          ...style,
        }}
      >
        <div style={{ padding: '24px 24px 0' }}>
          {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-semibold)', fontSize: 22, color: 'var(--text-heading)' }}>{title}</h3>}
        </div>
        <div style={{ padding: '12px 24px 20px', fontSize: 16, lineHeight: 'var(--leading-body)', color: 'var(--text-body)' }}>
          {children}
        </div>
        {footer && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '0 24px 24px' }}>
            {footer}
          </div>
        )}
      </div>
      <style>{`@keyframes ps-fade{from{opacity:0}to{opacity:1}}@keyframes ps-pop{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
