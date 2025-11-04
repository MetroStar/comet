import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./button-s6X5UBaR.js";import{T as p}from"./tooltip-Ce_IMZUp.js";import"./index-hkmjj3pC.js";import"./iframe-CUeiGFJS.js";import"./preload-helper-PPVm8Dsz.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./is-in-viewport-ChIQrv3L.js";const f={title:"USWDS/Tooltip",component:p,argTypes:{label:{required:!0},position:{control:"select"}}},i=s=>n.jsx(p,{...s,children:n.jsxs(a,{id:"button",children:["Button with a tooltip ",s.position]})}),o={args:{position:"top",label:"Tooltip text"},render:i},t={args:{position:"right",label:"Tooltip text"},render:i},e={args:{position:"bottom",label:"Tooltip text"},render:i},r={args:{position:"left",label:"Tooltip text"},render:i};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top',
    label: 'Tooltip text'
  },
  render: renderTooltip
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'right',
    label: 'Tooltip text'
  },
  render: renderTooltip
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    label: 'Tooltip text'
  },
  render: renderTooltip
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left',
    label: 'Tooltip text'
  },
  render: renderTooltip
}`,...r.parameters?.docs?.source}}};const h=["TooltipTop","TooltipRight","TooltipBottom","TooltipLeft"];export{e as TooltipBottom,r as TooltipLeft,t as TooltipRight,o as TooltipTop,h as __namedExportsOrder,f as default};
