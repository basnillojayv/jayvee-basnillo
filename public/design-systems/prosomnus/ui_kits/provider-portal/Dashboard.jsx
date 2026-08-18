window.PP = window.PP || {};
(function () {
  const { Card, Badge, Icon, Stat, Button } = window.DesignSystem_e5ed69;
  const kpis = [
    ['Active cases', 24, 'folder-open', 'primary'],
    ['Awaiting prior auth', 3, 'clock', 'warning'],
    ['Delivered this month', 11, 'package-check', 'success'],
    ['Avg. days to deliver', 18, 'timer', 'wellness'],
  ];
  window.PP.Dashboard = function Dashboard({ onOpenCase, onNewRx }) {
    const cases = window.PP.cases;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontSize: 30 }}>Good morning, Dr. Reyes</h1>
            <p style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 6 }}>You have 3 cases awaiting prior authorization.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {kpis.map(([label, val, icon, tone]) => (
            <Card key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 32, fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>{label}</div>
                </div>
                <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={icon} size={19} />
                </span>
              </div>
            </Card>
          ))}
        </div>

        <Card padding={0} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: 18 }}>Recent cases</h3>
            <Button variant="ghost" size="sm" iconRight={<Icon name="arrow-right" size={15} />}>View all</Button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-muted)' }}>
                {['Patient','Case #','AHI','Device','Stage','Insurer','Updated',''].map(h => (
                  <th key={h} style={{ padding: '12px 24px', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} onClick={() => onOpenCase(c)}
                  style={{ borderTop: '1px solid var(--border-subtle)', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-soft)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '14px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--blue-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>{c.name.split(' ').map(n=>n[0]).join('')}</span>
                      <div><div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 14 }}>{c.name}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Age {c.age}</div></div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 24px', fontSize: 14, fontFamily: 'ui-monospace, monospace', color: 'var(--text-body)' }}>{c.id}</td>
                  <td style={{ padding: '14px 24px', fontSize: 14 }}>{c.ahi}</td>
                  <td style={{ padding: '14px 24px', fontSize: 14 }}>{c.device}</td>
                  <td style={{ padding: '14px 24px' }}><Badge tone={c.status} size="sm">{c.stage}</Badge></td>
                  <td style={{ padding: '14px 24px', fontSize: 14, color: 'var(--text-body)' }}>{c.insurer}</td>
                  <td style={{ padding: '14px 24px', fontSize: 13, color: 'var(--text-muted)' }}>{c.updated}</td>
                  <td style={{ padding: '14px 24px', color: 'var(--text-muted)' }}><Icon name="chevron-right" size={18} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  };
})();
