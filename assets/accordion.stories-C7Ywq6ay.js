import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-4gBBYbnv.js";import"./banner-di6yW5Uz.js";import"./button-DDnj8xdT.js";import"./button-group-DooJ8EU4.js";import"./checkbox-DIKveoyj.js";import"./combo-box-D9fuo9i4.js";import"./date-picker-DHGVSwyc.js";import"./error-messages-_lA7co94.js";import"./index-V3eZre_f.js";import"./form-group-tvOP8ASP.js";import"./helper-text-BRA2CuHl.js";import"./icon-JLyd65NR.js";import"./label-0qqEdO1f.js";import"./modal-BwfPqh08.js";import"./process-list-D_yB08p6.js";import"./radio-button-Prxo-dtn.js";import"./range-slider-QOEJ62F2.js";import"./search-CcFFi-oo.js";import"./select-DR1IqUls.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BRpmzYGQ.js";import"./step-indicator-C-Qfgoa0.js";import"./summary-box-D8962nN0.js";import"./tag-C9O5PIcN.js";import"./text-area-8F6leHVG.js";import"./time-picker-BnnSU-Lp.js";import"./tooltip-C6Xayu_D.js";import"./index-BZNHB8GM.js";import"./iframe-BecLNQGy.js";import"./index-BFAkROmT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-hvX-s2ru.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
