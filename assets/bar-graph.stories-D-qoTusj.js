import{j as o}from"./jsx-runtime-Bxcv0yjW.js";import{V as l}from"./victory-chart-DrQHwmoJ.js";import{V as g}from"./victory-bar-BXqyXBsr.js";import"./index-mfbfsM12.js";import"./line-segment-DjfrSo4q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./isPlainObject-CYVBBrud.js";import"./_getPrototype-B2NkHwh7.js";import"./pickBy-ZAvoZlmg.js";import"./arc-HBYzQ_7A.js";const m=a=>o.jsx(l,{...a.chart,children:o.jsx(g,{style:{data:{fill:a.color}},alignment:a.alignment,barRatio:a.barRatio,data:a.data,animate:{duration:2e3,onLoad:{duration:1e3}}})}),w={title:"Data Viz/Bar Graph",component:m},p=a=>o.jsx("div",{style:{width:"400px",height:"300px"},children:o.jsx(m,{...a})}),c=[{x:"Cat",y:2},{x:"Dog",y:7},{x:"Fish",y:3},{x:"Snake",y:1},{x:"Rabbit",y:2}],r=p.bind({});r.args={chart:{title:"Bar graph",width:400,height:300},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};const t=p.bind({});t.args={chart:{title:"Bar graph",width:400,height:300,horizontal:!0},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};var e,i,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,d,h;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const V=["Default","Horizontal"];export{r as Default,t as Horizontal,V as __namedExportsOrder,w as default};
