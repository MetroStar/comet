import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-C5ecXiWl.js";import"./banner-CpscEPZS.js";import"./button-CCplqAD4.js";import"./button-group-CBD_PpwK.js";import"./checkbox-DgCQLK4R.js";import"./combo-box-xLPTFQHE.js";import"./date-picker-CVz009oa.js";import"./error-messages-DQwxQ3pR.js";import"./index-BLpbz4XI.js";import"./form-group-DXfMq-IB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DR4j0tBc.js";import"./label-Z58zP1tT.js";import"./modal-DOzHsvEh.js";import"./process-list-CLXtVEns.js";import"./radio-button-DDYqB7cN.js";import"./range-slider-CqZElCAA.js";import"./search-BCF1VKn-.js";import"./select-CEldNHvj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B33QLFtI.js";import"./step-indicator-D6s8wIN1.js";import"./summary-box-DdTvFNeq.js";import"./tag-CawMR5EG.js";import"./text-area-Ccz3oOr5.js";import"./time-picker-BmAckJCq.js";import"./tooltip-CbRrGeME.js";import"./index-D1vcuhlz.js";import"./iframe-CWd_O5TO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BragvABs.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BjWNQafm.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
