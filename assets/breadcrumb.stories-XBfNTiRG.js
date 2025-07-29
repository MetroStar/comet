import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CFZe1oZk.js";import"./banner-C0iRi7lY.js";import"./button-EjrCymmn.js";import"./button-group-B45KQgZo.js";import"./checkbox-BTDbXMs9.js";import"./combo-box-PCieNkZt.js";import"./date-picker-DD5vN0l4.js";import"./error-messages-_lA7co94.js";import"./index-DXpWHD9X.js";import"./form-group-DXBWy_5J.js";import"./helper-text-BRA2CuHl.js";import"./icon-BAmAFE3F.js";import"./label-0qqEdO1f.js";import"./modal-BaXUXORU.js";import"./process-list-Bes59W1_.js";import"./radio-button-Cg7so58a.js";import"./range-slider-DMLTBef-.js";import"./search-CemhTU5F.js";import"./select-DONnmCi2.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ChVoEick.js";import"./step-indicator-BtFe2dBb.js";import"./summary-box-DtlSzkaU.js";import"./tag-DmV8dUk0.js";import"./text-area-z3x7pbPL.js";import"./time-picker-BiDHUfm5.js";import"./tooltip-C3AqG2BR.js";import"./index-DF9socu3.js";import"./iframe-Bj_WYFuV.js";import"./index-zqKFCB0Q.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-FZjDNhBr.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
