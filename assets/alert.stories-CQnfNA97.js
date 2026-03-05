import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BkcizWb6.js";import"./banner-DweQbrQc.js";import"./button-XBMUcWoC.js";import"./button-group-BrIUjRCR.js";import"./checkbox-BvZeZHtM.js";import"./combo-box-Bj433j_h.js";import"./date-picker-z6Q7eOM2.js";import"./error-messages-DQwxQ3pR.js";import"./index-Cnn-YZcV.js";import"./form-group-CG_NYfoS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cc1dzDtb.js";import"./label-Z58zP1tT.js";import"./modal-Cpe_cfLH.js";import"./process-list-CvTJfKYq.js";import"./radio-button-DUmMrbPy.js";import"./range-slider-gxORhVag.js";import"./search-NuBoJI84.js";import"./select-Bzt55IHF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CxJW4m1g.js";import"./step-indicator-BDNx4Eop.js";import"./summary-box-CpxqpbYb.js";import"./tag-CbEMar7b.js";import"./text-area-blUsZJJZ.js";import"./time-picker-CtBf-17B.js";import"./tooltip-BwdNh6of.js";import"./index-oP94_y1q.js";import"./iframe-DZGaHezm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oFd3Ri_j.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dv1nB6qQ.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
