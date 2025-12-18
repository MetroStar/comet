import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-C_C78in7.js";import"./banner-BgiZqRlo.js";import"./button-tylLr4j2.js";import"./button-group-D6cjC1Vo.js";import"./checkbox-B6VyoAKp.js";import"./combo-box-CDNvDZLL.js";import"./date-picker-DgQlJTCw.js";import"./error-messages-DQwxQ3pR.js";import"./index-CdaV37ys.js";import"./form-group-DoY8VT3L.js";import"./helper-text-C5i0f8Ge.js";import"./icon-hzBFwrUe.js";import"./label-Z58zP1tT.js";import"./modal-DLp_famE.js";import"./process-list-DQ8FW98J.js";import"./radio-button-C3p27onq.js";import"./range-slider-Cluh4832.js";import"./search-BMB22s0V.js";import"./select-Dff7ZjSm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DtkG30B7.js";import"./step-indicator-CDua6ht5.js";import"./summary-box-CvRPeRE0.js";import"./tag-AOv4Bgzm.js";import"./text-area-BKiL77Z2.js";import"./time-picker-CernixGi.js";import"./tooltip-KHEIxHIJ.js";import"./index-91E-2JV-.js";import"./iframe-BTUuw-2g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrsoTcc4.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CgEYPfm3.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
