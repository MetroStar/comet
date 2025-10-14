import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-C8360qz1.js";import"./banner-0cQ1VwYA.js";import"./button-BKWxX-Da.js";import"./button-group-0Qrdnekb.js";import"./checkbox-V_TbU8x_.js";import"./combo-box-CWkgIpCj.js";import"./date-picker-OWJbCQWY.js";import"./error-messages-_lA7co94.js";import"./index-BJ28ckkj.js";import"./form-group-ccVGZY8n.js";import"./helper-text-BRA2CuHl.js";import"./icon-BvgBwPFf.js";import"./label-0qqEdO1f.js";import"./modal-Cy6gDfT6.js";import"./process-list-D0b4fxYS.js";import"./radio-button-Debg-0BK.js";import"./range-slider-fW4YPf0L.js";import"./search-DcpVRyol.js";import"./select-BVMgADpF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOYv-Ov_.js";import"./step-indicator-DjwAnxsg.js";import"./summary-box-BPTqOlAt.js";import"./tag-BPwouCyO.js";import"./text-area-mLO4G3tx.js";import"./time-picker-BVLec-T2.js";import"./tooltip-BGDht52a.js";import"./index-DwWsIt9I.js";import"./iframe-DuCqQX56.js";import"./index-CyGskYRl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DuoJpcJJ.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
