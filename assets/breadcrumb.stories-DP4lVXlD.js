import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-DhmX7Z_S.js";import"./banner-xJkEB5hL.js";import"./button-CFEV8zQ6.js";import"./button-group-BdBThFRw.js";import"./checkbox-DhD3AoD9.js";import"./combo-box-CJ3FZO_F.js";import"./date-picker-CSS6a4-e.js";import"./error-messages-pdO9TZPZ.js";import"./index-aaz7Tl_2.js";import"./form-group-D--FW6C7.js";import"./helper-text-BRA2CuHl.js";import"./icon-8zzfAEs9.js";import"./label-0qqEdO1f.js";import"./modal-Dafr8mxd.js";import"./process-list-DP_n_abq.js";import"./radio-button-C5QvpKpy.js";import"./range-slider-DplOda1R.js";import"./search-C15Eta1b.js";import"./select-CVuqcUmD.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CrwNbb1H.js";import"./step-indicator-CXzzLe4G.js";import"./summary-box-DNG07pDu.js";import"./tag-CW4KaTzQ.js";import"./text-area-D1J510LF.js";import"./time-picker-BokxPoBe.js";import"./tooltip-D83AjoLs.js";import"./index-DUgY-iDN.js";import"./iframe-CDzpRssQ.js";import"./index-CmkFwe2W.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C73y17ap.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
