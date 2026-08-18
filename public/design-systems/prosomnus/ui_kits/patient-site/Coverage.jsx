window.PS = window.PS || {};
(function () {
  const { Card, Button, Input, Select, Alert, Icon, Badge } = window.DesignSystem_e5ed69;
  window.PS.Coverage = function Coverage() {
    const [submitted, setSubmitted] = React.useState(false);
    const [insurer, setInsurer] = React.useState('Aetna');
    return (
      <section id="coverage" style={{ padding: '84px 0', background: 'linear-gradient(180deg, var(--surface-card), var(--cyan-50))' }}>
        <div className="wrap">
          <Card className="reveal" padding={0} style={{ overflow: 'hidden', maxWidth: 900, margin: '0 auto', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: 40, background: 'var(--blue-700)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src="../../assets/prosomnus-logo-white.svg" alt="ProSomnus" style={{ height: 26, alignSelf: 'flex-start', marginBottom: 24 }} />
                <h2 style={{ color: '#fff', fontSize: 32, lineHeight: 1.15 }}>See if you're covered in 30 seconds</h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, lineHeight: 1.6, marginTop: 14 }}>
                  ProSomnus is covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing out of pocket.
                </p>
                <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
                  <Badge tone="wellness"><Icon name="shield-check" size={14} /> Medicare</Badge>
                  <Badge tone="wellness"><Icon name="shield-check" size={14} /> VA benefits</Badge>
                  <Badge tone="wellness"><Icon name="shield-check" size={14} /> Most PPOs</Badge>
                </div>
              </div>
              <div style={{ padding: 40 }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Alert tone="success" title="Good news — you're likely covered!">
                      Based on {insurer}, ProSomnus is typically an in-network benefit. A provider will confirm your exact coverage.
                    </Alert>
                    <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Find a provider near me</Button>
                    <Button variant="ghost" onClick={() => setSubmitted(false)}>Start over</Button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <Select label="Your insurance provider" value={insurer} onChange={(e) => setInsurer(e.target.value)}
                      options={['Aetna','Blue Cross Blue Shield','Cigna','UnitedHealthcare','Medicare','VA benefits','Other']} />
                    <Input label="ZIP code" placeholder="e.g. 94063" iconLeft={<Icon name="map-pin" size={16} />} required />
                    <Input label="Email" type="email" placeholder="you@example.com" iconLeft={<Icon name="mail" size={16} />} required />
                    <Button type="submit" variant="accent" size="lg" fullWidth>Check my coverage</Button>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>No obligation. We'll never share your information.</p>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  };
})();
