import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Ydl4yuFa.js";import"./banner-YXUMuJIv.js";import"./button-BXofz8FW.js";import"./button-group-wT7CE2SS.js";import"./checkbox-lDKxywH-.js";import"./combo-box-DEbXvHRM.js";import"./date-picker-EBge1TGV.js";import"./error-messages-DQwxQ3pR.js";import"./index-BwkW8ppQ.js";import"./form-group-CsY8k-GF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-bizhDbD6.js";import"./label-Z58zP1tT.js";import"./modal-DY_daRfu.js";import"./process-list-B87QmEjq.js";import"./radio-button-BUM_kFdV.js";import"./range-slider-CslxIG2u.js";import"./search-BRFeYrNH.js";import"./select-CcFRbJmc.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DTDxIAJf.js";import"./step-indicator-BNbKgUG7.js";import"./summary-box-CRdqISwY.js";import"./tag-DvzQhobB.js";import"./text-area-CO0wGerf.js";import"./time-picker-D_d0pSFG.js";import"./tooltip-P0HHh0Fa.js";import"./index-h9M4Wkah.js";import"./iframe-D2kwuCXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYA2rnwY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-TaCLZyBF.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
