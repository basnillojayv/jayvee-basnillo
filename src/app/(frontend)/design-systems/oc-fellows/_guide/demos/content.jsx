// VENDORED from public/design-systems/oc-fellows/components/content/content.card.html
// The card's inline <script type="text/babel"> demo, unchanged apart from
// the React import, the export, and dropping its self-mounting call.
import React from 'react'

export const ContentCss = `.wrap{padding:20px 24px;display:flex;flex-direction:column;gap:18px}.row{display:flex;flex-wrap:wrap;align-items:center;gap:12px}.lbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted)}`


const { StatCounter, ValueItem, PersonCard, StoryCard, PressCard, ProgramCard, TimelineStep, LogoWall } = window.OCFellowsDesignSystem_3dfef0;

const I = (n, s=20) => <i data-lucide={n} style={{width:s,height:s}}/>;
const P1='../../assets/photography/oc-fellows-group.png', P2='../../assets/photography/oc-fellows-networking.png';
function Demo(){
  return <div className="wrap">
    <div><div className="lbl">StatCounter</div><div className="row" style={{marginTop:8,gap:48}}>
      <StatCounter value={48} suffix="+" label="Events Held"/>
      <StatCounter value={96} suffix="%" label="Fellowship Completion Rate"/>
      <StatCounter value={180} suffix="+" label="Early Career Professionals Impacted"/>
    </div></div>
    <div><div className="lbl">ValueItem</div><div style={{marginTop:8,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
      <ValueItem icon={I('sparkles')} title="Curiosity Sparks Growth" description="Our curiosity leads to learning and understanding"/>
      <ValueItem icon={I('heart-handshake')} title="Lead with Empathy" description="Leading with empathy helps us recognize and include others"/>
      <ValueItem icon={I('users')} title="Shared Connection" description="Working together we reflect our interconnectedness"/>
    </div></div>
    <div><div className="lbl">PersonCard</div><div style={{marginTop:8,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:14}}>
      <PersonCard name="Parshva Adani" year="2026" photo={P1} href="#"/>
      <PersonCard name="Sam Bethke" year="2026" photo={P2} href="#"/>
      <PersonCard name="Roma Bhatia" year="2025" photo={P1} href="#"/>
      <PersonCard variant="team" name="Peggy Wolff" meta="Director, OC Fellows" photo={P2}/>
      <PersonCard variant="team" name="Minh Nguyen" meta="Program Manager, UCI Health" photo={P1}/>
    </div></div>
    <div><div className="lbl">StoryCard &amp; PressCard</div><div style={{marginTop:8,display:'grid',gridTemplateColumns:'1.2fr 1.2fr .8fr',gap:16,alignItems:'start'}}>
      <StoryCard image={P1} href="#" kicker="IMPACT STORY" title="Life Sciences Engineer Bianca Aleman Builds Skills and Friendships through OC Fellows" excerpt="The first year I moved to OC, it was hard to not…"/>
      <StoryCard image={P2} href="#" title="OC Fellow Alumn Minh Nguyen Gives Back to OC's Future Leaders" excerpt="My goal has always been to launch an enterprise dedicated to improving…"/>
      <PressCard publication="OCBJ Leaderboard" date="July 2025" thumbnail={P2} href="#"/>
    </div></div>
    <div><div className="lbl">ProgramCard &amp; TimelineStep</div><div style={{marginTop:8,display:'grid',gridTemplateColumns:'1fr 1fr 1.1fr',gap:16,alignItems:'start'}}>
      <ProgramCard title="Learning Event" image={P1} href="#" style={{minHeight:260}} description="A workshop focused on leadership development, career growth and skill building."/>
      <ProgramCard title="Social Event" image={P2} href="#" style={{minHeight:260}} description="Quarterly social events hosted at different locations around Orange County."/>
      <div>
        <TimelineStep number={1} title="Application Period" description="Application opens on March 1st each year."/>
        <TimelineStep number={2} title="Submit Resume" description="Applicants need to include an updated resume." active/>
        <TimelineStep number={3} title="Program Begins" description="The new class kicks off in July." last/>
      </div>
    </div></div>
    <div><div className="lbl">LogoWall</div><div style={{marginTop:8}}>
      <LogoWall label="OC FELLOWS IS SPONSORED BY" logos={[{name:'Edwards Lifesciences'},{name:'Bank of America'},{name:'Medtronic'},{name:'Pacific Life'},{name:'Rivian'}]}/>
    </div></div>
  </div>;
}

export default Demo
