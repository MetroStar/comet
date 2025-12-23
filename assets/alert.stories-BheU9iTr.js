import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Dmb-ffh0.js";import"./banner-DZNvfklf.js";import"./button-DzGNrXYT.js";import"./button-group-Zzh5VRIu.js";import"./checkbox-LlIZ6WAZ.js";import"./combo-box-Bv6VcdXU.js";import"./date-picker-CqoH8LeI.js";import"./error-messages-DQwxQ3pR.js";import"./index-52vSm_bk.js";import"./form-group-DhnpQ1gO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-4RfGqqIJ.js";import"./label-Z58zP1tT.js";import"./modal-DwhLWDUa.js";import"./process-list-DGxHCMjD.js";import"./radio-button-gMU8aMNI.js";import"./range-slider-Dq4GAh67.js";import"./search-B2MV1myA.js";import"./select-BjUKF4It.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DV2fzf3r.js";import"./step-indicator-DdaAIm1x.js";import"./summary-box-CoPcq3HL.js";import"./tag-B4n4yz8K.js";import"./text-area-ClvojZeY.js";import"./time-picker-G362YD_L.js";import"./tooltip-Dq6tjxuf.js";import"./index-oUbQcmvJ.js";import"./iframe-OQEP8bq4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYS2UhCj.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DC7B1Qf2.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
