window.PS = window.PS || {};
(function () {
  const { Stat, Testimonial } = window.DesignSystem_e5ed69;
  window.PS.Proof = function Proof() {
    return (
      <section id="proof" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 64 }}>
            <Stat value={96} suffix="%" label="of patients prefer ProSomnus over CPAP" />
            <Stat value={200000} prefix="" suffix="+" label="patients treated and counting" />
            <Stat value={98} suffix="%" label="covered by medical insurance, Medicare & VA" />
          </div>
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 36 }}>Loved by sleepers and their partners</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            <Testimonial rating={5} quote="I finally sleep through the night — and so does my husband. I stopped dreading bedtime." name="Dana R." role="Patient · 2 years" />
            <Testimonial rating={5} quote="I travel constantly. It fits in my pocket. No more lugging a machine through airports." name="Marcus T." role="Patient · 1 year" />
            <Testimonial rating={5} quote="Compliance is night and day versus CPAP. My patients actually wear it." name="Dr. Elena Ruiz" role="Sleep physician" />
          </div>
        </div>
      </section>
    );
  };
})();
