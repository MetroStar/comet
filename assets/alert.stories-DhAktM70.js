import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-8pzfOB_A.js";import"./banner-807EuhAw.js";import"./button-BDmVrewr.js";import"./button-group-BpG60Bcj.js";import"./checkbox-CRo-bLYB.js";import"./combo-box-xOSHeDpi.js";import"./date-picker-iGTXRuob.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bo9BpfTX.js";import"./form-group--j3vJMLd.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CwZlaL-J.js";import"./label-Z58zP1tT.js";import"./modal-BYOriTvt.js";import"./process-list-Czejjo2U.js";import"./radio-button-DS7TYGvv.js";import"./range-slider-DftJyvpa.js";import"./search-BJc94_-5.js";import"./select-CopyUol0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-I6f_MaFE.js";import"./step-indicator-DWHprvTt.js";import"./summary-box-BchfMT9C.js";import"./tag-zxYU5urs.js";import"./text-area-Cfzus3my.js";import"./time-picker-zTLx_dm2.js";import"./tooltip-DfU1Hy0M.js";import"./index-BtRDYpIf.js";import"./iframe-Sgzi56p1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NOZ5o7zP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DS-Y6bb9.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
