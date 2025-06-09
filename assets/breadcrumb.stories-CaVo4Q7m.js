import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BlI47a42.js";import"./banner-CmzRFqpO.js";import"./button-D9Wdx50N.js";import"./button-group-BtL05JZx.js";import"./checkbox-CYDcYypr.js";import"./combo-box-4UaID54b.js";import"./date-picker-DhNdhWoz.js";import"./error-messages-pdO9TZPZ.js";import"./index-jGmS5lj0.js";import"./form-group-KdJstwiz.js";import"./helper-text-BRA2CuHl.js";import"./icon-B8I8DfLA.js";import"./label-0qqEdO1f.js";import"./modal-dSr-m1nB.js";import"./process-list-wWdVkJAE.js";import"./radio-button-DFlR5LhN.js";import"./range-slider-ByuSUVCH.js";import"./search-CSHRDgKS.js";import"./select-DVb__2mq.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiwGmtXm.js";import"./step-indicator-Dur3iiBJ.js";import"./summary-box-DeBRERe2.js";import"./tag-BkaVgh7n.js";import"./text-area-CtxSlzmP.js";import"./time-picker-BNt0A-Or.js";import"./tooltip-D22GfTlD.js";import"./index-B9tBr0ep.js";import"./iframe-D0wlIprT.js";import"./index-DqlK7rFw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C1TKt0S7.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,s,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'breadcrumb-2',
    current: 'Italy',
    action
  },
  render: (args: BreadcrumbProps) => <Breadcrumb {...args}>
      <BreadcrumbItem name="Rome" path="/rome" action={args.action} />
      <BreadcrumbItem name="Greece" path="/greece" action={args.action} />
    </Breadcrumb>
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const rr=["Default","WithChildren"];export{e as Default,t as WithChildren,rr as __namedExportsOrder,$ as default};
