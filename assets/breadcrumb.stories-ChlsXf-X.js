import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-Blb5rANT.js";import"./banner-BmlVZfk-.js";import"./button-BlUJB2sM.js";import"./button-group-BHc2I0ck.js";import"./checkbox-BQcjfNYw.js";import"./combo-box-gL_IiNty.js";import"./date-picker-BwTl6U0J.js";import"./error-messages-pdO9TZPZ.js";import"./index-D74N8FgS.js";import"./form-group-CD5U6nVC.js";import"./helper-text-BRA2CuHl.js";import"./icon-DOsYgSUJ.js";import"./label-0qqEdO1f.js";import"./modal-BRGNl0UW.js";import"./process-list-DGj5Msej.js";import"./radio-button-BrM805MA.js";import"./range-slider-DQzdPj_1.js";import"./search-C2kLE4Gz.js";import"./select-R1OqwzSb.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiAvvMNa.js";import"./step-indicator-BXmtocNy.js";import"./summary-box--HKkVsMN.js";import"./tag-NNoaLxc4.js";import"./text-area-BOazg4ul.js";import"./time-picker-TSzaulpH.js";import"./tooltip-CtABBABA.js";import"./index-C_wObpry.js";import"./iframe-BFMRay5H.js";import"./index-DDDrMwO6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bm14qNHe.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
