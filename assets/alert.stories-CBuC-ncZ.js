import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-DN2zX9w5.js";import"./banner-DmybvjyX.js";import"./button-DaVVrHT6.js";import"./button-group-DL1d-oUd.js";import"./checkbox-B95JovIm.js";import"./combo-box-3yuNCmgT.js";import"./date-picker-MXHZCJx-.js";import"./error-messages-_lA7co94.js";import"./index-BSnHZeMx.js";import"./form-group-DBzbMrNY.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTn1fg3T.js";import"./label-0qqEdO1f.js";import"./modal-C9ErPmL0.js";import"./process-list-CxnI2fTS.js";import"./radio-button-BptSw1UH.js";import"./range-slider-BRs7lDMv.js";import"./search-D7OaEWwM.js";import"./select-DBPXSEr4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BrMEkozl.js";import"./step-indicator-BLqJZzSw.js";import"./summary-box-BITmi2EU.js";import"./tag-BQwTgAeY.js";import"./text-area-aL1qtgvL.js";import"./time-picker-PZ_jVo6d.js";import"./tooltip-DqmHi9L2.js";import"./index-CZnHAbqW.js";import"./iframe-DAkoUa8c.js";import"./index-VfhVxxkQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BmV7Pdh3.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
