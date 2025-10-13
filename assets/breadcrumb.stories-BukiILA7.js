import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BdXERNfX.js";import"./banner-CGSORo_u.js";import"./button-CPtR5gcQ.js";import"./button-group-DhFFAP-Y.js";import"./checkbox-DIPu4W-G.js";import"./combo-box-xrw4u4Io.js";import"./date-picker-DdAbCWL7.js";import"./error-messages-_lA7co94.js";import"./index-CKMVbOyC.js";import"./form-group-BeYI6hSE.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTh2LF1Z.js";import"./label-0qqEdO1f.js";import"./modal-BkSCj_pK.js";import"./process-list-GG4225wz.js";import"./radio-button-DB9WFX5r.js";import"./range-slider-CjiD_4se.js";import"./search-D9RuuV-W.js";import"./select-DGKF5XvH.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-r4FkvNy4.js";import"./step-indicator-C7lNI0IH.js";import"./summary-box-Kko0uUi9.js";import"./tag-swdBJkEH.js";import"./text-area-B21G4oD1.js";import"./time-picker-z2FyGRfL.js";import"./tooltip-BiO4j0Po.js";import"./index-BOcI9Sy8.js";import"./iframe-BlRJQ1-Y.js";import"./index-Croz4O4J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-lROLGhdI.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
