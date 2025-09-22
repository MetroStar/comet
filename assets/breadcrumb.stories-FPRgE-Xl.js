import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-C1T_Hy-L.js";import"./banner-DO5hvgnM.js";import"./button-XgcnM0uG.js";import"./button-group-CvPdpJzo.js";import"./checkbox-B3YkBqWl.js";import"./combo-box-WfySd2Em.js";import"./date-picker-CT6uOhvT.js";import"./error-messages-_lA7co94.js";import"./index-CmTLF3eZ.js";import"./form-group-oS_-cAgG.js";import"./helper-text-BRA2CuHl.js";import"./icon-CMaK07ig.js";import"./label-0qqEdO1f.js";import"./modal-CXY4gmYy.js";import"./process-list-zlPAdYXT.js";import"./radio-button-C1coLMFg.js";import"./range-slider-CkEeCFda.js";import"./search-DpDw9Dfe.js";import"./select-DnxPJAIv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-hoOHyEsx.js";import"./step-indicator-DVrqYPba.js";import"./summary-box-CeIzJN4S.js";import"./tag-CQumEc23.js";import"./text-area-DgYVSH4W.js";import"./time-picker-CUgQjvfO.js";import"./tooltip-Dltimqdy.js";import"./index-DJxORCHa.js";import"./iframe-CCJFRkb0.js";import"./index-MnkQOSnn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DIfjoeEk.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
