// VENDORED from public/design-systems/oc-fellows/components/navigation/navigation.card.html
// The card's inline <script type="text/babel"> demo, unchanged apart from
// the React import, the export, and dropping its self-mounting call.
import React from 'react'

export const NavigationCss = `.wrap{padding:20px 24px;display:flex;flex-direction:column;gap:18px}.row{display:flex;flex-wrap:wrap;align-items:center;gap:12px}.lbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted)}`


const { NavBar, Footer } = window.OCFellowsDesignSystem_3dfef0;

const I = (n, s=18) => <i data-lucide={n} style={{width:s,height:s}}/>;
function Demo(){
  const items=[{label:'About',href:'/about'},
    {label:'Our Program',href:'/our-program',children:[{label:'Learning Events',href:'/learning'},{label:'Social Events',href:'/social'},{label:'Community Partners',href:'/community'}]},
    {label:'Our Fellows',href:'/our-fellows'},{label:'Stories',href:'/stories'},{label:'Our Team',href:'/team'}];
  return <div style={{display:'flex',flexDirection:'column'}}>
    <NavBar sticky={false} logo="../../assets/logo-primary.svg" items={items} activeHref="/our-fellows" cta={{label:'Apply',href:'#'}}/>
    <div style={{padding:'22px 24px',background:'var(--surface-cream)',fontSize:'var(--text-sm)',color:'var(--text-muted)'}}>Page content sits between the two. Hover “Our Program” for the dropdown.</div>
    <Footer logo="../../assets/logo-white.svg"
      columns={[{title:'Navigate',links:[{label:'About',href:'#'},{label:'Our Fellows',href:'#'},{label:'Stories',href:'#'},{label:'Our Network',href:'#'}]},
                {title:'Our Program',links:[{label:'Learning',href:'#'},{label:'Social',href:'#'},{label:'Community',href:'#'}]},
                {title:'More',links:[{label:'Press',href:'#'},{label:'Apply',href:'#'},{label:'Contact us',href:'#'}]}]}
      social={[{label:'LinkedIn',href:'#',icon:I('linkedin')}]}
      legal={[{label:'Privacy Policy',href:'#'}]}/>
  </div>;
}

export default Demo
