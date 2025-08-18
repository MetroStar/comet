import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CX0XI8OP.js";import"./banner-DEXFXyXy.js";import"./button-DsOsdPlp.js";import"./button-group-BUxuG7xu.js";import"./checkbox-YRmx3rM5.js";import"./combo-box-CYgYLg0C.js";import"./date-picker-Cp0WWYQM.js";import"./error-messages-_lA7co94.js";import"./index-DL-q9Ufj.js";import"./form-group-BHvzNZeJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8k-UgI4.js";import"./label-0qqEdO1f.js";import"./modal-6QWAZApx.js";import"./process-list--7pp4Vnj.js";import"./radio-button-DJCCmwa0.js";import"./range-slider-CH4q_Tvm.js";import"./search-C3wHYxvz.js";import"./select-Cn70ITUD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BmH2JWD9.js";import"./step-indicator-BLP1zC9c.js";import"./summary-box-CMVNsm3a.js";import"./tag-DwdL9XNw.js";import"./text-area-8qpd2dPf.js";import"./time-picker-aLWkqh-Q.js";import"./tooltip-CMK8D5V9.js";import"./index-CkzdCw0y.js";import"./iframe-CdEyIkyY.js";import"./index-DnqtVlz1.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dy2RdQ8t.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
