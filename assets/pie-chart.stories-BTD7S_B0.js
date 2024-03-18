import{j as e}from"./jsx-runtime-CKrituN3.js";import{P as g}from"./stack-graph-S6fCD4v1.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./isPlainObject-Q2gtsG5u.js";import"./_baseAssignValue-BpjoOScu.js";import"./pickBy-CrIjVsaj.js";const b={title:"Data Viz/Pie Chart",component:g},a=l=>e.jsx("div",{style:{width:"400px",height:"400px"},children:e.jsx(g,{...l})}),t=a.bind({});t.args={title:"Pie Chart",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1},{x:"snake",y:3},{x:"rabbit",y:4}],colors:"warm",innerRadius:0};const r=a.bind({});r.args={title:"Pie Chart as Donut",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:"warm",innerRadius:100};const s=a.bind({});s.args={title:"Pie Chart with Custom Colors",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:["#0d7ea2","#cd425b","#00a871"],innerRadius:0};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,h,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var c,m,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const D=["Default","DonutChart","CustomColors"];export{s as CustomColors,t as Default,r as DonutChart,D as __namedExportsOrder,b as default};
