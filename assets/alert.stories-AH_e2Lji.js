import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-D6PxWkEz.js";import"./banner-5PnvCMeN.js";import"./button-C6DDMlzm.js";import"./button-group-D2NUrE1E.js";import"./checkbox-97CiXItc.js";import"./combo-box-CqKpeFyZ.js";import"./date-picker-9XfVeNZj.js";import"./error-messages-_lA7co94.js";import"./index-Dc5iOzpo.js";import"./form-group-C37VFKvz.js";import"./helper-text-BRA2CuHl.js";import"./icon-ldTZd2PJ.js";import"./label-0qqEdO1f.js";import"./modal-CLRIHiE2.js";import"./process-list-Dv3imPAG.js";import"./radio-button-CQt1YoIZ.js";import"./range-slider-CnELvyde.js";import"./search-CYLnDm6f.js";import"./select-g8Uw7pfh.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CBI-9iTh.js";import"./step-indicator-C3Nqgbfm.js";import"./summary-box-D4YHkNEC.js";import"./tag-DrpHvKAI.js";import"./text-area-ANeT3eEi.js";import"./time-picker-BphduNSw.js";import"./tooltip-DwNK3jut.js";import"./index-DUKoxV3s.js";import"./iframe-D7rw0kbP.js";import"./index-C9q_5GSN.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-SMKFmbVV.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,N as __namedExportsOrder,M as default};
