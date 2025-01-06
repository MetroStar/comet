import{j as e}from"./jsx-runtime-CLpGMVip.js";import{P as g}from"./stack-graph-BOByGtNq.js";import"./index-D7xSkP6m.js";import"./_commonjsHelpers-Cpj98o6Y.js";const w={title:"Data Viz/Pie Chart",component:g},a=l=>e.jsx("div",{style:{width:"400px",height:"400px"},children:e.jsx(g,{...l})}),t=a.bind({});t.args={title:"Pie Chart",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1},{x:"snake",y:3},{x:"rabbit",y:4}],colors:"warm",innerRadius:0};const r=a.bind({});r.args={title:"Pie Chart as Donut",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:"warm",innerRadius:100};const s=a.bind({});s.args={title:"Pie Chart with Custom Colors",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:["#0d7ea2","#cd425b","#00a871"],innerRadius:0};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,h,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(c=(h=r.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const f=["Default","DonutChart","CustomColors"];export{s as CustomColors,t as Default,r as DonutChart,f as __namedExportsOrder,w as default};
