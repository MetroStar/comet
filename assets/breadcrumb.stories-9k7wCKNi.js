import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-By7JvPdL.js";import"./banner-CrFijEhj.js";import"./button-EuharW3P.js";import"./button-group-Bghajen5.js";import"./checkbox-DD_ifgi5.js";import"./combo-box-BqqLAMBj.js";import"./date-picker-X2Em5qj8.js";import"./error-messages-_lA7co94.js";import"./index-DksUg_Pu.js";import"./form-group-7iDqG7wI.js";import"./helper-text-BRA2CuHl.js";import"./icon-CzosSpGO.js";import"./label-0qqEdO1f.js";import"./modal-CxKo2Lel.js";import"./process-list-CK3CD4P9.js";import"./radio-button-BuriEYG-.js";import"./range-slider-DtOWQc-J.js";import"./search-DGAjiiYe.js";import"./select-6Fbn24rS.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-uJ66I4dg.js";import"./step-indicator-CeJIv4ob.js";import"./summary-box-DN7XFtmt.js";import"./tag-BRPKOBzf.js";import"./text-area-ChEJ_jFf.js";import"./time-picker-H4II5i2g.js";import"./tooltip-jTh08c-G.js";import"./index-KAwCHCmc.js";import"./iframe-Df-qv7MF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzHzm4Sz.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJq8K2Sb.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
