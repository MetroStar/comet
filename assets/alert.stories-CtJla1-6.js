import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CX0XI8OP.js";import"./banner-DEXFXyXy.js";import"./button-DsOsdPlp.js";import"./button-group-BUxuG7xu.js";import"./checkbox-YRmx3rM5.js";import"./combo-box-CYgYLg0C.js";import"./date-picker-Cp0WWYQM.js";import"./error-messages-_lA7co94.js";import"./index-DL-q9Ufj.js";import"./form-group-BHvzNZeJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8k-UgI4.js";import"./label-0qqEdO1f.js";import"./modal-6QWAZApx.js";import"./process-list--7pp4Vnj.js";import"./radio-button-DJCCmwa0.js";import"./range-slider-CH4q_Tvm.js";import"./search-C3wHYxvz.js";import"./select-Cn70ITUD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BmH2JWD9.js";import"./step-indicator-BLP1zC9c.js";import"./summary-box-CMVNsm3a.js";import"./tag-DwdL9XNw.js";import"./text-area-8qpd2dPf.js";import"./time-picker-aLWkqh-Q.js";import"./tooltip-CMK8D5V9.js";import"./index-CkzdCw0y.js";import"./iframe-CdEyIkyY.js";import"./index-DnqtVlz1.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dy2RdQ8t.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
