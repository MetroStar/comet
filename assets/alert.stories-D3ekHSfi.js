import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DoweFw58.js";import"./banner-DCAwis5j.js";import"./button-7RovM-Qw.js";import"./button-group-kghJkCVA.js";import"./checkbox-CFTS5l4Y.js";import"./combo-box-CE7KR71Q.js";import"./date-picker-CcHVpChK.js";import"./error-messages-DQwxQ3pR.js";import"./index-C9NoWFmt.js";import"./form-group-Dbsx7Gzo.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cygb0suf.js";import"./label-Z58zP1tT.js";import"./modal-BLZk1Mde.js";import"./process-list-Bo_blzCt.js";import"./radio-button-BxTZPhjK.js";import"./range-slider-8FINxcyX.js";import"./search-BKhtnkhS.js";import"./select-BZa46iHj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-fOh-sxzm.js";import"./step-indicator-DhVcUGb2.js";import"./summary-box-Jxgcj2fM.js";import"./tag-BiIxnUsz.js";import"./text-area-B1NVmLHg.js";import"./time-picker-j2c1grgt.js";import"./tooltip-BBY_kcQ_.js";import"./index-BUrzLQmc.js";import"./iframe-BUmp4v9P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj6Y9BYB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYQJJsbO.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
