import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DJk-XhMn.js";import"./banner-753k4wS4.js";import"./button-Zp2H4Y6h.js";import"./button-group-C2O7PpJm.js";import"./checkbox-BgWuR-IY.js";import"./combo-box-CihLQ5-J.js";import"./date-picker-tZBs_O5G.js";import"./error-messages-DQwxQ3pR.js";import"./index-CUBRylId.js";import"./form-group-BhQwpRkB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7X0n4qy.js";import"./label-Z58zP1tT.js";import"./modal-BJk45PfD.js";import"./process-list-DZl8MoFR.js";import"./radio-button-CbVGWSxw.js";import"./range-slider-CuyjuimZ.js";import"./search-CxOU0G1I.js";import"./select-dXE1vA8A.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CgJkBig9.js";import"./step-indicator-CMG5DhXp.js";import"./summary-box-BIDD5Ly5.js";import"./tag-DG7R--Z-.js";import"./text-area-DopYU4uh.js";import"./time-picker-C_yvhzgf.js";import"./tooltip-DCRG7Dm3.js";import"./index-Cthlo8g0.js";import"./iframe-CBTPnINx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmdtenRm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BTJpA1Cv.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
