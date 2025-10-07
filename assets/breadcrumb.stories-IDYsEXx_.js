import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-B0ZfyW9e.js";import"./banner-CvO_kA9U.js";import"./button-D7jU-0wo.js";import"./button-group-Ck4w57sK.js";import"./checkbox-Rf_MEj7T.js";import"./combo-box-Bei1E7lW.js";import"./date-picker-BEGXPp7B.js";import"./error-messages-_lA7co94.js";import"./index-BUvbtEYw.js";import"./form-group-DDtB50L7.js";import"./helper-text-BRA2CuHl.js";import"./icon-DFGXQkrf.js";import"./label-0qqEdO1f.js";import"./modal-D9Aokmq8.js";import"./process-list-DMBWm_Vb.js";import"./radio-button-B7gLfpCg.js";import"./range-slider-CDYpIlxh.js";import"./search-7cG6apXU.js";import"./select-BvWJKS2s.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BNU5Kn0X.js";import"./step-indicator-D_mYB-E_.js";import"./summary-box-D0yEzeCv.js";import"./tag-BmGS_nkG.js";import"./text-area-CqKit1ly.js";import"./time-picker-_qB9ISkx.js";import"./tooltip-CWctn93i.js";import"./index-DuiSlnjk.js";import"./iframe-L8I4kFBs.js";import"./index-C7U72UuM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D-I1emzh.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
