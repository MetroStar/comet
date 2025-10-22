import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BClhlT0z.js";import"./banner-CzkaGaVP.js";import"./button-DU2pOzuh.js";import"./button-group-CnynISiL.js";import"./checkbox-Cb6FxYwq.js";import"./combo-box-qh64P4iq.js";import"./date-picker-DHhq89_1.js";import"./error-messages-_lA7co94.js";import"./index-BlvOJwI9.js";import"./form-group-B80SdfXj.js";import"./helper-text-BRA2CuHl.js";import"./icon-CF9rid26.js";import"./label-0qqEdO1f.js";import"./modal-BguBK0_s.js";import"./process-list-BuGmR-8F.js";import"./radio-button-ON0RGceu.js";import"./range-slider-BoVWNUy0.js";import"./search-ClnHZvP6.js";import"./select-C4g0Dhmi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEXzN5iU.js";import"./step-indicator-h0VWgyZg.js";import"./summary-box-Hwd2puDo.js";import"./tag-BMw6NXFS.js";import"./text-area-Ltx5Xw97.js";import"./time-picker-4nej8pOD.js";import"./tooltip-B9Y8zZao.js";import"./index-0XD21YYW.js";import"./iframe-Ca0L-wZx.js";import"./index-NMaxshBa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0mqKmh-.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
