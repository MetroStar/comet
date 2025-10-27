import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-CTHJRurc.js";import"./banner-BpjHpRyz.js";import"./button-CEdaOz0v.js";import"./button-group-DPUcNWat.js";import"./checkbox-CeDcbjZa.js";import"./combo-box-Df2_U8wx.js";import"./date-picker-D-VCXnPA.js";import"./error-messages-_lA7co94.js";import"./index-CLsMeELU.js";import"./form-group-N2izWhMO.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8iiNzoR.js";import"./label-0qqEdO1f.js";import"./modal-DsQx7LhB.js";import"./process-list-lglvHysC.js";import"./radio-button-C9zE0qcx.js";import"./range-slider-BzcdN58g.js";import"./search-DCqu2wfv.js";import"./select-sAGlyFDv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Ba8esuHl.js";import"./step-indicator-DYwCyK75.js";import"./summary-box-DCFq3_YR.js";import"./tag-BWyj0ide.js";import"./text-area-Z6rUOkKh.js";import"./time-picker-CakTvnCc.js";import"./tooltip-I7dpAhOi.js";import"./index-BIsXNuh7.js";import"./iframe-DwbOoiOR.js";import"./index-CJmWpGmW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DweQinfd.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
