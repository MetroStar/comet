import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{B as h}from"./stack-graph-Brh1G0k6.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y={title:"Data Viz/Bar Graph",component:h},d=m=>t.jsx("div",{style:{width:"400px",height:"300px"},children:t.jsx(h,{...m})}),c=[{x:"Cat",y:2},{x:"Dog",y:7},{x:"Fish",y:3},{x:"Snake",y:1},{x:"Rabbit",y:2}],r=d.bind({});r.args={chart:{title:"Bar graph",width:400,height:300},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};const a=d.bind({});a.args={chart:{title:"Bar graph",width:400,height:300,horizontal:!0},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};var e,o,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(n=(p=a.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const b=["Default","Horizontal"];export{r as Default,a as Horizontal,b as __namedExportsOrder,y as default};