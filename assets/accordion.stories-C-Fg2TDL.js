import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-Sd8cxFUx.js";import"./banner-upozFeST.js";import"./button-DeQuXKOz.js";import"./button-group-n1LE8F7m.js";import"./checkbox-DAwvlk7m.js";import"./combo-box-DTj_V3yZ.js";import"./date-picker-m9zUkIvb.js";import"./error-messages-_lA7co94.js";import"./index-Bm7npR7P.js";import"./form-group-ODM8qnlA.js";import"./helper-text-BRA2CuHl.js";import"./icon-C4QULdnD.js";import"./label-0qqEdO1f.js";import"./modal-CVqJuv9Y.js";import"./process-list-CYa6MbFC.js";import"./radio-button-DreS4VKm.js";import"./range-slider-BWH65D0M.js";import"./search-MvPWk77I.js";import"./select-BUVP5uNL.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Bo3xCnGW.js";import"./step-indicator-DzN4kYk1.js";import"./summary-box-DYGCR5mO.js";import"./tag-Ce7eHv1o.js";import"./text-area-BjhcLw6Y.js";import"./time-picker-DG6m1DpN.js";import"./tooltip-DHiDK0fF.js";import"./index-BNTQFOaE.js";import"./iframe-9tQC-4Xm.js";import"./index-CasUqPWH.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAbhvx1n.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Q=["Default","MultiSelect","WithChildren"];export{o as Default,i as MultiSelect,t as WithChildren,Q as __namedExportsOrder,N as default};
