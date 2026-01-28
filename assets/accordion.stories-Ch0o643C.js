import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-Bq6GEKwN.js";import"./banner-DK3VBm5U.js";import"./button-D8zIbCge.js";import"./button-group-CuPgHglY.js";import"./checkbox-CzQYJoKR.js";import"./combo-box-CJkqnDV4.js";import"./date-picker-CYzZbYRN.js";import"./error-messages-DQwxQ3pR.js";import"./index-BR9Kz18I.js";import"./form-group-DgFamHKx.js";import"./helper-text-C5i0f8Ge.js";import"./icon-B8KreRvd.js";import"./label-Z58zP1tT.js";import"./modal-BDwXsif8.js";import"./process-list-Cz-W6YwX.js";import"./radio-button-BocApSzk.js";import"./range-slider-faOPHNJW.js";import"./search-DL3oXpp6.js";import"./select-_A3e-4TS.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Ddk_Hcer.js";import"./step-indicator-AWmi0NuP.js";import"./summary-box-Du5uqv8U.js";import"./tag-Byr-lYbf.js";import"./text-area-CXRY8a5j.js";import"./time-picker-BXGxN0EV.js";import"./tooltip-Z2bNLvCP.js";import"./index-16IRk5e0.js";import"./iframe-Cn7wZz7_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_I8d7DW.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-pA1eNxZY.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
