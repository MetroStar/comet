import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BdXERNfX.js";import"./banner-CGSORo_u.js";import"./button-CPtR5gcQ.js";import"./button-group-DhFFAP-Y.js";import"./checkbox-DIPu4W-G.js";import"./combo-box-xrw4u4Io.js";import"./date-picker-DdAbCWL7.js";import"./error-messages-_lA7co94.js";import"./index-CKMVbOyC.js";import"./form-group-BeYI6hSE.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTh2LF1Z.js";import"./label-0qqEdO1f.js";import"./modal-BkSCj_pK.js";import"./process-list-GG4225wz.js";import"./radio-button-DB9WFX5r.js";import"./range-slider-CjiD_4se.js";import"./search-D9RuuV-W.js";import"./select-DGKF5XvH.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-r4FkvNy4.js";import"./step-indicator-C7lNI0IH.js";import"./summary-box-Kko0uUi9.js";import"./tag-swdBJkEH.js";import"./text-area-B21G4oD1.js";import"./time-picker-z2FyGRfL.js";import"./tooltip-BiO4j0Po.js";import"./index-BOcI9Sy8.js";import"./iframe-BlRJQ1-Y.js";import"./index-Croz4O4J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-lROLGhdI.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
