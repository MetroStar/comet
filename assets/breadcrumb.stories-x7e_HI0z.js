import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as o,c as a}from"./table-CCYgxckp.js";import"./banner-pKjHS12l.js";import"./button-B47c1YYu.js";import"./button-group-CYPZmXKt.js";import"./checkbox-CzUrMOvt.js";import"./combo-box-BOHJSksH.js";import"./date-picker-CBSj8zvm.js";import"./error-messages-_lA7co94.js";import"./index-BMwdlhat.js";import"./form-group-CJ3mn56K.js";import"./helper-text-BRA2CuHl.js";import"./icon-NAorSJnD.js";import"./label-0qqEdO1f.js";import"./modal-DL0P4ibX.js";import"./process-list-EZ68CPKv.js";import"./radio-button-1kiY3UA7.js";import"./range-slider-Cm5ueJhP.js";import"./search-tjUloL2j.js";import"./select-UJptg5wt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-oHPgUl6e.js";import"./step-indicator-NhVbAgWk.js";import"./summary-box-NLL7Ni77.js";import"./tag-Ct2h3KgO.js";import"./text-area-D-UqW_wP.js";import"./time-picker-rVrnL5sX.js";import"./tooltip-20H6euzk.js";import"./index-CaF2RGos.js";import"./iframe-Bwz6XU0D.js";import"./index-EONbNr6g.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJDqlcXL.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
