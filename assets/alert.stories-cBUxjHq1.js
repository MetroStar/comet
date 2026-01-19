import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Bl7Y-jHs.js";import"./banner-ByijTyXR.js";import"./button-BvDTT6fN.js";import"./button-group-DawoTUXk.js";import"./checkbox-DGKA9YCH.js";import"./combo-box-BxSvOq4M.js";import"./date-picker-hbP6XtI6.js";import"./error-messages-DQwxQ3pR.js";import"./index-awo_DVbo.js";import"./form-group-DxuCwoil.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DzaDF0tY.js";import"./label-Z58zP1tT.js";import"./modal-CdiObuoV.js";import"./process-list-CEfxPAJX.js";import"./radio-button-CQhC1dHP.js";import"./range-slider-CqCUYOdR.js";import"./search-DxnADgBP.js";import"./select-CzSkEtcT.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-xyfAWu0c.js";import"./step-indicator-CpGNsveB.js";import"./summary-box-BGlLSB41.js";import"./tag-BdHPqSov.js";import"./text-area-55osgg6i.js";import"./time-picker-Dw7X9sI8.js";import"./tooltip-D6haW_oM.js";import"./index-DieJCJBc.js";import"./iframe-E8fts5wg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmTx8Cep.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSicFjZZ.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
