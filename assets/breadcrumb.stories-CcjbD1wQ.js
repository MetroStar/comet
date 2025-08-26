import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-2NAaAm4f.js";import"./banner-DmWNFVX0.js";import"./button-DMGkmuRe.js";import"./button-group-BpVsvt9f.js";import"./checkbox-QXWsWq5b.js";import"./combo-box-D7opi152.js";import"./date-picker-osE87iLd.js";import"./error-messages-_lA7co94.js";import"./index-CuYmxFJ7.js";import"./form-group-DW4A1vPS.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bne4nQ7L.js";import"./label-0qqEdO1f.js";import"./modal-v_LYecBD.js";import"./process-list-DPSQSkDw.js";import"./radio-button-hq8NkZqJ.js";import"./range-slider-C33b7wPA.js";import"./search-CC-BpXF1.js";import"./select-XWhpf6Eu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ArWdNQH1.js";import"./step-indicator-BvTe9s74.js";import"./summary-box-D0YY31pd.js";import"./tag-CkMOhSU3.js";import"./text-area-C1M1QosD.js";import"./time-picker-DufTLboP.js";import"./tooltip-Cm8FGCCc.js";import"./index-D_G_8yR1.js";import"./iframe-feKrdQjw.js";import"./index-Bq7ANQAG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BSKCmYzr.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
