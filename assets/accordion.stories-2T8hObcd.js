import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-K6yo3B_7.js";import"./banner-BhKBfDyZ.js";import"./button-CPwdRaPa.js";import"./button-group-BKcE8Oav.js";import"./checkbox-BcgY7deo.js";import"./combo-box-C5VUUqkJ.js";import"./date-picker-DZhlg54d.js";import"./error-messages-DQwxQ3pR.js";import"./index-BepEtKgH.js";import"./form-group-B4sEWzNu.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIiwfHXh.js";import"./label-Z58zP1tT.js";import"./modal-Dp7gLss_.js";import"./process-list-CiT4wtBa.js";import"./radio-button-DwmexyD_.js";import"./range-slider-CsIntVkP.js";import"./search-4f5hLwa7.js";import"./select-Btjfsvlm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Drwiv-SO.js";import"./step-indicator-_HVgCI85.js";import"./summary-box-CjgDttnj.js";import"./tag-Dna-t53L.js";import"./text-area-IlAvfY_F.js";import"./time-picker-BwBoa6O0.js";import"./tooltip-CWCAZCBF.js";import"./index-ChQN9uke.js";import"./iframe-D_HOsr8M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJAMUTJ6.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cybot9zD.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
