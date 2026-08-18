// VENDORED from public/design-systems/oc-fellows/components/forms/forms.card.html
// The card's inline <script type="text/babel"> demo, unchanged apart from
// the React import, the export, and dropping its self-mounting call.
import React from 'react'

export const FormsCss = `.wrap{padding:20px 24px;display:flex;flex-direction:column;gap:18px}.row{display:flex;flex-wrap:wrap;align-items:center;gap:12px}.lbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted)}`


const { Input, Textarea, Select, Checkbox, FilterChip } = window.OCFellowsDesignSystem_3dfef0;

const I = (n, s=18) => <i data-lucide={n} style={{width:s,height:s}}/>;
function Demo(){
  const years=['All','2026','2025','2024','2023'];
  const [year,setYear]=React.useState('All');
  return <div className="wrap">
    <div><div className="lbl">Filter chips</div><div className="row" style={{marginTop:8}}>
      {years.map(y=><FilterChip key={y} active={year===y} onClick={()=>setYear(y)}>{y}</FilterChip>)}
    </div></div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
      <Input id="c1" label="Full name" placeholder="Jane Nguyen" icon={I('user')}/>
      <Input id="c2" label="Work email" type="email" required icon={I('mail')} hint="We reply within two business days."/>
      <Select id="c3" label="Class year" placeholder="Select a year" options={['2026','2025','2024','2023']}/>
      <Input id="c4" label="Employer" defaultValue="Edwards" error="Please enter your full company name."/>
    </div>
    <Textarea id="c5" label="Why do you want to join OC Fellows?" rows={3} placeholder="Two or three sentences is plenty."/>
    <Checkbox id="c6" label="Add me to the OC Fellows mailing list" description="Quarterly updates only." defaultChecked/>
  </div>;
}

export default Demo
