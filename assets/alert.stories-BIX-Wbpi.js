import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Jdby6yUG.js";import"./banner-BWHtyq-w.js";import"./button-3Al1XHOg.js";import"./button-group-9moZSAQG.js";import"./checkbox-CpUjSfgW.js";import"./combo-box-Dl-TrNTV.js";import"./date-picker-DIlX87w0.js";import"./error-messages-DQwxQ3pR.js";import"./index-4FKgb1wG.js";import"./form-group-C4y5ugcY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DuR14fzr.js";import"./label-Z58zP1tT.js";import"./modal-CMUN3kDG.js";import"./process-list-gG9x1FSY.js";import"./radio-button-DnNdSXMm.js";import"./range-slider-CqSUwkjq.js";import"./search-CN34ZjJJ.js";import"./select-BmtDcZqa.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-6l3hPaFo.js";import"./step-indicator-DfMXXaOj.js";import"./summary-box-Bclcf1zh.js";import"./tag-CehJoHB5.js";import"./text-area-C0-8g27p.js";import"./time-picker-DkLiDCm7.js";import"./tooltip-DdWABcOa.js";import"./index-BaVG5ZPW.js";import"./iframe-Bb0DG7Iv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4l6e6Qu.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJAnig9h.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
