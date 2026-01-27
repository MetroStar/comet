import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DJmLJWvg.js";import"./banner-BUZwlTq1.js";import"./button-C4QfSxW0.js";import"./button-group-ieTsNMrX.js";import"./checkbox-BTlZxQ4F.js";import"./combo-box-DU30cfkl.js";import"./date-picker-CpHMGSi4.js";import"./error-messages-DQwxQ3pR.js";import"./index-B00UuIqu.js";import"./form-group-VLBEVhA0.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CTFc-y2-.js";import"./label-Z58zP1tT.js";import"./modal-B9LiO5_D.js";import"./process-list-xhix8Wuu.js";import"./radio-button-BhXyRUXt.js";import"./range-slider-DrXaDfu4.js";import"./search-C0nIEegv.js";import"./select-BMaCLBfp.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DjdkxkUE.js";import"./step-indicator-BaunrL7u.js";import"./summary-box-DOA8Q_xK.js";import"./tag-0raYCf6x.js";import"./text-area-O1BkgWFk.js";import"./time-picker-ZOMr_7mu.js";import"./tooltip-ajWB9iB8.js";import"./index-x-BpOtc8.js";import"./iframe-Ct8SnmH1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWUUcN-5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B89yV2G1.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
