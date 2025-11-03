import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-SJRpy6TF.js";import"./banner-DKvHUpFc.js";import"./button-Co8dLuMH.js";import"./button-group-CsV4n4S0.js";import"./checkbox-BgEEI_GS.js";import"./combo-box-CkAo5f6g.js";import"./date-picker-ChpWtyOR.js";import"./error-messages-_lA7co94.js";import"./index-tY_h3Y9E.js";import"./form-group-DLQEuROg.js";import"./helper-text-BRA2CuHl.js";import"./icon-CQoY4QYS.js";import"./label-0qqEdO1f.js";import"./modal-COkJuVMB.js";import"./process-list-DF-yjf2Q.js";import"./radio-button-BKRS0NMa.js";import"./range-slider-7S54eZrE.js";import"./search-Cnde9Nqy.js";import"./select-byDVf-8O.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Baj4Nh5d.js";import"./step-indicator-yzWIyMqI.js";import"./summary-box-CWWkQxQT.js";import"./tag-B7uUqTnf.js";import"./text-area-DFlZYgWg.js";import"./time-picker-XAcq8nAQ.js";import"./tooltip-CRmdnTdO.js";import"./index-l37dtnHA.js";import"./iframe-DKZDQxow.js";import"./index-Df-QuvC-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxjvmrCa.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
