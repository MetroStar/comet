import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-qipDyWWW.js";import"./banner-Dbu76H_h.js";import"./button-BMfJYqv5.js";import"./button-group-C2oE1fke.js";import"./checkbox-DV3FgYFD.js";import"./combo-box-DDkfMCEb.js";import"./date-picker-0NFNJK6U.js";import"./error-messages-pdO9TZPZ.js";import"./index-Uy9L_0xv.js";import"./form-group-B_64fuat.js";import"./helper-text-BRA2CuHl.js";import"./icon-BVVlaEti.js";import"./label-0qqEdO1f.js";import"./modal-CR3V5z44.js";import"./process-list-DIpvwoK3.js";import"./radio-button-C1yJv6Ul.js";import"./range-slider-DBEKSDkg.js";import"./search-V-FTtime.js";import"./select-B0FkRYsk.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-B2zEUvDJ.js";import"./step-indicator-CDE04cMN.js";import"./summary-box-BQOeikKb.js";import"./tag-Di9uSiTh.js";import"./text-area-qn4mo8GQ.js";import"./time-picker-C5iYe6-E.js";import"./tooltip-DkS2g9OU.js";import"./index-BLKK0fUp.js";import"./iframe-DLFxhOfQ.js";import"./index-DbdQ-_yw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DnM5t5zf.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
