import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-COi9ma6z.js";import"./banner-BY97cSax.js";import"./button-CqrPBp8K.js";import"./button-group-CdGkF7WG.js";import"./checkbox-3ChjEf2R.js";import"./combo-box-B6O4vxiK.js";import"./date-picker-Dd9Iw-ol.js";import"./error-messages-_lA7co94.js";import"./index-CE4Qbm93.js";import"./form-group-C2lFXs7K.js";import"./helper-text-BRA2CuHl.js";import"./icon-Eg7KUmam.js";import"./label-0qqEdO1f.js";import"./modal-ByL-yNd7.js";import"./process-list-oXo-lIyy.js";import"./radio-button-C6MUYnX_.js";import"./range-slider-BRFEcZKS.js";import"./search-B58zHbmN.js";import"./select-DOSbCKLB.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BuAtgi14.js";import"./step-indicator-D8MXlKv6.js";import"./summary-box-BxR4roeg.js";import"./tag-CWw6NOTz.js";import"./text-area-d4GYi33a.js";import"./time-picker-CU9bog2Y.js";import"./tooltip-ugUe3fuh.js";import"./index-Cd-en3Xw.js";import"./iframe-BiUBZBi9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L6niw3Vl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Br38tAj3.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","WithChildren"];export{e as Default,t as WithChildren,V as __namedExportsOrder,Q as default};
