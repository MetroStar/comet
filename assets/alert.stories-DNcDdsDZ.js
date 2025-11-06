import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-COi9ma6z.js";import"./banner-BY97cSax.js";import"./button-CqrPBp8K.js";import"./button-group-CdGkF7WG.js";import"./checkbox-3ChjEf2R.js";import"./combo-box-B6O4vxiK.js";import"./date-picker-Dd9Iw-ol.js";import"./error-messages-_lA7co94.js";import"./index-CE4Qbm93.js";import"./form-group-C2lFXs7K.js";import"./helper-text-BRA2CuHl.js";import"./icon-Eg7KUmam.js";import"./label-0qqEdO1f.js";import"./modal-ByL-yNd7.js";import"./process-list-oXo-lIyy.js";import"./radio-button-C6MUYnX_.js";import"./range-slider-BRFEcZKS.js";import"./search-B58zHbmN.js";import"./select-DOSbCKLB.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BuAtgi14.js";import"./step-indicator-D8MXlKv6.js";import"./summary-box-BxR4roeg.js";import"./tag-CWw6NOTz.js";import"./text-area-d4GYi33a.js";import"./time-picker-CU9bog2Y.js";import"./tooltip-ugUe3fuh.js";import"./index-Cd-en3Xw.js";import"./iframe-BiUBZBi9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L6niw3Vl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Br38tAj3.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
