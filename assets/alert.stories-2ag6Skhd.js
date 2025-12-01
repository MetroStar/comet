import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DMBuCYe_.js";import"./banner-DFFrh2we.js";import"./button-CebCDk22.js";import"./button-group-CP6QYoDT.js";import"./checkbox-BNnJF55M.js";import"./combo-box-C7-v9zyp.js";import"./date-picker-CAgeyYpd.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVf-osoh.js";import"./form-group-D9z_c3KR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Box8_GlQ.js";import"./label-Z58zP1tT.js";import"./modal-BIpf-zb1.js";import"./process-list-Dy1X11P1.js";import"./radio-button-DYlmKEnZ.js";import"./range-slider-BGMS1c5-.js";import"./search-Bf4lYVbJ.js";import"./select-CtAQSun1.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-qfke9_ky.js";import"./step-indicator-qlAV-NTT.js";import"./summary-box-CWhGKQyS.js";import"./tag-B8oHhohV.js";import"./text-area-DTRoQh8l.js";import"./time-picker-Xaqt13c1.js";import"./tooltip-C2SUIZOU.js";import"./index-CiA_ydS_.js";import"./iframe-Cu6PFQIF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sxjDgNp1.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BgeT6qmK.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
