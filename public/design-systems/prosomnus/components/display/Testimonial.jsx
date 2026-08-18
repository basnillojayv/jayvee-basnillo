import React from 'react';

/** Patient/provider testimonial card. */
export function Testimonial({ quote, name, role, rating = 5, avatar, style = {} }) {
  return (
    <figure style={{
      margin: 0, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
      padding: 28, boxShadow: 'var(--shadow-sm)', fontFamily: 'var(--font-body)',
      display: 'flex', flexDirection: 'column', gap: 18, ...style,
    }}>
      {rating > 0 && (
        <div style={{ display: 'flex', gap: 2, color: 'var(--amber-500)' }}>
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          ))}
        </div>
      )}
      <blockquote style={{ margin: 0, fontSize: 18, lineHeight: 'var(--leading-body)', color: 'var(--text-heading)' }}>
        “{quote}”
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
        <span style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: 'var(--blue-50)', color: 'var(--color-primary-strong)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'var(--weight-semibold)', fontSize: 16,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundImage: avatar ? `url(${avatar})` : 'none',
        }}>
          {!avatar && name ? name.charAt(0) : ''}
        </span>
        <span>
          <div style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-heading)' }}>{name}</div>
          {role && <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{role}</div>}
        </span>
      </figcaption>
    </figure>
  );
}
