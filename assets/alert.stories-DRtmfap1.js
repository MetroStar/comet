import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-CZhgR457.js";import"./banner-DIEW8n6B.js";import"./button-DGvenM4j.js";import"./button-group-BV1Ytlrk.js";import"./checkbox-DzLYMhp5.js";import"./combo-box-kKNgi2y1.js";import"./date-picker-BI-4-5Ws.js";import"./error-messages-DQwxQ3pR.js";import"./index-B2SZ3QXI.js";import"./form-group-CdcOJC88.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CsGs4XnL.js";import"./label-Z58zP1tT.js";import"./modal-BZVpKvbi.js";import"./process-list-Bs__pWGn.js";import"./radio-button-B2-5RiLD.js";import"./range-slider-B_aFnZC_.js";import"./search-CMPDoc5B.js";import"./select-CT7NorQw.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BNiS1_pH.js";import"./step-indicator-DQxEqhPc.js";import"./summary-box-B-Tr6alV.js";import"./tag-BkiTKNVF.js";import"./text-area-Bo3yVAyW.js";import"./time-picker-B0q7-5Ml.js";import"./tooltip-DtEVUKwV.js";import"./index-CE8u-YIp.js";import"./iframe-C-4Tka3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClkTyj86.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-COT3FEAd.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
