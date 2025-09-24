import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-B2_7QTih.js";import"./banner-CB9iV2Es.js";import"./button-BbKRgqlt.js";import"./button-group-CakS15NU.js";import"./checkbox-jSUtNPxL.js";import"./combo-box-B2Abj-tx.js";import"./date-picker-3NLl3BU_.js";import"./error-messages-_lA7co94.js";import"./index-CD1vgVfL.js";import"./form-group-Df0vG0OS.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDRbc-Od.js";import"./label-0qqEdO1f.js";import"./modal-DZyUjUka.js";import"./process-list-DRc4oMF1.js";import"./radio-button-BzTiBx4p.js";import"./range-slider-ux1Bdl2a.js";import"./search-CENs0X1h.js";import"./select-DOrzXlhC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DeGKKjT7.js";import"./step-indicator-DhRqkIt4.js";import"./summary-box-C4Nw8Ivw.js";import"./tag--Mz2xj8r.js";import"./text-area-Dxh8xs4l.js";import"./time-picker-BZQdmWCi.js";import"./tooltip-CCdLEe-A.js";import"./index-fhRGG_ox.js";import"./iframe-CPcXRZAp.js";import"./index-CFllaHPr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYUEugg6.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
