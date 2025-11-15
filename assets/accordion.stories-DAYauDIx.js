import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DW_bMWHL.js";import"./banner-BuudoFOQ.js";import"./button-B4wDKhOD.js";import"./button-group-DozuKPpf.js";import"./checkbox-ZHZjr4cn.js";import"./combo-box-CsP_B6Zh.js";import"./date-picker-CqC6lTbh.js";import"./error-messages-DQwxQ3pR.js";import"./index-DD-f6anU.js";import"./form-group-ZBJWDz0G.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BH5NOiaC.js";import"./label-Z58zP1tT.js";import"./modal-CLdCh8BH.js";import"./process-list-CZ6SCh55.js";import"./radio-button-8ffYBqhl.js";import"./range-slider-D2vE_SJf.js";import"./search-ojO1ONPP.js";import"./select-_crQ4lid.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Dbb_hWNu.js";import"./step-indicator-DuHvjJSx.js";import"./summary-box-DBxxh4rZ.js";import"./tag-CwSNC5bx.js";import"./text-area-Bop2UMwn.js";import"./time-picker-DYqV8tkF.js";import"./tooltip-Ch_NwA79.js";import"./index-DRC3u4o-.js";import"./iframe-CnqCO9iU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dzl_5l3M.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CT5x6rTX.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
