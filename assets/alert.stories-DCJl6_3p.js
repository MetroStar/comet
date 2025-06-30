import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-PiQKqWot.js";import"./banner-BIUhIOGt.js";import"./button-4POMs2EY.js";import"./button-group-CL3mf8vR.js";import"./checkbox-B5Gt84Lz.js";import"./combo-box-Bct81XLK.js";import"./date-picker-DS9Gxvt9.js";import"./error-messages-pdO9TZPZ.js";import"./index-b9o7Vjy2.js";import"./form-group-D1BkIUNZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-DEIpQ_jd.js";import"./label-0qqEdO1f.js";import"./modal-DZZ04_D2.js";import"./process-list-DJo8omkl.js";import"./radio-button-8NO9pNju.js";import"./range-slider-0gKY5Srp.js";import"./search-FlA3WQtB.js";import"./select-3USV_5y9.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-D7BEF8Gj.js";import"./step-indicator-CeIMTuFn.js";import"./summary-box-CbWSBrtA.js";import"./tag-Cfs8zox1.js";import"./text-area-CJSx7yip.js";import"./time-picker-DI32aVe8.js";import"./tooltip-Fgr-n6X3.js";import"./index-BAkss3hx.js";import"./iframe-YKUTTlTG.js";import"./index-Do0kNAB-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSFFTE0I.js";import"./active-element-BuxAly_Z.js";const re={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};var i,n,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,h,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const oe=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,oe as __namedExportsOrder,re as default};
