import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-CfPzz4nf.js";import"./banner-BH6B8BCY.js";import"./button-CLevJzxR.js";import"./button-group-D3Ocr3Rb.js";import"./checkbox-Cc0V9sR6.js";import"./combo-box-TU4qt16Y.js";import"./date-picker-DSHGeHYl.js";import"./error-messages-DQwxQ3pR.js";import"./index-BsEblj0h.js";import"./form-group-BzmrJy3n.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D2Nqola7.js";import"./label-Z58zP1tT.js";import"./modal-DfDUd-Mt.js";import"./process-list-UharPk4r.js";import"./radio-button-D4Pk_Rgl.js";import"./range-slider-sQ5Tj5dy.js";import"./search-CFh4K7A8.js";import"./select-Kk8L1GnB.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D0bVirTZ.js";import"./step-indicator-z7wQapN2.js";import"./summary-box-BkJ1H1hK.js";import"./tag-ZOpGD9hG.js";import"./text-area-ynEclwl4.js";import"./time-picker-Bb-pazU6.js";import"./tooltip-Cg_p7vCm.js";import"./index-BdG5vuSr.js";import"./iframe-D2HmkBK5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dyunygu1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CucFHm0F.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
