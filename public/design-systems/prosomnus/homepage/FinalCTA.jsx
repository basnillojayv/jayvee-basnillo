window.HP = window.HP || {};
(function () {
  const { Button, Icon } = window.DesignSystem_e5ed69;
  window.HP.FinalCTA = function FinalCTA() {
    return (
      <section style={{ padding: '124px 0', background: 'linear-gradient(180deg, var(--surface-card), var(--cyan-50))' }}>
        <div className="wrap reveal" style={{ textAlign: 'center' }}>
          <img src="../assets/prosomnus-mark.svg" alt="" aria-hidden="true" style={{ height: 52, marginBottom: 24 }} />
          <h2 style={{ fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1.05 }}>Ready, set, sleep.</h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 480, margin: '18px auto 0' }}>
            Find a ProSomnus provider near you and take the first step toward the rest you deserve.
          </p>
          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
            <a href="../pages/find-a-provider/index.html"><Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Find a Provider</Button></a>
          </div>
        </div>
      </section>
    );
  };
})();
