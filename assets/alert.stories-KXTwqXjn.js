import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table--dTJ_LlN.js";import"./banner-DdeTFA5m.js";import"./button-DZcatjI3.js";import"./button-group-CIDeXJwb.js";import"./checkbox-CPEjjsvs.js";import"./combo-box-CuLm5IF7.js";import"./date-picker-due9hnL1.js";import"./error-messages-DQwxQ3pR.js";import"./index-0pD0Rfof.js";import"./form-group-B_GsfbZZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cwt70qU2.js";import"./label-Z58zP1tT.js";import"./modal-CR2VGK_Z.js";import"./process-list-Hq8KfT0t.js";import"./radio-button-QrmP5zSj.js";import"./range-slider-B7ThKR_I.js";import"./search-iaPpQ-jF.js";import"./select-DouUKTqO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BFT9GY45.js";import"./step-indicator-IM_qMCyO.js";import"./summary-box-DfJ7OwM5.js";import"./tag-BpxbKPsG.js";import"./text-area-Dh5yMKcm.js";import"./time-picker-B_vT5Vzq.js";import"./tooltip-yNuiRydh.js";import"./index-BWc2KjT0.js";import"./iframe-DLzeRc9X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNkV8ViH.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CvKfrh-m.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
