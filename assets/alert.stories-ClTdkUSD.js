import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Bar13plf.js";import"./banner-DbFUAhNG.js";import"./button-ffGbt_Ww.js";import"./button-group-BaU0kfnO.js";import"./checkbox-BZKoH8WH.js";import"./combo-box-DN8WGebT.js";import"./date-picker-UahoSx6W.js";import"./error-messages-DQwxQ3pR.js";import"./index-CcVn3sHa.js";import"./form-group-CS7jclOy.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CSGERsm9.js";import"./label-Z58zP1tT.js";import"./modal-B6MEUZgO.js";import"./process-list-C1-6C-U2.js";import"./radio-button-D0M8jQtJ.js";import"./range-slider-CzZDIB_7.js";import"./search-BYXCCPZR.js";import"./select-DhAAD6zD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CjKb598A.js";import"./step-indicator-BLj_ZoPZ.js";import"./summary-box-CKMaVeZ4.js";import"./tag-BOa7e9QQ.js";import"./text-area-Bl1HSWIL.js";import"./time-picker-BROe3EpJ.js";import"./tooltip-ZrQjdNc3.js";import"./index-CiqF2SW8.js";import"./iframe-CBeyx4WF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uAYjUUGB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-aiAaYu5C.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
