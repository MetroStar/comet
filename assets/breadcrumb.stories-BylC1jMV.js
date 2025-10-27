import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CTHJRurc.js";import"./banner-BpjHpRyz.js";import"./button-CEdaOz0v.js";import"./button-group-DPUcNWat.js";import"./checkbox-CeDcbjZa.js";import"./combo-box-Df2_U8wx.js";import"./date-picker-D-VCXnPA.js";import"./error-messages-_lA7co94.js";import"./index-CLsMeELU.js";import"./form-group-N2izWhMO.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8iiNzoR.js";import"./label-0qqEdO1f.js";import"./modal-DsQx7LhB.js";import"./process-list-lglvHysC.js";import"./radio-button-C9zE0qcx.js";import"./range-slider-BzcdN58g.js";import"./search-DCqu2wfv.js";import"./select-sAGlyFDv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Ba8esuHl.js";import"./step-indicator-DYwCyK75.js";import"./summary-box-DCFq3_YR.js";import"./tag-BWyj0ide.js";import"./text-area-Z6rUOkKh.js";import"./time-picker-CakTvnCc.js";import"./tooltip-I7dpAhOi.js";import"./index-BIsXNuh7.js";import"./iframe-DwbOoiOR.js";import"./index-CJmWpGmW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DweQinfd.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
