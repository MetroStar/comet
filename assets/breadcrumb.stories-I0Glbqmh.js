import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-DdVOCvYZ.js";import"./banner-DQMHi-aW.js";import"./button-DI5qMgFe.js";import"./button-group-CsmqFrP1.js";import"./checkbox-PjFvKvpp.js";import"./combo-box-B2haW5dU.js";import"./date-picker-BIPhfaAN.js";import"./error-messages-_lA7co94.js";import"./index-j0ODhhQa.js";import"./form-group-BqN9ZsX3.js";import"./helper-text-BRA2CuHl.js";import"./icon-CufaamKb.js";import"./label-0qqEdO1f.js";import"./modal-BZ7djAFQ.js";import"./process-list-DMfh53jt.js";import"./radio-button-BE7ko7w4.js";import"./range-slider-DHVUPffB.js";import"./search-CArZRBWZ.js";import"./select-6paA5eWu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-E2RY7NFc.js";import"./step-indicator-DmrnODcm.js";import"./summary-box-DYsEWNiy.js";import"./tag-C21wbAG6.js";import"./text-area-BloRP6vR.js";import"./time-picker-BCDXAFpJ.js";import"./tooltip-BfeS9RUy.js";import"./index-BwND8XNc.js";import"./iframe-ZYripNYc.js";import"./index-C-nO5zU_.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOTlr87W.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
