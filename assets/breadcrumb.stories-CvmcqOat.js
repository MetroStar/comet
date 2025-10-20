import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BnXqzq9O.js";import"./banner-CIm70-HC.js";import"./button-Bgbky9UI.js";import"./button-group-CnvT5Qfh.js";import"./checkbox-173Vdv0m.js";import"./combo-box-BdYMw-6J.js";import"./date-picker-BQBfZpRp.js";import"./error-messages-_lA7co94.js";import"./index-jJyYyykc.js";import"./form-group-ChVWy-76.js";import"./helper-text-BRA2CuHl.js";import"./icon-CnfzXKqa.js";import"./label-0qqEdO1f.js";import"./modal-0_0oVfxj.js";import"./process-list-ooW3J2zX.js";import"./radio-button-BsKcdTWI.js";import"./range-slider-BWXXwryW.js";import"./search-MSiSwyBF.js";import"./select-H1kjN1Jj.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-gQCW04zT.js";import"./step-indicator-Ihi_S23D.js";import"./summary-box-kvJhmgjB.js";import"./tag-CWv2uEhb.js";import"./text-area-DGTyj5BG.js";import"./time-picker-BdiIZ-Qd.js";import"./tooltip-BKo9Xnb2.js";import"./index-CXGoz_dM.js";import"./iframe-BRh0L7-v.js";import"./index-BgSr64T9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BNnnE5vI.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
