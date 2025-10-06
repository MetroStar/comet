import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-do3Wtiuz.js";import"./banner-C69xj6up.js";import"./button-BjwnDlUa.js";import"./button-group-DaZ29ND5.js";import"./checkbox-OyR24-QB.js";import"./combo-box-D4Ec50_t.js";import"./date-picker-C24u14Kt.js";import"./error-messages-_lA7co94.js";import"./index-DB5TIisB.js";import"./form-group-CWTBhvs3.js";import"./helper-text-BRA2CuHl.js";import"./icon-Ds9U5QK2.js";import"./label-0qqEdO1f.js";import"./modal-BdgCaLBt.js";import"./process-list-C_Gbba5Q.js";import"./radio-button-BNUbyZkN.js";import"./range-slider-dvvIi5fH.js";import"./search-Ca-ELIx0.js";import"./select-nGKBp-EG.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BWuugDej.js";import"./step-indicator-ClF7nu7D.js";import"./summary-box-CQ7ma9q9.js";import"./tag-C7eGu5si.js";import"./text-area-DldIq14N.js";import"./time-picker-BTP0M3i1.js";import"./tooltip-0tlrOCcc.js";import"./index-CsUVYJI9.js";import"./iframe-jnbR5XB0.js";import"./index-yAIAkIfa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-KEPVNFbW.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
