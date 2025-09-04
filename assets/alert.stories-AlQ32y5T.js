import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./table-BlnceWZT.js";import"./banner-DdYHPnzv.js";import"./button-M0p4z2np.js";import"./button-group-CTzsh1Qs.js";import"./checkbox-BLWy1ewy.js";import"./combo-box-DAnMy2Zd.js";import"./date-picker-BinjPKZk.js";import"./error-messages-_lA7co94.js";import"./index-DHy8gSfp.js";import"./form-group-DN1OID7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-ooEVvdPp.js";import"./label-0qqEdO1f.js";import"./modal-JsDx-7FJ.js";import"./process-list-eg8YhyYR.js";import"./radio-button-CXGOkgST.js";import"./range-slider-BXGET5_y.js";import"./search-B5IuNjKS.js";import"./select-DY3XXkwD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-De5kiDiV.js";import"./step-indicator-lKJzCiiT.js";import"./summary-box-C_2Rbq_I.js";import"./tag-DCGDkX5e.js";import"./text-area-BGhE39VC.js";import"./time-picker-DT7HzhKL.js";import"./tooltip-CLhFKuL2.js";import"./index-DDrUjC2G.js";import"./iframe-DJ-niyiJ.js";import"./index-Ctl6FX5J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-tJEc6IQE.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
