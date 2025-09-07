import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BWWVeaG9.js";import"./banner-BoULXacJ.js";import"./button-CQKw_ArU.js";import"./button-group-ewBVF2L4.js";import"./checkbox-BjvifG72.js";import"./combo-box-aN6JnhWz.js";import"./date-picker-C67rITtz.js";import"./error-messages-_lA7co94.js";import"./index-C2_xkeJc.js";import"./form-group-BkBVLNH5.js";import"./helper-text-BRA2CuHl.js";import"./icon-R8YJ2BOW.js";import"./label-0qqEdO1f.js";import"./modal-Bv-vzx9w.js";import"./process-list-BcXx8fgu.js";import"./radio-button-CTioDZzo.js";import"./range-slider-6N7k_X-x.js";import"./search-NPEc2I-5.js";import"./select-BXK56c5V.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DLvb7ydC.js";import"./step-indicator-BJVp4xKi.js";import"./summary-box-hknuY5Lx.js";import"./tag-D_domJr-.js";import"./text-area-BLWxRhg4.js";import"./time-picker-CBvJt52P.js";import"./tooltip-BhXbaBUJ.js";import"./index-Bqv6EQsX.js";import"./iframe-BgblZ3Ci.js";import"./index-BJS_Wybf.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-zF2YK1WT.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
