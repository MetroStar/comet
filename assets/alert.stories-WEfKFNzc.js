import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-EA1y5ut-.js";import"./banner-CAGrKBsD.js";import"./button-DSB6x01T.js";import"./button-group-DoUEIhI2.js";import"./checkbox-D92JDoOs.js";import"./combo-box-kv4Zj3ip.js";import"./date-picker-DeOeusIq.js";import"./error-messages-_lA7co94.js";import"./index--PxvN4ag.js";import"./form-group-CNy8DDjE.js";import"./helper-text-BRA2CuHl.js";import"./icon-CoTVHJHi.js";import"./label-0qqEdO1f.js";import"./modal-BKK3aVOm.js";import"./process-list-B2W3GOc_.js";import"./radio-button-CRka0rgF.js";import"./range-slider-DEZb4C9L.js";import"./search-BMOfAqqA.js";import"./select-D3GcbaQv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEaHIX6K.js";import"./step-indicator-KzAYTCs1.js";import"./summary-box-sEgleKYK.js";import"./tag-BRlHQhP2.js";import"./text-area-Dq7PS0lJ.js";import"./time-picker-qN-3jLPm.js";import"./tooltip-C6MBNeTd.js";import"./index-BrLkV3m_.js";import"./iframe-C46Q6aS9.js";import"./index-CqwsvFH3.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BlqFUN-c.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
