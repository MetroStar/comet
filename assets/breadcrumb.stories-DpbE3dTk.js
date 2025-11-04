import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BkSI5mbc.js";import"./banner-CTZ2PdPw.js";import"./button-CsYmh0vm.js";import"./button-group-BPJ6fggK.js";import"./checkbox-DhCPixBd.js";import"./combo-box-BXgqhUEs.js";import"./date-picker-C9E8UeDk.js";import"./error-messages-_lA7co94.js";import"./index-CI7UOko6.js";import"./form-group-CCYs-ltk.js";import"./helper-text-BRA2CuHl.js";import"./icon-GNqBduXf.js";import"./label-0qqEdO1f.js";import"./modal-dzF0TLRm.js";import"./process-list-Dq101AFb.js";import"./radio-button-Do9Rh2zd.js";import"./range-slider-B5r5rPxC.js";import"./search-DhE-ggo7.js";import"./select-1e1qJ9Ro.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-W4oZm-Rd.js";import"./step-indicator-DSv3EHu1.js";import"./summary-box-BS8sVZlh.js";import"./tag-Cq7MI9LS.js";import"./text-area-DviweLtB.js";import"./time-picker-SOqVqpwV.js";import"./tooltip-CWN-T5j-.js";import"./index-ByTD_-5Y.js";import"./iframe-CCHYt90f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7-mVSiM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DNXJughs.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
