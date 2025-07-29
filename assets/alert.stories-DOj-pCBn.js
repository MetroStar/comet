import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CFZe1oZk.js";import"./banner-C0iRi7lY.js";import"./button-EjrCymmn.js";import"./button-group-B45KQgZo.js";import"./checkbox-BTDbXMs9.js";import"./combo-box-PCieNkZt.js";import"./date-picker-DD5vN0l4.js";import"./error-messages-_lA7co94.js";import"./index-DXpWHD9X.js";import"./form-group-DXBWy_5J.js";import"./helper-text-BRA2CuHl.js";import"./icon-BAmAFE3F.js";import"./label-0qqEdO1f.js";import"./modal-BaXUXORU.js";import"./process-list-Bes59W1_.js";import"./radio-button-Cg7so58a.js";import"./range-slider-DMLTBef-.js";import"./search-CemhTU5F.js";import"./select-DONnmCi2.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ChVoEick.js";import"./step-indicator-BtFe2dBb.js";import"./summary-box-DtlSzkaU.js";import"./tag-DmV8dUk0.js";import"./text-area-z3x7pbPL.js";import"./time-picker-BiDHUfm5.js";import"./tooltip-C3AqG2BR.js";import"./index-DF9socu3.js";import"./iframe-Bj_WYFuV.js";import"./index-zqKFCB0Q.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-FZjDNhBr.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
