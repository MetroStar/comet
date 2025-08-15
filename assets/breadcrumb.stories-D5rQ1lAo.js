import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CEC6VR9e.js";import"./banner-BkIJS_6z.js";import"./button-Cz7RgtoX.js";import"./button-group-Bv-TDQ2J.js";import"./checkbox-Bb6cbyCa.js";import"./combo-box-QTBgiBcd.js";import"./date-picker-k5bZck_k.js";import"./error-messages-_lA7co94.js";import"./index-DHOAzmtN.js";import"./form-group-BWHxpag0.js";import"./helper-text-BRA2CuHl.js";import"./icon-CltekIt2.js";import"./label-0qqEdO1f.js";import"./modal-CDqm1nCU.js";import"./process-list-DEBo6nte.js";import"./radio-button-CKLsf2Y8.js";import"./range-slider-BVh0FSE4.js";import"./search-SVFGc8u5.js";import"./select-VUMvBmOF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BFo_LLtW.js";import"./step-indicator-DhkvXvbl.js";import"./summary-box-BDJ68lGd.js";import"./tag-BwQanvXK.js";import"./text-area-Ce8nxo5M.js";import"./time-picker-C8zu-Q1o.js";import"./tooltip-DeexD_cA.js";import"./index-D82vRiCQ.js";import"./iframe-B2NCm2Rb.js";import"./index-C-iG_L9p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Mg8z5oX4.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
