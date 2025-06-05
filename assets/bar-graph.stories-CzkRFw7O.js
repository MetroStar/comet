import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as h}from"./stack-graph-DdGbtbWz.js";import"./iframe-Blsptm9M.js";const u={title:"Data Viz/Bar Graph",component:h},d=l=>t.jsx("div",{style:{width:"400px",height:"300px"},children:t.jsx(h,{...l})}),c=[{x:"Cat",y:2},{x:"Dog",y:7},{x:"Fish",y:3},{x:"Snake",y:1},{x:"Rabbit",y:2}],a=d.bind({});a.args={chart:{title:"Bar graph",width:400,height:300},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};const r=d.bind({});r.args={chart:{title:"Bar graph",width:400,height:300,horizontal:!0},alignment:"start",color:"#0d7ea2",barRatio:1,data:c};var e,s,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: BarGraphProps) => <div style={{
  width: '400px',
  height: '300px'
}}>
    <BarGraph {...args} />
  </div>`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const B=["Default","Horizontal"];export{a as Default,r as Horizontal,B as __namedExportsOrder,u as default};
