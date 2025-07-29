import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-Bb6U9UN-.js";import"./banner-9IEHsLzf.js";import"./button-B2zgU3gw.js";import"./button-group-CuV8b-Jt.js";import"./checkbox-BEI5JEAd.js";import"./combo-box-CQxpp1rn.js";import"./date-picker-BwF3ZQWf.js";import"./error-messages-_lA7co94.js";import"./index-B2IyjUDW.js";import"./form-group-D7o0mHcs.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDMZOkTr.js";import"./label-0qqEdO1f.js";import"./modal-BWU4uOwE.js";import"./process-list-DLQVUbiM.js";import"./radio-button-DiQ8zHvZ.js";import"./range-slider-B1JHoTLM.js";import"./search-Dzffyc8z.js";import"./select-neAeqmJy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BC3cl4Xt.js";import"./step-indicator-DLuCjkFb.js";import"./summary-box-DTZd7klS.js";import"./tag-DN6lamzf.js";import"./text-area-DOXKJPbL.js";import"./time-picker-B4nbaApt.js";import"./tooltip-BnEISZxP.js";import"./index-CprWhq2V.js";import"./iframe-BYzdcdZ1.js";import"./index-CxoXSAzG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DgAcE3a1.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
