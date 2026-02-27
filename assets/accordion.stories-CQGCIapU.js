import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DoPD4hfz.js";import"./banner-CO-rJZEh.js";import"./button-s3f33iqR.js";import"./button-group-yvOjzuR7.js";import"./checkbox-CtRvH166.js";import"./combo-box-BjQtQyeK.js";import"./date-picker-BXS9EJIo.js";import"./error-messages-DQwxQ3pR.js";import"./index-Y6j-vL1X.js";import"./form-group-C2eezSoD.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BvEpj7o9.js";import"./label-Z58zP1tT.js";import"./modal-C3ovDbUu.js";import"./process-list-CtF8XHOe.js";import"./radio-button-5J3HPOi8.js";import"./range-slider-BmvWjfhG.js";import"./search-DXUrmg5z.js";import"./select-BFVUdGDr.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DrN3KhjE.js";import"./step-indicator-Dmo_bZM0.js";import"./summary-box-2eCbppDZ.js";import"./tag-C3E-r3xI.js";import"./text-area-BRG0rnJp.js";import"./time-picker-eDTugkBF.js";import"./tooltip-CyHsxTd4.js";import"./index-CajJ0eJG.js";import"./iframe-DI97NYzA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXqkfQZm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN4bhDLR.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
