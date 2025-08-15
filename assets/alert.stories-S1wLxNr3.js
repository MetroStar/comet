import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CEC6VR9e.js";import"./banner-BkIJS_6z.js";import"./button-Cz7RgtoX.js";import"./button-group-Bv-TDQ2J.js";import"./checkbox-Bb6cbyCa.js";import"./combo-box-QTBgiBcd.js";import"./date-picker-k5bZck_k.js";import"./error-messages-_lA7co94.js";import"./index-DHOAzmtN.js";import"./form-group-BWHxpag0.js";import"./helper-text-BRA2CuHl.js";import"./icon-CltekIt2.js";import"./label-0qqEdO1f.js";import"./modal-CDqm1nCU.js";import"./process-list-DEBo6nte.js";import"./radio-button-CKLsf2Y8.js";import"./range-slider-BVh0FSE4.js";import"./search-SVFGc8u5.js";import"./select-VUMvBmOF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BFo_LLtW.js";import"./step-indicator-DhkvXvbl.js";import"./summary-box-BDJ68lGd.js";import"./tag-BwQanvXK.js";import"./text-area-Ce8nxo5M.js";import"./time-picker-C8zu-Q1o.js";import"./tooltip-DeexD_cA.js";import"./index-D82vRiCQ.js";import"./iframe-B2NCm2Rb.js";import"./index-C-iG_L9p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Mg8z5oX4.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
