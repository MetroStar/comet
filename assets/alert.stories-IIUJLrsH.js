import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DoPD4hfz.js";import"./banner-CO-rJZEh.js";import"./button-s3f33iqR.js";import"./button-group-yvOjzuR7.js";import"./checkbox-CtRvH166.js";import"./combo-box-BjQtQyeK.js";import"./date-picker-BXS9EJIo.js";import"./error-messages-DQwxQ3pR.js";import"./index-Y6j-vL1X.js";import"./form-group-C2eezSoD.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BvEpj7o9.js";import"./label-Z58zP1tT.js";import"./modal-C3ovDbUu.js";import"./process-list-CtF8XHOe.js";import"./radio-button-5J3HPOi8.js";import"./range-slider-BmvWjfhG.js";import"./search-DXUrmg5z.js";import"./select-BFVUdGDr.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DrN3KhjE.js";import"./step-indicator-Dmo_bZM0.js";import"./summary-box-2eCbppDZ.js";import"./tag-C3E-r3xI.js";import"./text-area-BRG0rnJp.js";import"./time-picker-eDTugkBF.js";import"./tooltip-CyHsxTd4.js";import"./index-CajJ0eJG.js";import"./iframe-DI97NYzA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXqkfQZm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN4bhDLR.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
