import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-do3Wtiuz.js";import"./banner-C69xj6up.js";import"./button-BjwnDlUa.js";import"./button-group-DaZ29ND5.js";import"./checkbox-OyR24-QB.js";import"./combo-box-D4Ec50_t.js";import"./date-picker-C24u14Kt.js";import"./error-messages-_lA7co94.js";import"./index-DB5TIisB.js";import"./form-group-CWTBhvs3.js";import"./helper-text-BRA2CuHl.js";import"./icon-Ds9U5QK2.js";import"./label-0qqEdO1f.js";import"./modal-BdgCaLBt.js";import"./process-list-C_Gbba5Q.js";import"./radio-button-BNUbyZkN.js";import"./range-slider-dvvIi5fH.js";import"./search-Ca-ELIx0.js";import"./select-nGKBp-EG.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BWuugDej.js";import"./step-indicator-ClF7nu7D.js";import"./summary-box-CQ7ma9q9.js";import"./tag-C7eGu5si.js";import"./text-area-DldIq14N.js";import"./time-picker-BTP0M3i1.js";import"./tooltip-0tlrOCcc.js";import"./index-CsUVYJI9.js";import"./iframe-jnbR5XB0.js";import"./index-yAIAkIfa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-KEPVNFbW.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
