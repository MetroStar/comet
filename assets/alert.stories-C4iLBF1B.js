import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-MLSJ1qAa.js";import"./banner-CZ791pMQ.js";import"./button-CF9efJMC.js";import"./button-group-CyNdtrB1.js";import"./checkbox-CnbmgKsJ.js";import"./combo-box-BfjGAN3U.js";import"./date-picker-VEt5vO7h.js";import"./error-messages-DQwxQ3pR.js";import"./index-NijndOXy.js";import"./form-group-BczgvB8Y.js";import"./helper-text-C5i0f8Ge.js";import"./icon-w-WB5_9_.js";import"./label-Z58zP1tT.js";import"./modal-sHxpdT3B.js";import"./process-list-BYnHW8RD.js";import"./radio-button-DitFf2If.js";import"./range-slider-Cy-87WO9.js";import"./search-VnOoVJQO.js";import"./select-BzPUx0jF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BRdvMZGO.js";import"./step-indicator-DV3EBP1L.js";import"./summary-box-BkFoCo6H.js";import"./tag-CWjkauZ_.js";import"./text-area-DQz5z8KE.js";import"./time-picker-aqy_O4vE.js";import"./tooltip-CckFkPTI.js";import"./index-BfAW8-H0.js";import"./iframe-BVPKJM18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7O_8YBX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwz56cnG.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
