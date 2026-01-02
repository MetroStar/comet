import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BMOYpecL.js";import"./banner-D6zqm2EW.js";import"./button-nrtU24eK.js";import"./button-group-ADlqfgna.js";import"./checkbox-BiXkhPCx.js";import"./combo-box-CMQMmbfR.js";import"./date-picker-CgPaXT8a.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ct-EIvox.js";import"./form-group-uDJS1lnL.js";import"./helper-text-C5i0f8Ge.js";import"./icon-F_cyGZg9.js";import"./label-Z58zP1tT.js";import"./modal-PoZR4k57.js";import"./process-list-BQJfcRpT.js";import"./radio-button-C1_K-gHx.js";import"./range-slider-1ZyOyWp9.js";import"./search-Szn_9PFD.js";import"./select-BJFWI1Li.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BpclcXMk.js";import"./step-indicator-BpRbZmmq.js";import"./summary-box-DXWDLu-K.js";import"./tag-DTac5_8O.js";import"./text-area-BL3P-fru.js";import"./time-picker-DhIe9BAg.js";import"./tooltip-Dygdw5v4.js";import"./index-VxPTfNJY.js";import"./iframe-BIOm41XL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6pxTQJ.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BdscNTfy.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
