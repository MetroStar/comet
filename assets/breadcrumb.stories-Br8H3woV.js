import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-C8360qz1.js";import"./banner-0cQ1VwYA.js";import"./button-BKWxX-Da.js";import"./button-group-0Qrdnekb.js";import"./checkbox-V_TbU8x_.js";import"./combo-box-CWkgIpCj.js";import"./date-picker-OWJbCQWY.js";import"./error-messages-_lA7co94.js";import"./index-BJ28ckkj.js";import"./form-group-ccVGZY8n.js";import"./helper-text-BRA2CuHl.js";import"./icon-BvgBwPFf.js";import"./label-0qqEdO1f.js";import"./modal-Cy6gDfT6.js";import"./process-list-D0b4fxYS.js";import"./radio-button-Debg-0BK.js";import"./range-slider-fW4YPf0L.js";import"./search-DcpVRyol.js";import"./select-BVMgADpF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOYv-Ov_.js";import"./step-indicator-DjwAnxsg.js";import"./summary-box-BPTqOlAt.js";import"./tag-BPwouCyO.js";import"./text-area-mLO4G3tx.js";import"./time-picker-BVLec-T2.js";import"./tooltip-BGDht52a.js";import"./index-DwWsIt9I.js";import"./iframe-DuCqQX56.js";import"./index-CyGskYRl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DuoJpcJJ.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
