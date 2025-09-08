import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-Bj-ieh0N.js";import"./banner-DHXPmgHt.js";import"./button-WXiSigBI.js";import"./button-group-C3Md5rMb.js";import"./checkbox-v0CmJ0fV.js";import"./combo-box-D6E53Ltn.js";import"./date-picker-CjxICpbw.js";import"./error-messages-_lA7co94.js";import"./index-8sAm4bIA.js";import"./form-group-U4i5E8Pz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DLRFSs-D.js";import"./label-0qqEdO1f.js";import"./modal-DuZBzutb.js";import"./process-list-BZY3uAyG.js";import"./radio-button-e8GAg1jo.js";import"./range-slider-C2gAsZFm.js";import"./search-DtK5-wbC.js";import"./select-IwB_nyID.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprknOUj.js";import"./step-indicator-DOOfVLKw.js";import"./summary-box-Bv21eHgr.js";import"./tag-3iSrbP2k.js";import"./text-area-49zULSyA.js";import"./time-picker-Cw7BpC7A.js";import"./tooltip-BYVxI0PO.js";import"./index-tsUwO6kK.js";import"./iframe-TQQq_xwn.js";import"./index-qCMx_cnb.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xQGsZq0x.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
