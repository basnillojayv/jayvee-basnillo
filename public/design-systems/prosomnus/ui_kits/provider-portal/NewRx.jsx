window.PP = window.PP || {};
(function () {
  const { Dialog, Button, Input, Select, Radio, Checkbox, Alert, Icon } = window.DesignSystem_e5ed69;
  window.PP.NewRx = function NewRx({ open, onClose }) {
    const [done, setDone] = React.useState(false);
    React.useEffect(() => { if (open) setDone(false); }, [open]);
    return (
      <Dialog open={open} onClose={onClose} width={520}
        title={done ? undefined : 'New prescription'}
        footer={done ? (
          <Button variant="accent" onClick={onClose}>Done</Button>
        ) : (
          <>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button variant="accent" iconRight={<Icon name="send" size={16} />} onClick={() => setDone(true)}>Submit prescription</Button>
          </>
        )}>
        {done ? (
          <div style={{ textAlign: 'center', padding: '8px 0 4px' }}>
            <span style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--success-bg)', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Icon name="check" size={30} />
            </span>
            <h3 style={{ fontSize: 22, marginBottom: 8 }}>Prescription submitted</h3>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>Case <strong>PS-4822</strong> created. We'll verify benefits and notify you when prior auth clears.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input label="Patient name" placeholder="First and last name" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Input label="Date of birth" placeholder="MM/DD/YYYY" />
              <Input label="Baseline AHI" placeholder="events/hr" />
            </div>
            <Select label="Insurance" options={['Aetna PPO','Blue Cross Blue Shield','Cigna','UnitedHealthcare','Medicare','VA benefits']} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-heading)', marginBottom: 10 }}>Device</div>
              <Radio options={[{value:'evo',label:'ProSomnus EVO'},{value:'ph',label:'ProSomnus [PH]'},{value:'ia',label:'ProSomnus [IA]'}]} defaultValue="evo" />
            </div>
            <Checkbox label="Include prior authorization documentation" defaultChecked />
            <Alert tone="info">Digital impressions can be uploaded after the case is created.</Alert>
          </div>
        )}
      </Dialog>
    );
  };
})();
