import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-Blnrq8SI.js";import"./banner-CjNoLs0R.js";import"./button-DrgNhKm4.js";import"./button-group-CTbARXCs.js";import"./checkbox-DfewhHQd.js";import"./combo-box-CDnqIYLk.js";import"./date-picker-BLAKa2RD.js";import"./error-messages-pdO9TZPZ.js";import"./index-DN5oEqfs.js";import"./form-group-CSzCYO5N.js";import"./helper-text-BRA2CuHl.js";import"./icon-TU9J43dq.js";import"./label-0qqEdO1f.js";import"./modal-DfZY7RtB.js";import"./process-list-CgGIe7FW.js";import"./radio-button-D71PyLY4.js";import"./range-slider-CStsFj4a.js";import"./search-hEBxe0Q0.js";import"./select-CUUaESWi.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-D_l-mChA.js";import"./step-indicator-k7qhB1Ng.js";import"./summary-box-CYdpdM1t.js";import"./tag-B_lpaQT1.js";import"./text-area-DPOep4SW.js";import"./time-picker-cU7Ch4VH.js";import"./tooltip-CoD1TqJC.js";import"./index-DkTiWbdt.js";import"./iframe-ct7Z8PCe.js";import"./index-B5MGvWjW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUFxWabi.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
