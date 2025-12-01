import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Hzj3yCl4.js";import"./banner-BM68dEEY.js";import"./button-CAdIHhr5.js";import"./button-group-B9dZJN23.js";import"./checkbox-CyHFcZFX.js";import"./combo-box-CtcodrSH.js";import"./date-picker-D-9P-Y26.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVEhI-RK.js";import"./form-group-xZ43lr12.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIOfJG2o.js";import"./label-Z58zP1tT.js";import"./modal-DmgRvfLd.js";import"./process-list-B5mxUUsY.js";import"./radio-button-BjMGGsE7.js";import"./range-slider-DC0X_owM.js";import"./search-BGfPHDPn.js";import"./select-DkyaY8B2.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DVYJRvZP.js";import"./step-indicator-DBhmaTHM.js";import"./summary-box-Bfah1ntm.js";import"./tag-BfPPkP3z.js";import"./text-area-DGQ6Eimz.js";import"./time-picker-DDH8YCye.js";import"./tooltip-BgKzB3lI.js";import"./index-B1cA9pBl.js";import"./iframe-y5ok3I9y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhulT-dX.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DMAFzJVB.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
