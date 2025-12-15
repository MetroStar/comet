import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DcU0b4S9.js";import"./banner-Zhn659kb.js";import"./button-B_-ONNZl.js";import"./button-group-BKOewsSA.js";import"./checkbox-C3tZzpbU.js";import"./combo-box-Q1ShTlun.js";import"./date-picker-Wpd8_OKF.js";import"./error-messages-DQwxQ3pR.js";import"./index-B7AoSx0a.js";import"./form-group-CMLBbM3T.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DCURlvdx.js";import"./label-Z58zP1tT.js";import"./modal-BV7fkCww.js";import"./process-list-gyaY5MhK.js";import"./radio-button-idXHHZgI.js";import"./range-slider-DSlEtBnj.js";import"./search-DPGJ6RwK.js";import"./select-DccGlsGn.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BeC0GHZw.js";import"./step-indicator-CEe8z7Jq.js";import"./summary-box-Bw0p2-tj.js";import"./tag-BClIq1Bj.js";import"./text-area-B6LM3Fp9.js";import"./time-picker-BqOXWfTb.js";import"./tooltip-DrkxkMMW.js";import"./index-2ou9KEVW.js";import"./iframe-B742Kdb9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_5Z-PB-3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bu9PEM7P.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
