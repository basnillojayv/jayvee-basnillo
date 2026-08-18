window.PP = window.PP || {};
window.PP.cases = [
  { id: 'PS-4821', name: 'Robert Chen', age: 54, ahi: 22, stage: 'Impressions', status: 'primary', updated: '2h ago', device: 'EVO', insurer: 'Aetna PPO' },
  { id: 'PS-4817', name: 'Maria Gonzalez', age: 47, ahi: 15, stage: 'In fabrication', status: 'wellness', updated: '5h ago', device: 'EVO', insurer: 'Medicare' },
  { id: 'PS-4805', name: 'James Whitfield', age: 61, ahi: 38, stage: 'Titration', status: 'warning', updated: '1d ago', device: 'PH', insurer: 'VA benefits' },
  { id: 'PS-4799', name: 'Susan Delgado', age: 39, ahi: 9, stage: 'Delivered', status: 'success', updated: '2d ago', device: 'EVO', insurer: 'BCBS' },
  { id: 'PS-4788', name: 'David Okafor', age: 58, ahi: 27, stage: 'Prior auth', status: 'neutral', updated: '3d ago', device: 'EVO', insurer: 'Cigna' },
  { id: 'PS-4772', name: 'Linda Park', age: 50, ahi: 18, stage: 'Follow-up', status: 'wellness', updated: '4d ago', device: 'PH', insurer: 'UnitedHealthcare' },
];
window.PP.stageTone = {
  'Impressions': 'primary', 'In fabrication': 'wellness', 'Titration': 'warning',
  'Delivered': 'success', 'Prior auth': 'neutral', 'Follow-up': 'wellness',
};
