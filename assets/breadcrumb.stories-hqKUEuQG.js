import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-Bb6U9UN-.js";import"./banner-9IEHsLzf.js";import"./button-B2zgU3gw.js";import"./button-group-CuV8b-Jt.js";import"./checkbox-BEI5JEAd.js";import"./combo-box-CQxpp1rn.js";import"./date-picker-BwF3ZQWf.js";import"./error-messages-_lA7co94.js";import"./index-B2IyjUDW.js";import"./form-group-D7o0mHcs.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDMZOkTr.js";import"./label-0qqEdO1f.js";import"./modal-BWU4uOwE.js";import"./process-list-DLQVUbiM.js";import"./radio-button-DiQ8zHvZ.js";import"./range-slider-B1JHoTLM.js";import"./search-Dzffyc8z.js";import"./select-neAeqmJy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BC3cl4Xt.js";import"./step-indicator-DLuCjkFb.js";import"./summary-box-DTZd7klS.js";import"./tag-DN6lamzf.js";import"./text-area-DOXKJPbL.js";import"./time-picker-B4nbaApt.js";import"./tooltip-BnEISZxP.js";import"./index-CprWhq2V.js";import"./iframe-BYzdcdZ1.js";import"./index-CxoXSAzG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DgAcE3a1.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
