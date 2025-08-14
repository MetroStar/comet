import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./stack-graph-DK3N76GA.js";import"./iframe-9tQC-4Xm.js";const c={title:"Data Viz/Bar Graph",component:e},n=[{x:"Cat",y:2},{x:"Dog",y:7},{x:"Fish",y:3},{x:"Snake",y:1},{x:"Rabbit",y:2}],o=s=>t.jsx("div",{style:{width:"400px",height:"300px"},children:t.jsx(e,{...s})}),r={args:{chart:{title:"Bar graph",width:400,height:300},alignment:"start",color:"#0d7ea2",barRatio:1,data:n},render:o},a={args:{chart:{title:"Bar graph",width:400,height:300,horizontal:!0},alignment:"start",color:"#0d7ea2",barRatio:1,data:n},render:o};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    chart: {
      title: 'Bar graph',
      width: 400,
      height: 300
    },
    alignment: 'start',
    color: '#0d7ea2',
    barRatio: 1,
    data
  },
  render: renderGraph
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    chart: {
      title: 'Bar graph',
      width: 400,
      height: 300,
      horizontal: true
    },
    alignment: 'start',
    color: '#0d7ea2',
    barRatio: 1,
    data
  },
  render: renderGraph
}`,...a.parameters?.docs?.source}}};const p=["Default","Horizontal"];export{r as Default,a as Horizontal,p as __namedExportsOrder,c as default};
