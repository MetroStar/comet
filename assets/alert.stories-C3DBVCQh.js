import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-C1T_Hy-L.js";import"./banner-DO5hvgnM.js";import"./button-XgcnM0uG.js";import"./button-group-CvPdpJzo.js";import"./checkbox-B3YkBqWl.js";import"./combo-box-WfySd2Em.js";import"./date-picker-CT6uOhvT.js";import"./error-messages-_lA7co94.js";import"./index-CmTLF3eZ.js";import"./form-group-oS_-cAgG.js";import"./helper-text-BRA2CuHl.js";import"./icon-CMaK07ig.js";import"./label-0qqEdO1f.js";import"./modal-CXY4gmYy.js";import"./process-list-zlPAdYXT.js";import"./radio-button-C1coLMFg.js";import"./range-slider-CkEeCFda.js";import"./search-DpDw9Dfe.js";import"./select-DnxPJAIv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-hoOHyEsx.js";import"./step-indicator-DVrqYPba.js";import"./summary-box-CeIzJN4S.js";import"./tag-CQumEc23.js";import"./text-area-DgYVSH4W.js";import"./time-picker-CUgQjvfO.js";import"./tooltip-Dltimqdy.js";import"./index-DJxORCHa.js";import"./iframe-CCJFRkb0.js";import"./index-MnkQOSnn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DIfjoeEk.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
