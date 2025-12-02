import{j as m}from"./jsx-runtime-u17CrQMm.js";import{B as o,c as a}from"./table-BcAjHaPe.js";import"./banner-Bb9tgDMu.js";import"./button-DHPf3ZSy.js";import"./button-group-DXkD3Odw.js";import"./checkbox-CWxi48TQ.js";import"./combo-box-BgWuh_WY.js";import"./date-picker-CY9wn-JD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BeU7Me-t.js";import"./form-group-030VDF0V.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CtOfy-k_.js";import"./label-Z58zP1tT.js";import"./modal-D415_Ju7.js";import"./process-list-B5_A_qL3.js";import"./radio-button-iLLUIu9s.js";import"./range-slider-B-Hf8WYx.js";import"./search-297e9Y7D.js";import"./select-P2zO11OG.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BBLMX3ph.js";import"./step-indicator-VzIYVCPL.js";import"./summary-box-i_aO1v2Q.js";import"./tag-BURryAb1.js";import"./text-area-CrhVCt3o.js";import"./time-picker-CvagkXJf.js";import"./tooltip-BhAJp-EY.js";import"./index-BdXVIPuw.js";import"./iframe-B31pvYvh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCMedrEY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-A9mp8xSv.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Breadcrumb",component:o,argTypes:{id:{required:!0}}},i=r=>alert("Called with: "+JSON.stringify(r)),e={args:{id:"breadcrumb-1",items:[{name:"Rome",path:"/rome"},{name:"Greece",path:"/greece"}],current:"Italy",action:i},render:r=>m.jsx(o,{...r})},t={args:{id:"breadcrumb-2",current:"Italy",action:i},render:r=>m.jsxs(o,{...r,children:[m.jsx(a,{name:"Rome",path:"/rome",action:r.action}),m.jsx(a,{name:"Greece",path:"/greece",action:r.action})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","WithChildren"];export{e as Default,t as WithChildren,V as __namedExportsOrder,Q as default};
