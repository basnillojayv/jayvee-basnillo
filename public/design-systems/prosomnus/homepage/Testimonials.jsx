window.HP = window.HP || {};
(function () {
  const { Icon } = window.DesignSystem_e5ed69;
  const reviews = [
    ['I finally sleep through the night — and so does my husband. I stopped dreading bedtime entirely.', 'Dana R.', 'Austin, TX', 5],
    ['I travel constantly and it fits in my pocket. No more lugging a machine and hoses through airport security.', 'Marcus T.', 'Denver, CO', 5],
    ['CPAP made me feel claustrophobic. This is just like a retainer — I forget I\u2019m even wearing it.', 'Priya S.', 'Seattle, WA', 5],
    ['My insurance covered nearly all of it. Wish I\u2019d switched years ago instead of fighting the mask.', 'Robert C.', 'Miami, FL', 5],
  ];

  window.HP.Testimonials = function Testimonials() {
    const [idx, setIdx] = React.useState(0);
    const [perView, setPerView] = React.useState(getPer());
    function getPer(){ return typeof window !== 'undefined' && window.innerWidth < 900 ? 1 : 2; }
    React.useEffect(() => {
      const on = () => setPerView(getPer());
      window.addEventListener('resize', on); return () => window.removeEventListener('resize', on);
    }, []);
    const maxIdx = Math.max(0, reviews.length - perView);
    const go = (d) => setIdx((p) => Math.min(maxIdx, Math.max(0, p + d)));

    return (
      <section id="reviews" aria-label="Patient testimonials" style={{ padding: '120px 0', background: 'var(--surface-soft)', overflow: 'hidden' }}>
        <div className="wrap">
          <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, gap: 20, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow">Patient stories</span>
              <h2 style={{ fontSize: 'clamp(30px,4vw,42px)', marginTop: 12 }}>Loved by sleepers and their partners</h2>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <CarouselBtn dir="left" disabled={idx===0} onClick={() => go(-1)} />
              <CarouselBtn dir="right" disabled={idx===maxIdx} onClick={() => go(1)} />
            </div>
          </div>

          <div className="reveal" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 24, transition: 'transform var(--duration-slow) var(--ease-out)',
              transform: `translateX(calc(-${idx} * (100% / ${perView} + ${24/perView}px)))` }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ flex: `0 0 calc((100% - ${(perView-1)*24}px) / ${perView})` }}>
                  <ReviewCard quote={r[0]} name={r[1]} loc={r[2]} rating={r[3]} />
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
            {Array.from({length: maxIdx+1}).map((_,i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`} style={{ width: i===idx?26:9, height: 9, borderRadius: 999,
                border: 'none', cursor: 'pointer', background: i===idx ? 'var(--color-primary)' : 'var(--gray-300)',
                transition: 'all var(--duration-base) var(--ease-out)' }}></button>
            ))}
          </div>
        </div>
      </section>
    );
  };

  function ReviewCard({ quote, name, loc, rating }) {
    return (
      <figure style={{ margin: 0, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 32,
        boxShadow: 'var(--shadow-sm)', height: '100%', display: 'flex', flexDirection: 'column', gap: 18, boxSizing: 'border-box' }}>
        <div role="img" aria-label={`Rated ${rating} out of 5 stars`} style={{ display: 'flex', gap: 2, color: 'var(--amber-500)' }}>
          {Array.from({length: rating}).map((_,i) => <Icon key={i} name="star" size={18} style={{ fill: 'var(--amber-500)' }} />)}
        </div>
        <blockquote style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 21, lineHeight: 1.45, color: 'var(--text-heading)' }}>
          “{quote}”
        </blockquote>
        <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
          <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--blue-700)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 16 }}>{name.charAt(0)}</span>
          <span>
            <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{name}</div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="map-pin" size={13} /> {loc}
            </div>
          </span>
        </figcaption>
      </figure>
    );
  }

  function CarouselBtn({ dir, disabled, onClick }) {
    return (
      <button onClick={onClick} disabled={disabled} aria-label={dir==='left'?'Previous':'Next'} style={{
        width: 46, height: 46, borderRadius: '50%', border: '1px solid var(--border-default)', background: 'var(--surface-card)',
        color: disabled ? 'var(--gray-300)' : 'var(--color-primary)', cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: disabled ? 'none' : 'var(--shadow-xs)',
        transition: 'all var(--duration-fast) var(--ease-out)' }}>
        <Icon name={dir==='left'?'arrow-left':'arrow-right'} size={20} />
      </button>
    );
  }
})();
