import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-CCNOA2Tt.js";import"./banner-TnjcYjBW.js";import"./button-DwHw6MmX.js";import"./button-group-BsGuBAvu.js";import"./checkbox-D1-xw26W.js";import"./combo-box-BW_ELrKu.js";import"./date-picker-u_PmbiS3.js";import"./error-messages-_lA7co94.js";import"./index-CK6kpZ6D.js";import"./form-group-2abxc0CZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CA8rOCQY.js";import"./label-0qqEdO1f.js";import"./modal-COg9AbFD.js";import"./process-list-Bf0Q9txv.js";import"./radio-button-C1_K-Rqt.js";import"./range-slider-DZSXjHWc.js";import"./search-DFQDI6Z7.js";import"./select-DRe3cYfn.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B6vEvGsX.js";import"./step-indicator-hmRZqG9G.js";import"./summary-box-BdfEVXxD.js";import"./tag-6m6BCwW9.js";import"./text-area-vDjx9bIg.js";import"./time-picker-BK8RVqUd.js";import"./tooltip-CCefTJZZ.js";import"./index-BnOVKaQE.js";import"./iframe-06KVgpNd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BuGsqDMl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-McuMDvj6.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
