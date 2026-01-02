import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-luUx04bm.js";import"./banner-D4Eit51W.js";import"./button-DNdCgeu5.js";import"./button-group-BD0JEpF_.js";import"./checkbox-BJ-xYc0N.js";import"./combo-box-DXcbu5I5.js";import"./date-picker-8WhXjeat.js";import"./error-messages-DQwxQ3pR.js";import"./index-D86_PsyH.js";import"./form-group-CX0LVAtq.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DUaH-WVT.js";import"./label-Z58zP1tT.js";import"./modal-B0m6buq3.js";import"./process-list-DpHne8bX.js";import"./radio-button-CWbykzPm.js";import"./range-slider-CT2-RIUa.js";import"./search-D2qakHU1.js";import"./select-CIPD7EMl.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CJCZeBC9.js";import"./step-indicator-yM6dTqmK.js";import"./summary-box-Cp1bfIsu.js";import"./tag-RKDNbzYK.js";import"./text-area-AMxLhMtc.js";import"./time-picker-D42idwCe.js";import"./tooltip-BPlFa0e3.js";import"./index-8gstkWMy.js";import"./iframe-BpOry1Kh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7DyRbAp.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bqk60UQq.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
