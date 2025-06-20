import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-bxCjHSZx.js";import"./banner-CbwhXAQD.js";import"./button-BHx9nyYG.js";import"./button-group-MtHQpuzi.js";import"./checkbox-BVNyjVNb.js";import"./combo-box-D_jHPtwp.js";import"./date-picker-ZAEtRi5O.js";import"./error-messages-pdO9TZPZ.js";import"./index-P5_oBTHH.js";import"./form-group-DM5a2JI_.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaSe7YOL.js";import"./label-0qqEdO1f.js";import"./modal-JtIm4YZx.js";import"./process-list-D0IxfUgS.js";import"./radio-button-sJxkDbLi.js";import"./range-slider-BFpSZ3BL.js";import"./search-DxfwXxES.js";import"./select-DlOsvP9Z.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DQmRsO5O.js";import"./step-indicator-BR8HRLAn.js";import"./summary-box-BHHZZ0U4.js";import"./tag-ka64kxnh.js";import"./text-area-C9GAkIeF.js";import"./time-picker-w1tJYeqO.js";import"./tooltip-Dzefdd_l.js";import"./index-DgVe2x5k.js";import"./iframe-BL1d4o72.js";import"./index-0XBQmG4p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-d7_Brw8T.js";import"./active-element-BuxAly_Z.js";const re={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};var i,n,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
