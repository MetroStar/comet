import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CKPPHEB2.js";import"./banner-_ZbGEhIg.js";import"./button-wiBUw2ln.js";import"./button-group-DejK9lhd.js";import"./checkbox-_aoh7e0v.js";import"./combo-box-DYIP3xuD.js";import"./date-picker-B3ZMxbLu.js";import"./error-messages-_lA7co94.js";import"./index-BOGvIYqa.js";import"./form-group-BMhe2Iop.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8n28FoH.js";import"./label-0qqEdO1f.js";import"./modal-CvmAaDMV.js";import"./process-list-y5z1Z_ew.js";import"./radio-button-vMb-nHfq.js";import"./range-slider-H8-mu3pO.js";import"./search-CZaE40pE.js";import"./select-BmIio9K1.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DyJn8dTy.js";import"./step-indicator-LRxRKaHE.js";import"./summary-box-CpUaTIGj.js";import"./tag-BAxMA63-.js";import"./text-area-CCqQJwr3.js";import"./time-picker-Dl6GpAlx.js";import"./tooltip-fJCS9TPh.js";import"./index-BSbYLGkZ.js";import"./iframe-gQpfMxwu.js";import"./index-Dl7XZhpl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C-jQrruZ.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
