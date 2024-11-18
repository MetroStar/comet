import{j as r}from"./jsx-runtime-DPda6Ybg.js";import{V as l,a as e}from"./victory-chart-4VxTgqCv.js";import{V as d}from"./victory-bar-CuVklN74.js";import"./index-DhrokLn_.js";import"./line-segment-2oEboTUS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arc-HBYzQ_7A.js";const n=t=>r.jsxs(l,{...t.chart,polar:!0,children:[r.jsx(e,{dependentAxis:!0,style:{axis:{stroke:"none"},tickLabels:{fill:"none"},grid:{stroke:"grey",strokeDasharray:"4, 8"}}}),r.jsx(e,{tickValues:t.ticks}),r.jsx(d,{style:{data:{fill:t.color}},data:t.data,animate:{duration:2e3,onLoad:{duration:1e3}}})]}),f={title:"Data Viz/Polar Axis",component:n},c=t=>r.jsx("div",{style:{width:"400px",height:"400px"},children:r.jsx(n,{...t})}),a=c.bind({});a.args={chart:{title:"Polar Axis",width:400,height:400},color:"#0d7ea2",data:[1,3,5,1,2,1,5]};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args: PolarAxisProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PolarAxis {...args} />
  </div>`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,f as default};
