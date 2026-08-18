window.PP = window.PP || {};
(function () {
  const { Card, Badge, Icon, Button, Alert } = window.DesignSystem_e5ed69;
  const timeline = [
    ['file-plus', 'Prescription created', 'Mar 2', true],
    ['clipboard-check', 'Prior authorization approved', 'Mar 4', true],
    ['scan', 'Digital impressions received', 'Mar 6', true],
    ['factory', 'In fabrication', 'Est. Mar 12', false],
    ['package-check', 'Delivery & fitting', 'Pending', false],
  ];
  window.PP.CaseDetail = function CaseDetail({ data, onBack }) {
    const c = data || window.PP.cases[0];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: 14, fontWeight: 500, padding: 0, alignSelf: 'flex-start' }}>
          <Icon name="arrow-left" size={16} /> Back to dashboard
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--blue-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20 }}>{c.name.split(' ').map(n=>n[0]).join('')}</span>
            <div>
              <h1 style={{ fontSize: 26 }}>{c.name}</h1>
              <div style={{ display: 'flex', gap: 10, marginTop: 6, alignItems: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
                <span style={{ fontFamily: 'ui-monospace, monospace' }}>{c.id}</span> · Age {c.age} · <Badge tone={c.status} size="sm">{c.stage}</Badge>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="secondary" iconLeft={<Icon name="message-square" size={16} />}>Message patient</Button>
            <Button variant="primary" iconLeft={<Icon name="pencil" size={16} />}>Update case</Button>
          </div>
        </div>

        <Alert tone="info">This case is on track. Next milestone: fabrication complete, estimated Mar 12.</Alert>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
          <Card>
            <h3 style={{ fontSize: 18, marginBottom: 18 }}>Treatment timeline</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {timeline.map(([icon, label, date, done], i) => (
                <div key={label} style={{ display: 'flex', gap: 14, paddingBottom: i < timeline.length-1 ? 22 : 0, position: 'relative' }}>
                  {i < timeline.length-1 && <span style={{ position: 'absolute', left: 17, top: 36, bottom: 0, width: 2, background: done ? 'var(--cyan-500)' : 'var(--border-subtle)' }}></span>}
                  <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: '50%', background: done ? 'var(--cyan-50)' : 'var(--surface-soft)', color: done ? 'var(--cyan-700)' : 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <Icon name={done ? 'check' : icon} size={18} />
                  </span>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 15 }}>{label}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Card>
              <h3 style={{ fontSize: 16, marginBottom: 14 }}>Clinical summary</h3>
              <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: 12, columnGap: 16, fontSize: 14 }}>
                {[['Diagnosis','Moderate OSA'],['AHI (baseline)', c.ahi+' events/hr'],['Device', 'ProSomnus '+c.device],['Insurer', c.insurer],['Referring MD', 'Dr. E. Ruiz']].map(([k,v]) => (
                  <React.Fragment key={k}>
                    <dt style={{ color: 'var(--text-muted)' }}>{k}</dt>
                    <dd style={{ margin: 0, fontWeight: 600, color: 'var(--text-heading)', textAlign: 'right' }}>{v}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </Card>
            <Card style={{ background: 'var(--blue-700)', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <Icon name="shield-check" size={20} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16 }}>Coverage confirmed</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{c.insurer} — in network. Patient responsibility estimated at $0–$50.</p>
            </Card>
          </div>
        </div>
      </div>
    );
  };
})();
