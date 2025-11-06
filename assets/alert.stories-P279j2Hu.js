import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CvmPfSUC.js";import"./banner-BwEE1fCf.js";import"./button-DnGnzYJl.js";import"./button-group-LTdk4OWd.js";import"./checkbox-e4Y_ckhj.js";import"./combo-box-BaXlIVuK.js";import"./date-picker-DJdBt-9d.js";import"./error-messages-_lA7co94.js";import"./index-BVo_kvWB.js";import"./form-group-8jYj3Y7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-BnuOR3E6.js";import"./label-0qqEdO1f.js";import"./modal-CyphDcoJ.js";import"./process-list-DC0p2f6t.js";import"./radio-button-RU0tDYN1.js";import"./range-slider-CsBLh5Zx.js";import"./search-Di5fDXID.js";import"./select-D7Qnylr_.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CY56Emxt.js";import"./step-indicator-22trubn0.js";import"./summary-box-CVwyDQy5.js";import"./tag-BET6tKi0.js";import"./text-area-DmXx35cn.js";import"./time-picker-CBInagW_.js";import"./tooltip-C_Y0L0LB.js";import"./index-K_UqQySj.js";import"./iframe-BWSz9So8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_fBeR743.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BQL2wJBc.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
