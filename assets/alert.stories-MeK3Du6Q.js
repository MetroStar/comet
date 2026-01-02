import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-walHDM1X.js";import"./banner-D6OWsJH6.js";import"./button-B7htGxce.js";import"./button-group-DPRKc4CK.js";import"./checkbox-gJbOdNV_.js";import"./combo-box-qTwjyg9R.js";import"./date-picker-DEqYSMys.js";import"./error-messages-DQwxQ3pR.js";import"./index-IzqfyfZA.js";import"./form-group-DaebfseS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CYZuVbXq.js";import"./label-Z58zP1tT.js";import"./modal-UTT_pOU9.js";import"./process-list-FACfqpED.js";import"./radio-button-8Hppabgw.js";import"./range-slider-cvo6pp4o.js";import"./search-JwXuI3O4.js";import"./select-BLtfPvgx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BJY1MeDm.js";import"./step-indicator-B38Y5p7y.js";import"./summary-box-KQva4Gki.js";import"./tag-C2j4csul.js";import"./text-area-C9cwn9DQ.js";import"./time-picker-DQ38ClCl.js";import"./tooltip-C7QNwUXe.js";import"./index-BVzeUMco.js";import"./iframe-Co_ow-pI.js";import"./preload-helper-PPVm8Dsz.js";import"./index--DG9ymCz.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-5cdN7wMr.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
