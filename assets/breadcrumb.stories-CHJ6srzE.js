import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-BtFq5zL4.js";import"./banner-uV95zGFs.js";import"./button-DfKPFT4w.js";import"./button-group-B8qwif5I.js";import"./checkbox-CdDK2Ail.js";import"./combo-box-Ct--mWcL.js";import"./date-picker-rlS4rEJ_.js";import"./error-messages-pdO9TZPZ.js";import"./index-D0vkdLY0.js";import"./form-group-BNvSNT6e.js";import"./helper-text-BRA2CuHl.js";import"./icon-DZs_2Psf.js";import"./label-0qqEdO1f.js";import"./modal-CuUbPca1.js";import"./process-list-g8Hqj4X6.js";import"./radio-button-MwQ8sEZH.js";import"./range-slider-DAYuTYd2.js";import"./search-CAVmMV5z.js";import"./select-D-tMA2XJ.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DEEFijFP.js";import"./step-indicator-DQV4Yclx.js";import"./summary-box-WhOrEbhX.js";import"./tag-49nF4kNV.js";import"./text-area-BuVE8XGA.js";import"./time-picker-CvQcDVRT.js";import"./tooltip-ByMU_4Qo.js";import"./index-H7MKBO52.js";import"./iframe-BwwnJ4bQ.js";import"./index-CvXiQi1r.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN-9Y53f.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
