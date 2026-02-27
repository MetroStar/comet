import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-K6yo3B_7.js";import"./banner-BhKBfDyZ.js";import"./button-CPwdRaPa.js";import"./button-group-BKcE8Oav.js";import"./checkbox-BcgY7deo.js";import"./combo-box-C5VUUqkJ.js";import"./date-picker-DZhlg54d.js";import"./error-messages-DQwxQ3pR.js";import"./index-BepEtKgH.js";import"./form-group-B4sEWzNu.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIiwfHXh.js";import"./label-Z58zP1tT.js";import"./modal-Dp7gLss_.js";import"./process-list-CiT4wtBa.js";import"./radio-button-DwmexyD_.js";import"./range-slider-CsIntVkP.js";import"./search-4f5hLwa7.js";import"./select-Btjfsvlm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Drwiv-SO.js";import"./step-indicator-_HVgCI85.js";import"./summary-box-CjgDttnj.js";import"./tag-Dna-t53L.js";import"./text-area-IlAvfY_F.js";import"./time-picker-BwBoa6O0.js";import"./tooltip-CWCAZCBF.js";import"./index-ChQN9uke.js";import"./iframe-D_HOsr8M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJAMUTJ6.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cybot9zD.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
