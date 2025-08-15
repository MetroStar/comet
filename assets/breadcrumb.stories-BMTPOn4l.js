import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BYtm8aWr.js";import"./banner-BOsb6-5M.js";import"./button-kvp-3bRO.js";import"./button-group-Bz8x7RTE.js";import"./checkbox-U1-aMXP1.js";import"./combo-box-C41SXqKd.js";import"./date-picker-CZxAjDjb.js";import"./error-messages-_lA7co94.js";import"./index-B-rCaw0b.js";import"./form-group-C7WDyZYd.js";import"./helper-text-BRA2CuHl.js";import"./icon-CepZwO60.js";import"./label-0qqEdO1f.js";import"./modal-AEuqzuY7.js";import"./process-list-SwSDrK6Y.js";import"./radio-button-BTfMv-fS.js";import"./range-slider-CP1tnxY0.js";import"./search-7C4hTjQi.js";import"./select-DwRGmsQU.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BIGnOVGL.js";import"./step-indicator-C7aYC1tN.js";import"./summary-box-CO5CN3ne.js";import"./tag-CjzNHQU6.js";import"./text-area-nycWrcG_.js";import"./time-picker-BXCuHpEP.js";import"./tooltip-2q8JeVRJ.js";import"./index-CKsPUyOS.js";import"./iframe-Bh4Kgv9z.js";import"./index-Bj0UJ-Ok.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-GgdPq9z-.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
