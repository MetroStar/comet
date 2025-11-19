import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Bse5DExo.js";import"./banner-BwO0HiA4.js";import"./button-DiHoCjUb.js";import"./button-group-CsEIu6gv.js";import"./checkbox-DC3XQgFH.js";import"./combo-box-CrVnplkd.js";import"./date-picker-ao6BA4Jq.js";import"./error-messages-DQwxQ3pR.js";import"./index-BfIDrPCA.js";import"./form-group-BYOZKLJh.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DPOheGDS.js";import"./label-Z58zP1tT.js";import"./modal-D-P-giTm.js";import"./process-list-BYk2qEP5.js";import"./radio-button-D6dovua3.js";import"./range-slider-BM6BzcML.js";import"./search-O5uHTu-n.js";import"./select-BUCNjJ4o.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DZJPNjAO.js";import"./step-indicator-7qKQZOBY.js";import"./summary-box-D5bHgkv8.js";import"./tag-DXQHCdsJ.js";import"./text-area-DqvxoD8F.js";import"./time-picker-DJ8eVvNZ.js";import"./tooltip-CkP7cUnO.js";import"./index-C0ruH5vH.js";import"./iframe-Cu46YZU-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt3gd5Dn.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dj0TSj9e.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
