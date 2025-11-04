import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BkSI5mbc.js";import"./banner-CTZ2PdPw.js";import"./button-CsYmh0vm.js";import"./button-group-BPJ6fggK.js";import"./checkbox-DhCPixBd.js";import"./combo-box-BXgqhUEs.js";import"./date-picker-C9E8UeDk.js";import"./error-messages-_lA7co94.js";import"./index-CI7UOko6.js";import"./form-group-CCYs-ltk.js";import"./helper-text-BRA2CuHl.js";import"./icon-GNqBduXf.js";import"./label-0qqEdO1f.js";import"./modal-dzF0TLRm.js";import"./process-list-Dq101AFb.js";import"./radio-button-Do9Rh2zd.js";import"./range-slider-B5r5rPxC.js";import"./search-DhE-ggo7.js";import"./select-1e1qJ9Ro.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-W4oZm-Rd.js";import"./step-indicator-DSv3EHu1.js";import"./summary-box-BS8sVZlh.js";import"./tag-Cq7MI9LS.js";import"./text-area-DviweLtB.js";import"./time-picker-SOqVqpwV.js";import"./tooltip-CWN-T5j-.js";import"./index-ByTD_-5Y.js";import"./iframe-CCHYt90f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7-mVSiM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DNXJughs.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
