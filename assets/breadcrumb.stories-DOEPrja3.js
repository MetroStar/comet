import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-SJRpy6TF.js";import"./banner-DKvHUpFc.js";import"./button-Co8dLuMH.js";import"./button-group-CsV4n4S0.js";import"./checkbox-BgEEI_GS.js";import"./combo-box-CkAo5f6g.js";import"./date-picker-ChpWtyOR.js";import"./error-messages-_lA7co94.js";import"./index-tY_h3Y9E.js";import"./form-group-DLQEuROg.js";import"./helper-text-BRA2CuHl.js";import"./icon-CQoY4QYS.js";import"./label-0qqEdO1f.js";import"./modal-COkJuVMB.js";import"./process-list-DF-yjf2Q.js";import"./radio-button-BKRS0NMa.js";import"./range-slider-7S54eZrE.js";import"./search-Cnde9Nqy.js";import"./select-byDVf-8O.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Baj4Nh5d.js";import"./step-indicator-yzWIyMqI.js";import"./summary-box-CWWkQxQT.js";import"./tag-B7uUqTnf.js";import"./text-area-DFlZYgWg.js";import"./time-picker-XAcq8nAQ.js";import"./tooltip-CRmdnTdO.js";import"./index-l37dtnHA.js";import"./iframe-DKZDQxow.js";import"./index-Df-QuvC-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxjvmrCa.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
