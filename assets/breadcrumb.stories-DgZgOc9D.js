import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CaCsRVn_.js";import"./banner-CYLYqKyn.js";import"./button-DQSjfVkv.js";import"./button-group-C0hUUhBY.js";import"./checkbox-96zxDzbZ.js";import"./combo-box-P6h0I6tr.js";import"./date-picker-B8kkk9N-.js";import"./error-messages-pdO9TZPZ.js";import"./index-DURXZQ9o.js";import"./form-group-CPqPXC7s.js";import"./helper-text-BRA2CuHl.js";import"./icon-CiOXX4sf.js";import"./label-0qqEdO1f.js";import"./modal-BzDYk1C8.js";import"./process-list-CQAoxI10.js";import"./radio-button-D35MaHG6.js";import"./range-slider-COBoKlwU.js";import"./search-D97SSICW.js";import"./select-BPldmASG.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-WDGMggSx.js";import"./step-indicator-CumMREST.js";import"./summary-box-DKn-YCjw.js";import"./tag-DsFVYETT.js";import"./text-area-D52SOLIR.js";import"./time-picker-sWktdUEe.js";import"./tooltip-C4EFWcxR.js";import"./index-EB_GCKWz.js";import"./iframe-Dp8b9fRy.js";import"./index-C9qFoPjr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CXDBfroo.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
