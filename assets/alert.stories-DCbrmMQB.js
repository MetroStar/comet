import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-BdW5CQyz.js";import"./banner-C6irt5yh.js";import"./button-Cq7i4H52.js";import"./button-group-B1vas01y.js";import"./checkbox-D-uCv-kq.js";import"./combo-box-BAn8IQj_.js";import"./date-picker-Cpa9mYFW.js";import"./error-messages-DQwxQ3pR.js";import"./index-BcrKG5Hi.js";import"./form-group-CEqucKs6.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CDSXv68S.js";import"./label-Z58zP1tT.js";import"./modal-CiD3J_dY.js";import"./process-list-DsKEl7ZV.js";import"./radio-button-1b9u9ASV.js";import"./range-slider-1QPLkZfK.js";import"./search-Jk9E_xgr.js";import"./select-CfVwR03_.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-kEI83GIN.js";import"./step-indicator-CECnrlTP.js";import"./summary-box-BTyAB9YR.js";import"./tag-DxN_SjvT.js";import"./text-area-DEutEBFv.js";import"./time-picker-VV5_xO_L.js";import"./tooltip-CynE1fwd.js";import"./index-DDfvyXav.js";import"./iframe-Cdpn9PYs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-De4lQ0Y0.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BRZPKXJE.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
