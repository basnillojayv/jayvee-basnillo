// VENDORED from public/design-systems/oc-fellows/components/core/core.card.html
// The card's inline <script type="text/babel"> demo, unchanged apart from
// the React import, the export, and dropping its self-mounting call.
import React from 'react'

export const CoreCss = `.wrap{padding:20px 24px;display:flex;flex-direction:column;gap:18px}.row{display:flex;flex-wrap:wrap;align-items:center;gap:12px}.lbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted)}`


const { Button, IconButton, Badge, Eyebrow, SectionHeading, Card } = window.OCFellowsDesignSystem_3dfef0;

const I = (n, s=20) => <i data-lucide={n} style={{width:s,height:s}}/>;
function Demo(){
  return <div className="wrap">
    <div><div className="lbl">Button variants</div><div className="row" style={{marginTop:8}}>
      <Button>Apply</Button>
      <Button variant="secondary">Meet the OC Fellows</Button>
      <Button variant="outline">Learn More</Button>
      <Button variant="quiet" icon={I('arrow-right')} iconPosition="right">Read More</Button>
      <Button disabled>Closed</Button>
    </div></div>
    <div><div className="lbl">Sizes &amp; inverse</div><div className="row" style={{marginTop:8}}>
      <Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button>
      <span style={{background:'var(--surface-navy)',padding:'10px 14px',borderRadius:'var(--radius-sm)'}}><Button variant="inverse">Contact Us</Button></span>
    </div></div>
    <div><div className="lbl">IconButton &amp; Badge</div><div className="row" style={{marginTop:8}}>
      <IconButton icon={I('arrow-left')} label="Previous"/>
      <IconButton icon={I('arrow-right')} label="Next" variant="solid"/>
      <IconButton icon={I('linkedin')} label="LinkedIn" variant="accent"/>
      <IconButton icon={I('x')} label="Close" variant="ghost"/>
      <span style={{width:1,height:28,background:'var(--border-subtle)'}}/>
      <Badge>Class of 2026</Badge><Badge tone="navy">Learning Event</Badge>
      <Badge tone="orange">Applications Open</Badge><Badge tone="solidNavy" size="sm">Alumni</Badge>
    </div></div>
    <div style={{display:'flex',gap:20,alignItems:'stretch'}}>
      <div style={{flex:1.3}}><div className="lbl">SectionHeading</div>
        <SectionHeading style={{marginTop:8}} eyebrow="How OC Fellows Transform Lives" title="Impact Stories"
          intro="Stories from OC Fellows showcase growth, purpose, and connection."/></div>
      <div style={{flex:1}}><div className="lbl">Card</div>
        <Card style={{marginTop:8}} interactive><h4 style={{margin:0,fontSize:'var(--text-lg)'}}>Community Partner</h4>
          <p style={{margin:'8px 0 0',fontSize:'var(--text-sm)',color:'var(--text-body)'}}>Career connections and mentoring with high school and university programs.</p></Card>
      </div>
    </div>
  </div>;
}

export default Demo
