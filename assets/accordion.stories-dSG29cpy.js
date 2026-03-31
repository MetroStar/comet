import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-51YYwGLj.js";import"./banner-Bv_kOqML.js";import"./button-DWw3FYRE.js";import"./button-group-MlieLY4u.js";import"./checkbox-GzGDd-Ma.js";import"./combo-box-20deBagx.js";import"./date-picker-CrM8O4Ke.js";import"./error-messages-DQwxQ3pR.js";import"./index-DthDhu_P.js";import"./form-group-DmuX5GHA.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CckomvKd.js";import"./label-Z58zP1tT.js";import"./modal-Z3r9IjSG.js";import"./process-list-C5K8mXPF.js";import"./radio-button-CITFhXUS.js";import"./range-slider-VxwCY7vw.js";import"./search-CnvNPNSV.js";import"./select-BX7BE1Za.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DvKs5coS.js";import"./step-indicator-VTuD0rEC.js";import"./summary-box-qu0Fij9e.js";import"./tag-DcvZtGBJ.js";import"./text-area-Co4QZweV.js";import"./time-picker-DFYXdFz0.js";import"./tooltip-B9DpSj4U.js";import"./index-2qk3iZ2l.js";import"./iframe-OV6txbM2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6gVjvQv.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D_8CrR66.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
