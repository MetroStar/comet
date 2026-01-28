import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Bq6GEKwN.js";import"./banner-DK3VBm5U.js";import"./button-D8zIbCge.js";import"./button-group-CuPgHglY.js";import"./checkbox-CzQYJoKR.js";import"./combo-box-CJkqnDV4.js";import"./date-picker-CYzZbYRN.js";import"./error-messages-DQwxQ3pR.js";import"./index-BR9Kz18I.js";import"./form-group-DgFamHKx.js";import"./helper-text-C5i0f8Ge.js";import"./icon-B8KreRvd.js";import"./label-Z58zP1tT.js";import"./modal-BDwXsif8.js";import"./process-list-Cz-W6YwX.js";import"./radio-button-BocApSzk.js";import"./range-slider-faOPHNJW.js";import"./search-DL3oXpp6.js";import"./select-_A3e-4TS.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Ddk_Hcer.js";import"./step-indicator-AWmi0NuP.js";import"./summary-box-Du5uqv8U.js";import"./tag-Byr-lYbf.js";import"./text-area-CXRY8a5j.js";import"./time-picker-BXGxN0EV.js";import"./tooltip-Z2bNLvCP.js";import"./index-16IRk5e0.js";import"./iframe-Cn7wZz7_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_I8d7DW.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-pA1eNxZY.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
