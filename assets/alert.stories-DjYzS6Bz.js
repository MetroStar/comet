import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-51YYwGLj.js";import"./banner-Bv_kOqML.js";import"./button-DWw3FYRE.js";import"./button-group-MlieLY4u.js";import"./checkbox-GzGDd-Ma.js";import"./combo-box-20deBagx.js";import"./date-picker-CrM8O4Ke.js";import"./error-messages-DQwxQ3pR.js";import"./index-DthDhu_P.js";import"./form-group-DmuX5GHA.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CckomvKd.js";import"./label-Z58zP1tT.js";import"./modal-Z3r9IjSG.js";import"./process-list-C5K8mXPF.js";import"./radio-button-CITFhXUS.js";import"./range-slider-VxwCY7vw.js";import"./search-CnvNPNSV.js";import"./select-BX7BE1Za.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DvKs5coS.js";import"./step-indicator-VTuD0rEC.js";import"./summary-box-qu0Fij9e.js";import"./tag-DcvZtGBJ.js";import"./text-area-Co4QZweV.js";import"./time-picker-DFYXdFz0.js";import"./tooltip-B9DpSj4U.js";import"./index-2qk3iZ2l.js";import"./iframe-OV6txbM2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6gVjvQv.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D_8CrR66.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
