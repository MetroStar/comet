import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BNfe135G.js";import"./banner-DPjbFk6x.js";import"./button-C-D3Shbk.js";import"./button-group-BCoHKgA-.js";import"./checkbox-GPYpo4RE.js";import"./combo-box-DUwNofml.js";import"./date-picker-DfAmFoHa.js";import"./error-messages-_lA7co94.js";import"./index-ZT5FrD4g.js";import"./form-group-CiFlcqBa.js";import"./helper-text-BRA2CuHl.js";import"./icon-CbBiLLJ0.js";import"./label-0qqEdO1f.js";import"./modal-Dre79qFw.js";import"./process-list-DJDoVvk0.js";import"./radio-button-C9VBjnj1.js";import"./range-slider-7Gmc7fk2.js";import"./search-CGRST86R.js";import"./select-BP-JJAUc.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dqf_N2g4.js";import"./step-indicator-CsJry-v3.js";import"./summary-box-1CmwUG7w.js";import"./tag-zmEcz-se.js";import"./text-area-C9pHn9jX.js";import"./time-picker-O_U2zYQF.js";import"./tooltip-cZpruF5b.js";import"./index-BECprJbH.js";import"./iframe-DksaedcG.js";import"./index-Bl_X5Dmy.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CmIK2Abd.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
