import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-D8h51JS1.js";import"./banner-DCDmr0G8.js";import"./button-ijgBrMFA.js";import"./button-group-B0UmdrOD.js";import"./checkbox-C11XdatN.js";import"./combo-box-ByBwJrwY.js";import"./date-picker-yq7UOVP1.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW_M1et5.js";import"./form-group-D1HeFVB2.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D34rc_xL.js";import"./label-Z58zP1tT.js";import"./modal-QVZYOgd8.js";import"./process-list-BuU7wWlY.js";import"./radio-button-DyalhMhA.js";import"./range-slider-C1FbPf95.js";import"./search-D1Ve7K6E.js";import"./select-D496jgZF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CHUyH9R-.js";import"./step-indicator-A5ivSDeW.js";import"./summary-box-CXscmp-j.js";import"./tag-BqbH648p.js";import"./text-area-CsLFuSaj.js";import"./time-picker-CpqDNJ7b.js";import"./tooltip-DPDnsQ2S.js";import"./index-Bb_jRSga.js";import"./iframe-DAElSkcd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpyczfRn.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CD1kXvG_.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
