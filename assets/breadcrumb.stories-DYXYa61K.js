import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-EA1y5ut-.js";import"./banner-CAGrKBsD.js";import"./button-DSB6x01T.js";import"./button-group-DoUEIhI2.js";import"./checkbox-D92JDoOs.js";import"./combo-box-kv4Zj3ip.js";import"./date-picker-DeOeusIq.js";import"./error-messages-_lA7co94.js";import"./index--PxvN4ag.js";import"./form-group-CNy8DDjE.js";import"./helper-text-BRA2CuHl.js";import"./icon-CoTVHJHi.js";import"./label-0qqEdO1f.js";import"./modal-BKK3aVOm.js";import"./process-list-B2W3GOc_.js";import"./radio-button-CRka0rgF.js";import"./range-slider-DEZb4C9L.js";import"./search-BMOfAqqA.js";import"./select-D3GcbaQv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEaHIX6K.js";import"./step-indicator-KzAYTCs1.js";import"./summary-box-sEgleKYK.js";import"./tag-BRlHQhP2.js";import"./text-area-Dq7PS0lJ.js";import"./time-picker-qN-3jLPm.js";import"./tooltip-C6MBNeTd.js";import"./index-BrLkV3m_.js";import"./iframe-C46Q6aS9.js";import"./index-CqwsvFH3.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BlqFUN-c.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
