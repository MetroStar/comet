import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-DIHhYBqi.js";import"./banner-BYkWT2yo.js";import"./button-BM9ySSKU.js";import"./button-group-DU9juRoB.js";import"./checkbox-dNYLELqw.js";import"./combo-box-CHVKASnX.js";import"./date-picker-uce4V5Q-.js";import"./error-messages-_lA7co94.js";import"./index-0g5umDOB.js";import"./form-group-4Q-7eSNv.js";import"./helper-text-BRA2CuHl.js";import"./icon-CtIVt_oZ.js";import"./label-0qqEdO1f.js";import"./modal-DrcG8wOg.js";import"./process-list-EXQTzVQ3.js";import"./radio-button-BVtP_EQo.js";import"./range-slider-CTiTwWqV.js";import"./search-BwhliTvO.js";import"./select-DYcwYXed.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-WbV2iWNK.js";import"./step-indicator-D5cV-W6H.js";import"./summary-box-Bg6bY0XI.js";import"./tag-BPJ1eWEF.js";import"./text-area-Dy8zqNTA.js";import"./time-picker-DKBMRE3N.js";import"./tooltip-R4OwE2Lf.js";import"./index-Bd3YalL3.js";import"./iframe-BXvGn3Ww.js";import"./index-hWEVF2Mq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DPJweXc7.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
