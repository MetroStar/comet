import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-C1RLpG-G.js";import"./banner-DH6QgulV.js";import"./button-Db3wJyCy.js";import"./button-group-BulGe28K.js";import"./checkbox-BaI_YfOl.js";import"./combo-box-Dv1PMtXX.js";import"./date-picker-xedVW46W.js";import"./error-messages-DQwxQ3pR.js";import"./index-fFA3JtzK.js";import"./form-group-BJHd_lpP.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D0rONDc8.js";import"./label-Z58zP1tT.js";import"./modal-Dm0WuDuZ.js";import"./process-list-lqJb71JE.js";import"./radio-button-BpLLDlkk.js";import"./range-slider-BlBZgRTH.js";import"./search-CJ_zW23S.js";import"./select-_nNbbpjO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BtL5UUxM.js";import"./step-indicator-CLKds4-I.js";import"./summary-box-Crr76biK.js";import"./tag-CdXv5j6I.js";import"./text-area-CE2uSnwT.js";import"./time-picker-Dho_ucHb.js";import"./tooltip-Cy1CeqH9.js";import"./index-CDjQvKj7.js";import"./iframe-DmczAETD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Duk1BxEa.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C9EfC_2_.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
