import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BQeTkK1M.js";import"./banner-BZszu9Hy.js";import"./button-C1_RgaQE.js";import"./button-group-B14JmUJ1.js";import"./checkbox-D3z24Vel.js";import"./combo-box-DbeRSt4E.js";import"./date-picker-CnIzSQKS.js";import"./error-messages-_lA7co94.js";import"./index-BKjg4RhJ.js";import"./form-group-8TLLYdhI.js";import"./helper-text-BRA2CuHl.js";import"./icon-BJTLgqOL.js";import"./label-0qqEdO1f.js";import"./modal-9N1QXayz.js";import"./process-list-DJRNsDCz.js";import"./radio-button-D9V3ZUqb.js";import"./range-slider-BNntapAU.js";import"./search-i8PX9Grh.js";import"./select-Dk-O5ttt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B1Xc6g-U.js";import"./step-indicator-DUKM1WXK.js";import"./summary-box-B7jql9xw.js";import"./tag-DW9bMkE3.js";import"./text-area-MPsxISJ-.js";import"./time-picker-DAIr41Lx.js";import"./tooltip-DdBtyx6p.js";import"./index-DU2c9KRp.js";import"./iframe-ChG3UuR9.js";import"./index-BlziFMf9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7_Jpop9.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
