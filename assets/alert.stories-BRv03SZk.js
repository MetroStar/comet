import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Cof7Ljxw.js";import"./banner-DZ0ebqlp.js";import"./button-mFolkgwz.js";import"./button-group-CsdMoKMD.js";import"./checkbox-BQ-bjBr7.js";import"./combo-box-QWTBgS1h.js";import"./date-picker-CEhy0WXY.js";import"./error-messages-DQwxQ3pR.js";import"./index-C5OTqaeq.js";import"./form-group-ioiVrL2h.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DN8sM9dv.js";import"./label-Z58zP1tT.js";import"./modal-eBwykmDT.js";import"./process-list-Dusstfuy.js";import"./radio-button-CAASPgna.js";import"./range-slider-CL6e4st8.js";import"./search-CK-e7ALh.js";import"./select-hgIVHsJi.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B4EcsSpo.js";import"./step-indicator-BeUZnxYe.js";import"./summary-box-DvvAlmYA.js";import"./tag-BHLVfqLG.js";import"./text-area-oJoyGoaw.js";import"./time-picker-t8bSILu6.js";import"./tooltip-CCcZSQT3.js";import"./index-CcYm8E6G.js";import"./iframe-Qm5GmbtS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF68Yrx3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-c7glwd7z.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
