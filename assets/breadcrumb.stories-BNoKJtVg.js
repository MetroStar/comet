import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-Cq069oLF.js";import"./banner-DMVz3e1o.js";import"./button-nB4XvN_t.js";import"./button-group-amVFX9Mw.js";import"./checkbox-BMD3BsjL.js";import"./combo-box-D-sS-4M1.js";import"./date-picker-BUAVuSMI.js";import"./error-messages-_lA7co94.js";import"./index-BOCy3pWu.js";import"./form-group-BDbcoRKO.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bualwomm.js";import"./label-0qqEdO1f.js";import"./modal-C3INcVR_.js";import"./process-list-DTHC9t3-.js";import"./radio-button-Bf8IedV0.js";import"./range-slider-k8KNCxBU.js";import"./search-DufGuPvN.js";import"./select-B3bCYLzV.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-D7ynWOIW.js";import"./step-indicator-CncyS3oC.js";import"./summary-box-BeKVa36t.js";import"./tag-UEZmNv5X.js";import"./text-area-B42-Clzm.js";import"./time-picker-BlirOEuF.js";import"./tooltip-47OA24e-.js";import"./index-CPNdnnmO.js";import"./iframe-C7-W_WM8.js";import"./index-BcIHhRzX.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-rh0G5RG1.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'breadcrumb-1',
    items: [{
      name: 'Rome',
      path: '/rome'
    }, {
      name: 'Greece',
      path: '/greece'
    }],
    current: 'Italy',
    action
  },
  render: (args: BreadcrumbProps) => <Breadcrumb {...args} />
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'breadcrumb-2',
    current: 'Italy',
    action
  },
  render: (args: BreadcrumbProps) => <Breadcrumb {...args}>
      <BreadcrumbItem name="Rome" path="/rome" action={args.action} />
      <BreadcrumbItem name="Greece" path="/greece" action={args.action} />
    </Breadcrumb>
}`,...t.parameters?.docs?.source}}};const Q=["Default","WithChildren"];export{e as Default,t as WithChildren,Q as __namedExportsOrder,M as default};
