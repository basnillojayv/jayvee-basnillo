window.PP = window.PP || {};
(function () {
  const { Icon, Button } = window.DesignSystem_e5ed69;
  const nav = [
    ['layout-dashboard', 'Dashboard', true],
    ['users', 'Patients'],
    ['file-plus', 'Prescriptions'],
    ['clipboard-check', 'Prior auth'],
    ['graduation-cap', 'Education'],
    ['settings', 'Settings'],
  ];
  window.PP.Sidebar = function Sidebar({ onHome, onNewRx }) {
    return (
      <aside style={{ width: 248, background: 'var(--surface-card)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', padding: '24px 16px', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '0 8px 20px' }}>
          <img src="../../assets/prosomnus-logo.svg" alt="ProSomnus" style={{ height: 26 }} />
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 8, paddingLeft: 2 }}>Provider Portal</div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {nav.map(([icon, label, active]) => (
            <a key={label} href="#" onClick={(e) => { e.preventDefault(); if (label==='Dashboard') onHome(); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 'var(--radius-sm)',
                fontSize: 15, fontWeight: 500, textDecoration: 'none',
                color: active ? 'var(--color-primary)' : 'var(--text-body)',
                background: active ? 'var(--blue-50)' : 'transparent',
              }}>
              <Icon name={icon} size={19} /> {label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: 'var(--cyan-50)', borderRadius: 'var(--radius-md)', padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--cyan-700)', fontWeight: 600, fontSize: 14 }}>
              <Icon name="headphones" size={16} /> Need help?
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-body)', margin: '6px 0 10px' }}>Our clinical team is one call away.</p>
            <Button variant="secondary" size="sm" fullWidth>Contact support</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px' }}>
            <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--blue-700)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 14 }}>DR</span>
            <div style={{ lineHeight: 1.3 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Dr. Reyes</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Bayside Dental Sleep</div>
            </div>
          </div>
        </div>
      </aside>
    );
  };
})();
