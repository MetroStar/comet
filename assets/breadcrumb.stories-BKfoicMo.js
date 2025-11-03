import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-DIHhYBqi.js";import"./banner-BYkWT2yo.js";import"./button-BM9ySSKU.js";import"./button-group-DU9juRoB.js";import"./checkbox-dNYLELqw.js";import"./combo-box-CHVKASnX.js";import"./date-picker-uce4V5Q-.js";import"./error-messages-_lA7co94.js";import"./index-0g5umDOB.js";import"./form-group-4Q-7eSNv.js";import"./helper-text-BRA2CuHl.js";import"./icon-CtIVt_oZ.js";import"./label-0qqEdO1f.js";import"./modal-DrcG8wOg.js";import"./process-list-EXQTzVQ3.js";import"./radio-button-BVtP_EQo.js";import"./range-slider-CTiTwWqV.js";import"./search-BwhliTvO.js";import"./select-DYcwYXed.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-WbV2iWNK.js";import"./step-indicator-D5cV-W6H.js";import"./summary-box-Bg6bY0XI.js";import"./tag-BPJ1eWEF.js";import"./text-area-Dy8zqNTA.js";import"./time-picker-DKBMRE3N.js";import"./tooltip-R4OwE2Lf.js";import"./index-Bd3YalL3.js";import"./iframe-BXvGn3Ww.js";import"./index-hWEVF2Mq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DPJweXc7.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
