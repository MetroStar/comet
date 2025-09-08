import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-etSpiK93.js";import"./banner-CWfSVMcQ.js";import"./button-B7pFt37z.js";import"./button-group-BRc77wHK.js";import"./checkbox-CUU9R15H.js";import"./combo-box-BPfnr8Rw.js";import"./date-picker-BMJNX18e.js";import"./error-messages-_lA7co94.js";import"./index-DSCzkK-X.js";import"./form-group-DkPWxlhw.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTBvyvH7.js";import"./label-0qqEdO1f.js";import"./modal-CKRHOoEv.js";import"./process-list-BZIxW3s3.js";import"./radio-button-Buv9cRjs.js";import"./range-slider-CxFZvE3_.js";import"./search-cT6P9tE4.js";import"./select-BNqncbBi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ovEs71ou.js";import"./step-indicator-CW9DACn5.js";import"./summary-box-DHtf9G_9.js";import"./tag-d3bWREuo.js";import"./text-area-CYy6almf.js";import"./time-picker-CEE4fWkk.js";import"./tooltip-DzncSK4y.js";import"./index-BAh54tqx.js";import"./iframe-3nCC7gWt.js";import"./index-C-EJdkFK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-l_I2nizS.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
