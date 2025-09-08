import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-etSpiK93.js";import"./banner-CWfSVMcQ.js";import"./button-B7pFt37z.js";import"./button-group-BRc77wHK.js";import"./checkbox-CUU9R15H.js";import"./combo-box-BPfnr8Rw.js";import"./date-picker-BMJNX18e.js";import"./error-messages-_lA7co94.js";import"./index-DSCzkK-X.js";import"./form-group-DkPWxlhw.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTBvyvH7.js";import"./label-0qqEdO1f.js";import"./modal-CKRHOoEv.js";import"./process-list-BZIxW3s3.js";import"./radio-button-Buv9cRjs.js";import"./range-slider-CxFZvE3_.js";import"./search-cT6P9tE4.js";import"./select-BNqncbBi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ovEs71ou.js";import"./step-indicator-CW9DACn5.js";import"./summary-box-DHtf9G_9.js";import"./tag-d3bWREuo.js";import"./text-area-CYy6almf.js";import"./time-picker-CEE4fWkk.js";import"./tooltip-DzncSK4y.js";import"./index-BAh54tqx.js";import"./iframe-3nCC7gWt.js";import"./index-C-EJdkFK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-l_I2nizS.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,N as __namedExportsOrder,M as default};
