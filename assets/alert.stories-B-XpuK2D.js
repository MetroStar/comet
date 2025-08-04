import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-DEpAyD-X.js";import"./banner-CIEAiagf.js";import"./button-CkmPZfQ7.js";import"./button-group-BLfN6Qzi.js";import"./checkbox-CiZ0LQAf.js";import"./combo-box-CPoxHoLO.js";import"./date-picker-1x-RJkWC.js";import"./error-messages-_lA7co94.js";import"./index-DV0osu16.js";import"./form-group-CLG5AUFS.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaCh6IKn.js";import"./label-0qqEdO1f.js";import"./modal-CS74MdwY.js";import"./process-list-EgDY_ZW-.js";import"./radio-button-BojC1or9.js";import"./range-slider-Crd-k5Lz.js";import"./search-BosVVfA0.js";import"./select-BK3H334u.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DqRkn5Co.js";import"./step-indicator-v3Vvymes.js";import"./summary-box-B2UM3Fmg.js";import"./tag-D2rL-ia4.js";import"./text-area-BkFw3Hdn.js";import"./time-picker-Btaj1Wdb.js";import"./tooltip-BnWcB7Kc.js";import"./index-BV__WvX7.js";import"./iframe-U5vUr3EP.js";import"./index-Bp6jiaQq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7-aAo-x.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
