import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DBM-rGfp.js";import"./banner-DIDB5AZZ.js";import"./button-CuJ08vmO.js";import"./button-group-D-MjqxLe.js";import"./checkbox-BxmFBsme.js";import"./combo-box-DUHBtXaj.js";import"./date-picker-BCezd6Bu.js";import"./error-messages-DQwxQ3pR.js";import"./index-aT39rhBA.js";import"./form-group-CvVwrbvR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CB1t2izj.js";import"./label-Z58zP1tT.js";import"./modal-D_ak00hh.js";import"./process-list-CjLrlXdK.js";import"./radio-button-Dk1l3M4e.js";import"./range-slider-ud6TP_Wq.js";import"./search-Bo9VOzvv.js";import"./select-YaEncsiE.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-C1_MfARb.js";import"./step-indicator-BLKVxSQA.js";import"./summary-box-fglBdzAE.js";import"./tag-B1iarCZg.js";import"./text-area-SV8dYrCz.js";import"./time-picker-D6V8Wd0x.js";import"./tooltip-d8p4Ljze.js";import"./index-DO_WIL-g.js";import"./iframe-Bwmg5-4I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsph7FLZ.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-XxeCWWQm.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
