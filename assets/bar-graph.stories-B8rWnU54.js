import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as h}from"./stack-graph-CbXEs2Qh.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B={title:"Data Viz/Bar Graph",component:h},d=m=>t.jsx("div",{style:{width:"400px",height:"300px"},children:t.jsx(h,{...m})}),c=[{x:"Cat",y:2},{x:"Dog",y:7},{x:"Fish",y:3},{x:"Snake",y:1},{x:"Rabbit",y:2}],r=d.bind({});r.args={chart:{title:"Bar graph",width:400,height:300},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};const a=d.bind({});a.args={chart:{title:"Bar graph",width:400,height:300,horizontal:!0},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};var e,o,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,n,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const y=["Default","Horizontal"];export{r as Default,a as Horizontal,y as __namedExportsOrder,B as default};