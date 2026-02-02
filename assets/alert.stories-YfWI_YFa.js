import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BEKSweh_.js";import"./banner-DyAyilqF.js";import"./button-VNXf3ISx.js";import"./button-group-xmotaBdt.js";import"./checkbox-BweNvPRE.js";import"./combo-box-ClEp36RC.js";import"./date-picker-BqoWjb8c.js";import"./error-messages-DQwxQ3pR.js";import"./index-BZ1H5p7K.js";import"./form-group-BFEWiwy1.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C75CzOhg.js";import"./label-Z58zP1tT.js";import"./modal-CEGm1Rs3.js";import"./process-list-D0GJ3lSG.js";import"./radio-button-tlBbfaT6.js";import"./range-slider-D-cIFdgq.js";import"./search-DCoJlB32.js";import"./select-CYSnMBtu.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-3WD2CfWL.js";import"./step-indicator-rn6oeVSC.js";import"./summary-box-Bs9YqzRK.js";import"./tag-CBCRz6dN.js";import"./text-area-BSZLkY_3.js";import"./time-picker-C9u4OHrU.js";import"./tooltip-w2oQOtQH.js";import"./index-DAhVAgpx.js";import"./iframe-DRiTG7GW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgyOCjq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DSAWNYRB.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
