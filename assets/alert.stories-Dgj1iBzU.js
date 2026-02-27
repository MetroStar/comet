import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-JRy8o7uW.js";import"./banner-CQ3xCBuG.js";import"./button-Ba7xgwez.js";import"./button-group-B3gTHZWA.js";import"./checkbox-CLvsLWaM.js";import"./combo-box-Co7v8Gdu.js";import"./date-picker-mWD4hatY.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ba-_iRH5.js";import"./form-group-DaNJz7RT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZ8toPDV.js";import"./label-Z58zP1tT.js";import"./modal-u2tm0lfe.js";import"./process-list-nskObF0o.js";import"./radio-button-BqGmz9gl.js";import"./range-slider-zqNchBAK.js";import"./search-DMPs4SjR.js";import"./select-Cd16SEf0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B22i4OXT.js";import"./step-indicator-DQdWZbZs.js";import"./summary-box-BQaBbU0N.js";import"./tag-CRQC5syz.js";import"./text-area-jBrudwtx.js";import"./time-picker-Bt-xFGpB.js";import"./tooltip-CJQbMQMO.js";import"./index-BNIzpdMi.js";import"./iframe-BTdRfY9k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGx-jJq7.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cz8WPAN8.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
