import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BPs16-FG.js";import"./banner-LwyMWt_f.js";import"./button-DzOuhbyX.js";import"./button-group-DYkrmCJV.js";import"./checkbox-DXuqZY3J.js";import"./combo-box-C7iC2mHN.js";import"./date-picker-DVrnKbmB.js";import"./error-messages-DQwxQ3pR.js";import"./index-BqWP0DP-.js";import"./form-group-CqavwUjT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZJuTWWU.js";import"./label-Z58zP1tT.js";import"./modal-Be2O8iTh.js";import"./process-list-COVkMve9.js";import"./radio-button-CTxx2WwS.js";import"./range-slider-D1_yv7oc.js";import"./search-DypyX-qM.js";import"./select-Cp8HWSd0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CmhnIneU.js";import"./step-indicator-BqqEEUy_.js";import"./summary-box-vGIC5NTA.js";import"./tag-CB3TBIup.js";import"./text-area--8jwfK7F.js";import"./time-picker-BxfpYFKH.js";import"./tooltip-DcEE479F.js";import"./index-ByS0UJ_H.js";import"./iframe-Bvnd1wKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tyhn6axX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DBgtOXSw.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
