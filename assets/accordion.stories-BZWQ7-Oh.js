import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BR6WrhPV.js";import"./banner-CoXnAOGv.js";import"./button-Ba5SFYSH.js";import"./button-group-DrJ3dmmp.js";import"./checkbox-DRvVfAOf.js";import"./combo-box-JZtkTgBa.js";import"./date-picker-Dy-u9WJo.js";import"./error-messages-DQwxQ3pR.js";import"./index-_5yDmTtM.js";import"./form-group-DrxAuQof.js";import"./helper-text-C5i0f8Ge.js";import"./icon-R3TMqi9y.js";import"./label-Z58zP1tT.js";import"./modal-Db2SLur8.js";import"./process-list-9EdF__SY.js";import"./radio-button-B6VJ3ZlF.js";import"./range-slider-By0228wn.js";import"./search-DS8MfivK.js";import"./select-nQ058r9b.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Camo7QDz.js";import"./step-indicator-YT2NG5oe.js";import"./summary-box-DmkJ-lJj.js";import"./tag-2Y2MkQKt.js";import"./text-area-abDgHBzS.js";import"./time-picker-B5HPf1ng.js";import"./tooltip-DzHss-R_.js";import"./index-C60PpZKO.js";import"./iframe-CWUXl1bG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-9RNkUL.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EOzoFPlY.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
