import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-B8FMHg_J.js";import"./banner-BHD4a-YF.js";import"./button-CZnSuiSG.js";import"./button-group-D_3I6eIv.js";import"./checkbox-BlfnrhUV.js";import"./combo-box-CH8ob2Tb.js";import"./date-picker-BRoY0Im-.js";import"./error-messages-_lA7co94.js";import"./index-CJ4Rmd2u.js";import"./form-group-Db87imG5.js";import"./helper-text-BRA2CuHl.js";import"./icon-CjZN-pZP.js";import"./label-0qqEdO1f.js";import"./modal-nc01-4DT.js";import"./process-list-BShwkqsW.js";import"./radio-button-BZ8kNZ3P.js";import"./range-slider-C0Al_MLK.js";import"./search-BuJgjO8M.js";import"./select-PK_HMEM4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B7eMpm6t.js";import"./step-indicator-BTtpkGV8.js";import"./summary-box-CHjfH4Zj.js";import"./tag-Dr4ongqQ.js";import"./text-area-CoOy6seG.js";import"./time-picker-CxHuHVd3.js";import"./tooltip-DF1b6R82.js";import"./index-QkTpvnaW.js";import"./iframe-Bzkq98Jv.js";import"./index-BJjidRwi.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CevKQl2c.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
