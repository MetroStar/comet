import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BMCWheN3.js";import"./banner-DXxf7j2A.js";import"./button-BG13cfhe.js";import"./button-group-DH510XBM.js";import"./checkbox-BIksfjMa.js";import"./combo-box-CmNtbie_.js";import"./date-picker-BqFBLI8_.js";import"./error-messages-_lA7co94.js";import"./index-DIfJFMD2.js";import"./form-group-DMa1BOSH.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkVszG8e.js";import"./label-0qqEdO1f.js";import"./modal-DFz5w_J3.js";import"./process-list-DWibcUhP.js";import"./radio-button-BxaYVlRc.js";import"./range-slider-DjynCvMR.js";import"./search-yWSQaSjk.js";import"./select-44mgK95P.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprjmmdW.js";import"./step-indicator-DRL7Hrms.js";import"./summary-box-AVnlpaHk.js";import"./tag-C903ahvi.js";import"./text-area-7d5d4_iK.js";import"./time-picker-ZCAyf2CU.js";import"./tooltip-zZvGvgsP.js";import"./index-4BetU0rA.js";import"./iframe-CBtXVCyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGD1TKzu.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xNoA7Lun.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
