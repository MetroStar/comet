import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CJqRdRnA.js";import"./banner-CDze5A-o.js";import"./button-Cfsih1JM.js";import"./button-group-C7oR13Zx.js";import"./checkbox-DdvE8Qv0.js";import"./combo-box-MLHL-BJJ.js";import"./date-picker-CzeDYvZ6.js";import"./error-messages-_lA7co94.js";import"./index-Cd6JFthD.js";import"./form-group-B0crHuAm.js";import"./helper-text-BRA2CuHl.js";import"./icon-_aWJ0mlv.js";import"./label-0qqEdO1f.js";import"./modal-0FNrf6C-.js";import"./process-list-BXqeNRaz.js";import"./radio-button-Nt_CKpgW.js";import"./range-slider-C7Ny-QWb.js";import"./search-KLEJmmQN.js";import"./select-CAlDhwkC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-C3x03OFs.js";import"./step-indicator-CDd_u7Xd.js";import"./summary-box-Bu6NGAGG.js";import"./tag-LtQ0fvOs.js";import"./text-area-DnBgkfMa.js";import"./time-picker-ByDgOAtB.js";import"./tooltip-CA57b6l2.js";import"./index-Sl1xyaxe.js";import"./iframe-B7oP2X8t.js";import"./index-BmmP-Ded.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EhFKVBHe.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
