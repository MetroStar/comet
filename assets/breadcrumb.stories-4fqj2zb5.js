import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-DRxn63zm.js";import"./banner-Bnov42sP.js";import"./button-B01WG78W.js";import"./button-group-B0VNZ7Kk.js";import"./checkbox-1gRFiwoj.js";import"./combo-box-Ome0bXkk.js";import"./date-picker-C-nJthU5.js";import"./error-messages-pdO9TZPZ.js";import"./index-C47c4gZi.js";import"./form-group-SapkwOh7.js";import"./helper-text-BRA2CuHl.js";import"./icon-BMqwZoq1.js";import"./label-0qqEdO1f.js";import"./modal-B8fKVaUm.js";import"./process-list-BYeeENcZ.js";import"./radio-button-Ce8j0-sQ.js";import"./range-slider-mv0vohDp.js";import"./search-fZqQ8d8m.js";import"./select-DzKTuOAL.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CauIfpW6.js";import"./step-indicator-CHqa5mhF.js";import"./summary-box-CeavNL2b.js";import"./tag-CtaVZdOp.js";import"./text-area-KGydQoKk.js";import"./time-picker-BKsNE-Eo.js";import"./tooltip-Cix9W9yK.js";import"./index-CHO8AZYk.js";import"./iframe-ItqDXnoe.js";import"./index-Dpnjqa6C.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOy_U2gq.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
