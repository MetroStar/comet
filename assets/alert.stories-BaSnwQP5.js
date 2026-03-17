import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-DLVQfNEK.js";import"./banner-DyQAgApN.js";import"./button-BXqyO3L3.js";import"./button-group-ksHkBbPj.js";import"./checkbox-CG93fIg_.js";import"./combo-box-Dw716zwh.js";import"./date-picker-Cbrlz2N3.js";import"./error-messages-DQwxQ3pR.js";import"./index-cm5JWLhR.js";import"./form-group-wymoTdrb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CHlGeBd8.js";import"./label-Z58zP1tT.js";import"./modal-nbn3cjTG.js";import"./process-list-DDsIXP2y.js";import"./radio-button-D3C-_jtH.js";import"./range-slider-CX1O6KiW.js";import"./search-0vzl5eJD.js";import"./select-DwK2wipF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CkTX5cWS.js";import"./step-indicator-PHVEZmUf.js";import"./summary-box-rpKWzcmi.js";import"./tag-BaXE9Fwc.js";import"./text-area-CPIHjsdo.js";import"./time-picker-BjWpsv0Q.js";import"./tooltip-Ck9scKOs.js";import"./index-CeC9og-I.js";import"./iframe-u1rK465H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RV7t3OPq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CiZW3QX2.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
