import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BdXERNfX.js";import"./banner-CGSORo_u.js";import"./button-CPtR5gcQ.js";import"./button-group-DhFFAP-Y.js";import"./checkbox-DIPu4W-G.js";import"./combo-box-xrw4u4Io.js";import"./date-picker-DdAbCWL7.js";import"./error-messages-_lA7co94.js";import"./index-CKMVbOyC.js";import"./form-group-BeYI6hSE.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTh2LF1Z.js";import"./label-0qqEdO1f.js";import"./modal-BkSCj_pK.js";import"./process-list-GG4225wz.js";import"./radio-button-DB9WFX5r.js";import"./range-slider-CjiD_4se.js";import"./search-D9RuuV-W.js";import"./select-DGKF5XvH.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-r4FkvNy4.js";import"./step-indicator-C7lNI0IH.js";import"./summary-box-Kko0uUi9.js";import"./tag-swdBJkEH.js";import"./text-area-B21G4oD1.js";import"./time-picker-z2FyGRfL.js";import"./tooltip-BiO4j0Po.js";import"./index-BOcI9Sy8.js";import"./iframe-BlRJQ1-Y.js";import"./index-Croz4O4J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-lROLGhdI.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
