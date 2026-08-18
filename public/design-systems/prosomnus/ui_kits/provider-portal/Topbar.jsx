window.PP = window.PP || {};
(function () {
  const { Icon, Button, Input } = window.DesignSystem_e5ed69;
  window.PP.Topbar = function Topbar({ onNewRx }) {
    return (
      <header style={{ height: 68, background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', position: 'sticky', top: 0, zIndex: 20 }}>
        <div style={{ width: 340 }}>
          <Input placeholder="Search patients, cases, Rx #…" iconLeft={<Icon name="search" size={16} />} style={{ }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={{ position: 'relative', border: 'none', background: 'var(--surface-soft)', width: 40, height: 40, borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-body)' }}>
            <Icon name="bell" size={19} />
            <span style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--error)', border: '2px solid var(--surface-card)' }}></span>
          </button>
          <Button variant="accent" iconLeft={<Icon name="file-plus" size={16} />} onClick={onNewRx}>New prescription</Button>
        </div>
      </header>
    );
  };
})();
