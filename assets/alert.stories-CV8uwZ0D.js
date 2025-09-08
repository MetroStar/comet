import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-Bj-ieh0N.js";import"./banner-DHXPmgHt.js";import"./button-WXiSigBI.js";import"./button-group-C3Md5rMb.js";import"./checkbox-v0CmJ0fV.js";import"./combo-box-D6E53Ltn.js";import"./date-picker-CjxICpbw.js";import"./error-messages-_lA7co94.js";import"./index-8sAm4bIA.js";import"./form-group-U4i5E8Pz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DLRFSs-D.js";import"./label-0qqEdO1f.js";import"./modal-DuZBzutb.js";import"./process-list-BZY3uAyG.js";import"./radio-button-e8GAg1jo.js";import"./range-slider-C2gAsZFm.js";import"./search-DtK5-wbC.js";import"./select-IwB_nyID.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprknOUj.js";import"./step-indicator-DOOfVLKw.js";import"./summary-box-Bv21eHgr.js";import"./tag-3iSrbP2k.js";import"./text-area-49zULSyA.js";import"./time-picker-Cw7BpC7A.js";import"./tooltip-BYVxI0PO.js";import"./index-tsUwO6kK.js";import"./iframe-TQQq_xwn.js";import"./index-qCMx_cnb.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xQGsZq0x.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
