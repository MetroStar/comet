import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-sgBBeN_3.js";import"./banner-BlKhwcl-.js";import"./button-s6X5UBaR.js";import"./button-group-B1aWv9gb.js";import"./checkbox-cnQ_-peT.js";import"./combo-box-ByFKHUsq.js";import"./date-picker-CdtWHcRU.js";import"./error-messages-_lA7co94.js";import"./index-CRpSyyh9.js";import"./form-group-B-Pr4jGu.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDcUgKz8.js";import"./label-0qqEdO1f.js";import"./modal-B-Ar_YiJ.js";import"./process-list-B1j8-mm9.js";import"./radio-button-B5LIr0wS.js";import"./range-slider-CCd_gb87.js";import"./search-B2v06REB.js";import"./select-CFmg9oUl.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-T3keRwyR.js";import"./step-indicator-BjOG0FUs.js";import"./summary-box-Dep7O2aS.js";import"./tag-CvARMcmu.js";import"./text-area-ktJJJxPq.js";import"./time-picker-Dpbrbtdg.js";import"./tooltip-Ce_IMZUp.js";import"./index-BrPJmFEP.js";import"./iframe-CUeiGFJS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hkmjj3pC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUB1n4uP.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","WithChildren"];export{e as Default,t as WithChildren,V as __namedExportsOrder,Q as default};
