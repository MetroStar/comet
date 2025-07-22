import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CyrrKNI3.js";import"./banner-BW73H41s.js";import"./button-CPceKQnT.js";import"./button-group-CAnn0_Ku.js";import"./checkbox-BRuIli36.js";import"./combo-box-Bo5WGBqQ.js";import"./date-picker-pMJfSnii.js";import"./error-messages-_lA7co94.js";import"./index-Al5h7hI8.js";import"./form-group-RW_L-8wz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DSHcO3IW.js";import"./label-0qqEdO1f.js";import"./modal-D5wIiW8J.js";import"./process-list-BwBgnQYa.js";import"./radio-button-CUShxS_O.js";import"./range-slider-DyoEvVCi.js";import"./search-BLE9gsW5.js";import"./select-BxQ7zMlw.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BfblnkNp.js";import"./step-indicator--sKB1jWz.js";import"./summary-box-B4zWynWF.js";import"./tag-Dhnnd0L-.js";import"./text-area-D5CJVc_V.js";import"./time-picker-YAfelJ_H.js";import"./tooltip-DNj1ozNN.js";import"./index-DUFx5r_F.js";import"./iframe-DoOtH7e2.js";import"./index-Da_auYbC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Ds-rJRIb.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
