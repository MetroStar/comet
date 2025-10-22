import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-lkz4hOMD.js";import"./banner-Ig5f_ff_.js";import"./button-ByaPeP45.js";import"./button-group-BYLDb9dK.js";import"./checkbox-Bx0i06cV.js";import"./combo-box-CYlMeI46.js";import"./date-picker-Bfyv2fVt.js";import"./error-messages-_lA7co94.js";import"./index-Bj3PxKMc.js";import"./form-group-CZMC42k8.js";import"./helper-text-BRA2CuHl.js";import"./icon-qxS9RIgY.js";import"./label-0qqEdO1f.js";import"./modal-DHbPHUzb.js";import"./process-list-CdCHmAIf.js";import"./radio-button-BCFO0GZX.js";import"./range-slider-CLdCU-10.js";import"./search-DxDEgAvO.js";import"./select-BgcnNTUP.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-6hTBLbFk.js";import"./step-indicator-DVqdwgVq.js";import"./summary-box-C1sGnI8z.js";import"./tag-BtjAR3XH.js";import"./text-area-CY6IMMmT.js";import"./time-picker-CDjYCY_5.js";import"./tooltip-BpJC97gU.js";import"./index-BgC3XmV1.js";import"./iframe-BDLZuKeY.js";import"./index-BC9Je7_j.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BY9Gf3eC.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,N as __namedExportsOrder,M as default};
