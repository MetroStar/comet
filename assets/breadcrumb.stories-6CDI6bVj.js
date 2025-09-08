import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-DVEIJfEP.js";import"./banner-L_qKzIPP.js";import"./button-DXVMCrjf.js";import"./button-group-CBvnVt9C.js";import"./checkbox-Ddfr57Uw.js";import"./combo-box-CI7x9s1w.js";import"./date-picker-CoWC-1CX.js";import"./error-messages-_lA7co94.js";import"./index-DMq29h7f.js";import"./form-group-DBfTQOoS.js";import"./helper-text-BRA2CuHl.js";import"./icon-CvlDciaN.js";import"./label-0qqEdO1f.js";import"./modal-ClEmu25p.js";import"./process-list--vnKh0Db.js";import"./radio-button-Cj0gMxsy.js";import"./range-slider-BjPol11t.js";import"./search-CNoK7X24.js";import"./select-Db4_XT5f.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dii6R-e4.js";import"./step-indicator-CM1to4bc.js";import"./summary-box-BX_zfgOi.js";import"./tag-D9XQSjDb.js";import"./text-area-BGtrx8-Q.js";import"./time-picker-CgWuxmNu.js";import"./tooltip-Cz_Zx_0T.js";import"./index-B4ubeI7x.js";import"./iframe-C4vNGh7L.js";import"./index-CRJmehm-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DZVpAW7Q.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
