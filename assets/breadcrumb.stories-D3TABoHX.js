import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-D6PxWkEz.js";import"./banner-5PnvCMeN.js";import"./button-C6DDMlzm.js";import"./button-group-D2NUrE1E.js";import"./checkbox-97CiXItc.js";import"./combo-box-CqKpeFyZ.js";import"./date-picker-9XfVeNZj.js";import"./error-messages-_lA7co94.js";import"./index-Dc5iOzpo.js";import"./form-group-C37VFKvz.js";import"./helper-text-BRA2CuHl.js";import"./icon-ldTZd2PJ.js";import"./label-0qqEdO1f.js";import"./modal-CLRIHiE2.js";import"./process-list-Dv3imPAG.js";import"./radio-button-CQt1YoIZ.js";import"./range-slider-CnELvyde.js";import"./search-CYLnDm6f.js";import"./select-g8Uw7pfh.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CBI-9iTh.js";import"./step-indicator-C3Nqgbfm.js";import"./summary-box-D4YHkNEC.js";import"./tag-DrpHvKAI.js";import"./text-area-ANeT3eEi.js";import"./time-picker-BphduNSw.js";import"./tooltip-DwNK3jut.js";import"./index-DUKoxV3s.js";import"./iframe-D7rw0kbP.js";import"./index-C9q_5GSN.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-SMKFmbVV.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
