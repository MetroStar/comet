import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-_ySZ1kIM.js";import"./banner-DDXVgGyN.js";import"./button-BTS2x0Pt.js";import"./button-group-_vnsl2F_.js";import"./checkbox-DJRaGhmt.js";import"./combo-box-70sdfL1_.js";import"./date-picker-eKStoA0t.js";import"./error-messages-DQwxQ3pR.js";import"./index-80aeHvEm.js";import"./form-group-CWgS9-1Q.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BFPF_o-y.js";import"./label-Z58zP1tT.js";import"./modal-BNXAw0Vh.js";import"./process-list-BbE7PYOl.js";import"./radio-button-DTxW2Np9.js";import"./range-slider-CtaOGn7K.js";import"./search-J78xjvHz.js";import"./select-C7SsP2-G.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-s9UKtouU.js";import"./step-indicator-DdT1SOvY.js";import"./summary-box-D49JJTOM.js";import"./tag-BwLKNIcJ.js";import"./text-area-BH5aI-nX.js";import"./time-picker-BV7NhZs-.js";import"./tooltip-Dw1tkfBR.js";import"./index-DfNGQrnd.js";import"./iframe-Dos1JflN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JGxDgrpx.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BqRRjYiV.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
