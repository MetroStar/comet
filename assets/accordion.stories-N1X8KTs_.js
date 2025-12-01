import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DMBuCYe_.js";import"./banner-DFFrh2we.js";import"./button-CebCDk22.js";import"./button-group-CP6QYoDT.js";import"./checkbox-BNnJF55M.js";import"./combo-box-C7-v9zyp.js";import"./date-picker-CAgeyYpd.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVf-osoh.js";import"./form-group-D9z_c3KR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Box8_GlQ.js";import"./label-Z58zP1tT.js";import"./modal-BIpf-zb1.js";import"./process-list-Dy1X11P1.js";import"./radio-button-DYlmKEnZ.js";import"./range-slider-BGMS1c5-.js";import"./search-Bf4lYVbJ.js";import"./select-CtAQSun1.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-qfke9_ky.js";import"./step-indicator-qlAV-NTT.js";import"./summary-box-CWhGKQyS.js";import"./tag-B8oHhohV.js";import"./text-area-DTRoQh8l.js";import"./time-picker-Xaqt13c1.js";import"./tooltip-C2SUIZOU.js";import"./index-CiA_ydS_.js";import"./iframe-Cu6PFQIF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sxjDgNp1.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BgeT6qmK.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accordion-1',
    allowMultiSelect: false,
    items: [{
      id: 'item-1',
      label: 'Item 1',
      children: <span>Hello</span>,
      expanded: true
    }, {
      id: 'item-2',
      label: 'Item 2',
      children: <span>World</span>,
      expanded: false
    }]
  },
  render: (args: AccordionProps) => <Accordion {...args} />
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accordion-2',
    allowMultiSelect: true,
    items: [{
      id: 'item-1',
      label: 'Item 1',
      children: <span>Hello</span>,
      expanded: false
    }, {
      id: 'item-2',
      label: 'Item 2',
      children: <span>World</span>,
      expanded: false
    }]
  },
  render: (args: AccordionProps) => <Accordion {...args} />
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accordion-3',
    allowMultiSelect: false
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <AccordionItem id="item-1" label="Item 1" expanded={true}>
        <span>Hello</span>
      </AccordionItem>
      <AccordionItem id="item-2" label="Item 2" expanded={false}>
        <span>World</span>
      </AccordionItem>
    </Accordion>
}`,...t.parameters?.docs?.source}}};const V=["Default","MultiSelect","WithChildren"];export{o as Default,i as MultiSelect,t as WithChildren,V as __namedExportsOrder,Q as default};
