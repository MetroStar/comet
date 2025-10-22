import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-EDJB2sTo.js";import"./banner-BOpU37qp.js";import"./button-DBKb0ewM.js";import"./button-group-Bh92E-bS.js";import"./checkbox-Dw6UHJ51.js";import"./combo-box-CSSj876a.js";import"./date-picker-CrF8QLeb.js";import"./error-messages-_lA7co94.js";import"./index-Dz3KGBJ1.js";import"./form-group-D61Ut1VC.js";import"./helper-text-BRA2CuHl.js";import"./icon-C2GMX_Yd.js";import"./label-0qqEdO1f.js";import"./modal-SzqUbwHE.js";import"./process-list-DWkHGGyu.js";import"./radio-button-CJrfb0RL.js";import"./range-slider-Dclr-Ayn.js";import"./search-D8XGy_cg.js";import"./select-Dp05dyOy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DrY8ZEeD.js";import"./step-indicator-QljTgDVY.js";import"./summary-box-ubPFwvIt.js";import"./tag-CTmDgqa8.js";import"./text-area-BF6Qq-LB.js";import"./time-picker-D2RHFb7y.js";import"./tooltip-CkbpW6i9.js";import"./index-CR8NEJay.js";import"./iframe-vQD5sTXz.js";import"./index-fgMZaG23.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CWfwrV3c.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
