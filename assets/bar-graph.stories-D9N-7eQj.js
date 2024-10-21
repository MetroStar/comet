import{j as e}from"./jsx-runtime-Bxcv0yjW.js";import{V as l}from"./victory-chart-1xmushny.js";import{V as g}from"./victory-bar-ev1alMy4.js";import"./index-mfbfsM12.js";import"./line-segment-CsLfmdfI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-LpgX82Vb.js";import"./arc-HBYzQ_7A.js";const c=a=>e.jsx(l,{...a.chart,children:e.jsx(g,{style:{data:{fill:a.color}},alignment:a.alignment,barRatio:a.barRatio,data:a.data,animate:{duration:2e3,onLoad:{duration:1e3}}})}),R={title:"Data Viz/Bar Graph",component:c},m=a=>e.jsx("div",{style:{width:"400px",height:"300px"},children:e.jsx(c,{...a})}),p=[{x:"Cat",y:2},{x:"Dog",y:7},{x:"Fish",y:3},{x:"Snake",y:1},{x:"Rabbit",y:2}],r=m.bind({});r.args={chart:{title:"Bar graph",width:400,height:300},alignment:"start",color:"#0d7ea2",barRatio:1,data:p};const t=m.bind({});t.args={chart:{title:"Bar graph",width:400,height:300,horizontal:!0},alignment:"start",color:"#0d7ea2",barRatio:1,data:p};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,d,h;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const v=["Default","Horizontal"];export{r as Default,t as Horizontal,v as __namedExportsOrder,R as default};
