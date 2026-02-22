import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-CzoVEYc_.js";import"./banner-DW0yElUw.js";import"./button-bZ5Mp_AU.js";import"./button-group-D0lWyXML.js";import"./checkbox-3CDfTcVY.js";import"./combo-box-AJ0FExB2.js";import"./date-picker-DKItmH8g.js";import"./error-messages-DQwxQ3pR.js";import"./index-DHHCfnS1.js";import"./form-group-B8g8yeM1.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C3FchpV-.js";import"./label-Z58zP1tT.js";import"./modal-Brj4-T_g.js";import"./process-list-Cc3I22IW.js";import"./radio-button-5YXeP0HL.js";import"./range-slider-DIrxMbkG.js";import"./search-ePFsEUvt.js";import"./select-DJU_fcta.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-0hF62P37.js";import"./step-indicator-Bk8eT84t.js";import"./summary-box-B38BLNY4.js";import"./tag-CLDP7JT-.js";import"./text-area-C2UJ0jwX.js";import"./time-picker-CotNdUu4.js";import"./tooltip-BVlyVB0A.js";import"./index-BBTpoaCK.js";import"./iframe-BZfy-MOI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHvMlG60.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4iV9IVu.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
