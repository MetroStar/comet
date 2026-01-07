import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BE7P90A5.js";import"./banner-CdKUtT4Q.js";import"./button-BuClEYRA.js";import"./button-group-3NzQO1eL.js";import"./checkbox-B_FgE5YG.js";import"./combo-box-BwDn4-7X.js";import"./date-picker-DtP7l5jL.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bni-B5ok.js";import"./form-group-BZBdvamC.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CdkrdHks.js";import"./label-Z58zP1tT.js";import"./modal-xumiYz7t.js";import"./process-list-CcAX-yjy.js";import"./radio-button-Bd2bWT8y.js";import"./range-slider-Be1UaCg9.js";import"./search-P4kxlHtr.js";import"./select-vPNxENBR.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CPGEl31o.js";import"./step-indicator-DJJpD3pM.js";import"./summary-box-0wY2PkS2.js";import"./tag-DkogBOJ7.js";import"./text-area-1c32Owjo.js";import"./time-picker-DmCzu4M3.js";import"./tooltip-CnpPKDFp.js";import"./index-Bj4XtJnt.js";import"./iframe-BhXn9yy1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt53Fj7x.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4TSTOiY.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
