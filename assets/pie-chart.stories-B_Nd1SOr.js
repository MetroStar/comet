import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{P as l}from"./stack-graph-ptvF5ByL.js";import"./iframe-DIbYc2YD.js";const w={title:"Data Viz/Pie Chart",component:l},e=y=>a.jsx("div",{style:{width:"400px",height:"400px"},children:a.jsx(l,{...y})}),r={args:{title:"Pie Chart",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1},{x:"snake",y:3},{x:"rabbit",y:4}],colors:"warm",innerRadius:0},render:e},n={args:{title:"Pie Chart as Donut",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:"warm",innerRadius:100},render:e},t={args:{title:"Pie Chart with Custom Colors",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:["#0d7ea2","#cd425b","#00a871"],innerRadius:0},render:e};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Pie Chart',
    height: 400,
    width: 400,
    data: [{
      x: 'dogs',
      y: 8
    }, {
      x: 'cats',
      y: 5
    }, {
      x: 'fish',
      y: 1
    }, {
      x: 'snake',
      y: 3
    }, {
      x: 'rabbit',
      y: 4
    }],
    colors: 'warm',
    innerRadius: 0
  },
  render: renderChart
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,h,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Pie Chart as Donut',
    height: 400,
    width: 400,
    data: [{
      x: 'dogs',
      y: 8
    }, {
      x: 'cats',
      y: 5
    }, {
      x: 'fish',
      y: 1
    }],
    colors: 'warm',
    innerRadius: 100
  },
  render: renderChart
}`,...(c=(h=n.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var x,m,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Pie Chart with Custom Colors',
    height: 400,
    width: 400,
    data: [{
      x: 'dogs',
      y: 8
    }, {
      x: 'cats',
      y: 5
    }, {
      x: 'fish',
      y: 1
    }],
    colors: ['#0d7ea2', '#cd425b', '#00a871'],
    innerRadius: 0
  },
  render: renderChart
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const f=["Default","DonutChart","CustomColors"];export{t as CustomColors,r as Default,n as DonutChart,f as __namedExportsOrder,w as default};
