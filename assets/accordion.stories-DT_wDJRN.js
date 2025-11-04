import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-By7JvPdL.js";import"./banner-CrFijEhj.js";import"./button-EuharW3P.js";import"./button-group-Bghajen5.js";import"./checkbox-DD_ifgi5.js";import"./combo-box-BqqLAMBj.js";import"./date-picker-X2Em5qj8.js";import"./error-messages-_lA7co94.js";import"./index-DksUg_Pu.js";import"./form-group-7iDqG7wI.js";import"./helper-text-BRA2CuHl.js";import"./icon-CzosSpGO.js";import"./label-0qqEdO1f.js";import"./modal-CxKo2Lel.js";import"./process-list-CK3CD4P9.js";import"./radio-button-BuriEYG-.js";import"./range-slider-DtOWQc-J.js";import"./search-DGAjiiYe.js";import"./select-6Fbn24rS.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-uJ66I4dg.js";import"./step-indicator-CeJIv4ob.js";import"./summary-box-DN7XFtmt.js";import"./tag-BRPKOBzf.js";import"./text-area-ChEJ_jFf.js";import"./time-picker-H4II5i2g.js";import"./tooltip-jTh08c-G.js";import"./index-KAwCHCmc.js";import"./iframe-Df-qv7MF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzHzm4Sz.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJq8K2Sb.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
