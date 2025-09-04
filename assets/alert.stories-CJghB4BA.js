import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-4gBBYbnv.js";import"./banner-di6yW5Uz.js";import"./button-DDnj8xdT.js";import"./button-group-DooJ8EU4.js";import"./checkbox-DIKveoyj.js";import"./combo-box-D9fuo9i4.js";import"./date-picker-DHGVSwyc.js";import"./error-messages-_lA7co94.js";import"./index-V3eZre_f.js";import"./form-group-tvOP8ASP.js";import"./helper-text-BRA2CuHl.js";import"./icon-JLyd65NR.js";import"./label-0qqEdO1f.js";import"./modal-BwfPqh08.js";import"./process-list-D_yB08p6.js";import"./radio-button-Prxo-dtn.js";import"./range-slider-QOEJ62F2.js";import"./search-CcFFi-oo.js";import"./select-DR1IqUls.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BRpmzYGQ.js";import"./step-indicator-C-Qfgoa0.js";import"./summary-box-D8962nN0.js";import"./tag-C9O5PIcN.js";import"./text-area-8F6leHVG.js";import"./time-picker-BnnSU-Lp.js";import"./tooltip-C6Xayu_D.js";import"./index-BZNHB8GM.js";import"./iframe-BecLNQGy.js";import"./index-BFAkROmT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-hvX-s2ru.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
