import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CwM-e1Ld.js";import"./banner-CghSNQac.js";import"./button-DmQlEe5k.js";import"./button-group-CzHupFz8.js";import"./checkbox-B4ogPmPY.js";import"./combo-box-DTr5hLrb.js";import"./date-picker-BAjdwWxm.js";import"./error-messages-pdO9TZPZ.js";import"./index-B9xeDuGV.js";import"./form-group-Dpd_9Ciz.js";import"./helper-text-BRA2CuHl.js";import"./icon-HidOGawT.js";import"./label-0qqEdO1f.js";import"./modal-BjsfUY3z.js";import"./process-list-CCzppcJI.js";import"./radio-button-B0rdgAKy.js";import"./range-slider-DebgFVuZ.js";import"./search-DBBsVxls.js";import"./select-4SSRmt_-.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BABO9nkk.js";import"./step-indicator-D6Dm9Ncv.js";import"./summary-box-C4ax1MQo.js";import"./tag-B0oWdQ5d.js";import"./text-area-BhfI6C58.js";import"./time-picker-Brz1130R.js";import"./tooltip-mjUvhVd0.js";import"./index-DEcbbbY2.js";import"./iframe-BTDZFy0C.js";import"./index-BejGjDqK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C4w5M_iJ.js";import"./active-element-BuxAly_Z.js";const $={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},u=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:u},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:u},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
