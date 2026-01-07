import{j as a}from"./jsx-runtime-u17CrQMm.js";import{P as s}from"./stack-graph-B_f5NTOj.js";import"./iframe-BhXn9yy1.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Data Viz/Pie Chart",component:s},e=o=>a.jsx("div",{style:{width:"400px",height:"400px"},children:a.jsx(s,{...o})}),r={args:{title:"Pie Chart",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1},{x:"snake",y:3},{x:"rabbit",y:4}],colors:"warm",innerRadius:0},render:e},n={args:{title:"Pie Chart as Donut",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:"warm",innerRadius:100},render:e},t={args:{title:"Pie Chart with Custom Colors",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:["#0d7ea2","#cd425b","#00a871"],innerRadius:0},render:e};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Default","DonutChart","CustomColors"];export{t as CustomColors,r as Default,n as DonutChart,x as __namedExportsOrder,m as default};
