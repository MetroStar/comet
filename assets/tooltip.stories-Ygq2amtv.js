import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./button-WXiSigBI.js";import{T as p}from"./tooltip-BYVxI0PO.js";import"./index-qCMx_cnb.js";import"./iframe-TQQq_xwn.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./is-in-viewport-ChIQrv3L.js";const b={title:"USWDS/Tooltip",component:p,argTypes:{label:{required:!0},position:{control:"select"}}},s=i=>n.jsx(p,{...i,children:n.jsxs(a,{id:"button",children:["Button with a tooltip ",i.position]})}),o={args:{position:"top",label:"Tooltip text"},render:s},t={args:{position:"right",label:"Tooltip text"},render:s},e={args:{position:"bottom",label:"Tooltip text"},render:s},r={args:{position:"left",label:"Tooltip text"},render:s};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const f=["TooltipTop","TooltipRight","TooltipBottom","TooltipLeft"];export{e as TooltipBottom,r as TooltipLeft,t as TooltipRight,o as TooltipTop,f as __namedExportsOrder,b as default};
