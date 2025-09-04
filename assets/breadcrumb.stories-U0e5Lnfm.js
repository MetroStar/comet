import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CRIHftcn.js";import"./banner-tI4i3dHX.js";import"./button-CIuKbjxD.js";import"./button-group-gBk2q1RT.js";import"./checkbox-C0p4yiuP.js";import"./combo-box-C1ab52c3.js";import"./date-picker-yjT1zarg.js";import"./error-messages-_lA7co94.js";import"./index-CzGQz90s.js";import"./form-group-DRHOEtVf.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkCLabQh.js";import"./label-0qqEdO1f.js";import"./modal-x7UqWS9_.js";import"./process-list-DEWXnXmu.js";import"./radio-button-C1xT2Qy8.js";import"./range-slider--uBQoswA.js";import"./search-BCqjbBHN.js";import"./select-gcVG_7Gs.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOusDcvs.js";import"./step-indicator-DoMwYytm.js";import"./summary-box-BAt1BHtX.js";import"./tag-dpfiBseI.js";import"./text-area-C6LgDorB.js";import"./time-picker-Dwz4Iy3u.js";import"./tooltip-CSQbHOdo.js";import"./index-Dz-2O1NT.js";import"./iframe-BsmwYSRM.js";import"./index-BVkfGhKT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0eiXkeB.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
