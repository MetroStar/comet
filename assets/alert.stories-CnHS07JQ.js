import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-DVEIJfEP.js";import"./banner-L_qKzIPP.js";import"./button-DXVMCrjf.js";import"./button-group-CBvnVt9C.js";import"./checkbox-Ddfr57Uw.js";import"./combo-box-CI7x9s1w.js";import"./date-picker-CoWC-1CX.js";import"./error-messages-_lA7co94.js";import"./index-DMq29h7f.js";import"./form-group-DBfTQOoS.js";import"./helper-text-BRA2CuHl.js";import"./icon-CvlDciaN.js";import"./label-0qqEdO1f.js";import"./modal-ClEmu25p.js";import"./process-list--vnKh0Db.js";import"./radio-button-Cj0gMxsy.js";import"./range-slider-BjPol11t.js";import"./search-CNoK7X24.js";import"./select-Db4_XT5f.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dii6R-e4.js";import"./step-indicator-CM1to4bc.js";import"./summary-box-BX_zfgOi.js";import"./tag-D9XQSjDb.js";import"./text-area-BGtrx8-Q.js";import"./time-picker-CgWuxmNu.js";import"./tooltip-Cz_Zx_0T.js";import"./index-B4ubeI7x.js";import"./iframe-C4vNGh7L.js";import"./index-CRJmehm-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DZVpAW7Q.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
