import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CMDmZj7c.js";import"./banner-BAz2G--5.js";import"./button-B9OaNNhT.js";import"./button-group-DlaVFbxh.js";import"./checkbox-C28N4a1k.js";import"./combo-box-BvakVT0f.js";import"./date-picker-UsI544BE.js";import"./error-messages-_lA7co94.js";import"./index-Bkp4uBDp.js";import"./form-group-Bpk2fpaH.js";import"./helper-text-BRA2CuHl.js";import"./icon-cxkbKgKE.js";import"./label-0qqEdO1f.js";import"./modal-BQkULiVL.js";import"./process-list-Bss4hcvS.js";import"./radio-button-CEz13IeH.js";import"./range-slider-BpGVvSsE.js";import"./search-Cin5Af7e.js";import"./select-BlI-nL0Q.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-LVKe454Y.js";import"./step-indicator-C4JBCoYw.js";import"./summary-box-DnFH13SG.js";import"./tag-CneVrYpY.js";import"./text-area-D_fB21ck.js";import"./time-picker-CSKB0_Nb.js";import"./tooltip-Y544ZiXZ.js";import"./index-o8AzxdkW.js";import"./iframe-CeHEORJQ.js";import"./index-Da7q7RYZ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-4Bao6GuI.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
