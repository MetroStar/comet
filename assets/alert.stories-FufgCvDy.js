import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BDQM1Mh-.js";import"./banner-LSfpRy_K.js";import"./button-DJ5nAEG1.js";import"./button-group-Dcen566A.js";import"./checkbox-D0U7RwWN.js";import"./combo-box-BfgX98SM.js";import"./date-picker-Du1p9VUj.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW9Wuonm.js";import"./form-group-HfvnDvlG.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZo7BvZV.js";import"./label-Z58zP1tT.js";import"./modal-DYIQgugP.js";import"./process-list-ga9XxOBq.js";import"./radio-button-BGGtbapx.js";import"./range-slider-BFrngnN-.js";import"./search-on2kCCM2.js";import"./select-hFENQz29.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-H-QvbnQk.js";import"./step-indicator-HXg70ZdV.js";import"./summary-box-Dg97T2F4.js";import"./tag-z2XKQvMC.js";import"./text-area-Bmocz1Tg.js";import"./time-picker-jKhXTcgJ.js";import"./tooltip-BvAtgz7H.js";import"./index-BwwyfavA.js";import"./iframe-BHrdwcbC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DW3xBdI_.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BBlPgDhR.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Q=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,Q as __namedExportsOrder,N as default};
