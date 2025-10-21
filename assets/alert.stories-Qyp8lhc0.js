import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CKPPHEB2.js";import"./banner-_ZbGEhIg.js";import"./button-wiBUw2ln.js";import"./button-group-DejK9lhd.js";import"./checkbox-_aoh7e0v.js";import"./combo-box-DYIP3xuD.js";import"./date-picker-B3ZMxbLu.js";import"./error-messages-_lA7co94.js";import"./index-BOGvIYqa.js";import"./form-group-BMhe2Iop.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8n28FoH.js";import"./label-0qqEdO1f.js";import"./modal-CvmAaDMV.js";import"./process-list-y5z1Z_ew.js";import"./radio-button-vMb-nHfq.js";import"./range-slider-H8-mu3pO.js";import"./search-CZaE40pE.js";import"./select-BmIio9K1.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DyJn8dTy.js";import"./step-indicator-LRxRKaHE.js";import"./summary-box-CpUaTIGj.js";import"./tag-BAxMA63-.js";import"./text-area-CCqQJwr3.js";import"./time-picker-Dl6GpAlx.js";import"./tooltip-fJCS9TPh.js";import"./index-BSbYLGkZ.js";import"./iframe-gQpfMxwu.js";import"./index-Dl7XZhpl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C-jQrruZ.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
