import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Ch-sZdwv.js";import"./banner-XLvXtSqA.js";import"./button-BsC6LYen.js";import"./button-group-C-mMKkOx.js";import"./checkbox-BrkCm2o9.js";import"./combo-box-Cas2il9B.js";import"./date-picker-Bqh6GVSb.js";import"./error-messages-DQwxQ3pR.js";import"./index-CkKdknOi.js";import"./form-group-bMnI7vyb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7ZI2_WA.js";import"./label-Z58zP1tT.js";import"./modal-BnlhklE2.js";import"./process-list-DG1jhLut.js";import"./radio-button-BK2GU6Ug.js";import"./range-slider-CcpPZara.js";import"./search-BD8ryVTf.js";import"./select-BAp0tBXJ.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BDPCZz7C.js";import"./step-indicator-BoU6H3fm.js";import"./summary-box-CUyYbWXy.js";import"./tag-Dd3nNNr4.js";import"./text-area-DvYQT1M1.js";import"./time-picker-DPoYf0Ep.js";import"./tooltip-gTCSVkqI.js";import"./index-Bv8IALZP.js";import"./iframe-DkQxi855.js";import"./preload-helper-PPVm8Dsz.js";import"./index--78zLXpN.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BekW2GCl.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-1',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: ''
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-close',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: true,
    heading: 'Alert with close button',
    onClose: () => {
      // eslint-disable-next-line no-console
      console.log('Alert closed');
    }
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-2',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: '',
    body: <span>This is the alert body as a prop</span>
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...t.parameters?.docs?.source}}};const Q=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,Q as __namedExportsOrder,N as default};
