import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BWWVeaG9.js";import"./banner-BoULXacJ.js";import"./button-CQKw_ArU.js";import"./button-group-ewBVF2L4.js";import"./checkbox-BjvifG72.js";import"./combo-box-aN6JnhWz.js";import"./date-picker-C67rITtz.js";import"./error-messages-_lA7co94.js";import"./index-C2_xkeJc.js";import"./form-group-BkBVLNH5.js";import"./helper-text-BRA2CuHl.js";import"./icon-R8YJ2BOW.js";import"./label-0qqEdO1f.js";import"./modal-Bv-vzx9w.js";import"./process-list-BcXx8fgu.js";import"./radio-button-CTioDZzo.js";import"./range-slider-6N7k_X-x.js";import"./search-NPEc2I-5.js";import"./select-BXK56c5V.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DLvb7ydC.js";import"./step-indicator-BJVp4xKi.js";import"./summary-box-hknuY5Lx.js";import"./tag-D_domJr-.js";import"./text-area-BLWxRhg4.js";import"./time-picker-CBvJt52P.js";import"./tooltip-BhXbaBUJ.js";import"./index-Bqv6EQsX.js";import"./iframe-BgblZ3Ci.js";import"./index-BJS_Wybf.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-zF2YK1WT.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
