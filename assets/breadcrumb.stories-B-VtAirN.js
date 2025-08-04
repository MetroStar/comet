import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-C9HOtrxI.js";import"./banner-DFuFeIia.js";import"./button-IPy9jbLs.js";import"./button-group-DXolzND2.js";import"./checkbox-BQkuhU1G.js";import"./combo-box-CWBhLbX6.js";import"./date-picker-ufywb9kd.js";import"./error-messages-_lA7co94.js";import"./index-BDHufz-7.js";import"./form-group-DRm-Z0uU.js";import"./helper-text-BRA2CuHl.js";import"./icon-USpDURA8.js";import"./label-0qqEdO1f.js";import"./modal-35WI-peH.js";import"./process-list-Cw48gBrz.js";import"./radio-button-C3KSXNgA.js";import"./range-slider-Bw0Kc7v6.js";import"./search-CzhcTNXV.js";import"./select-BpTAUJhf.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B5IEr7J2.js";import"./step-indicator-CR0utXOF.js";import"./summary-box-B7sxQFWe.js";import"./tag-DvWwyFUj.js";import"./text-area-CxcDxdlk.js";import"./time-picker-B98iZ5IH.js";import"./tooltip-tb7otWC0.js";import"./index-C_W0PhG5.js";import"./iframe-DKa0YoIq.js";import"./index-Bac-0u3O.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxY-v_t6.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
