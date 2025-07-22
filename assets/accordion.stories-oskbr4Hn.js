import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-CyrrKNI3.js";import"./banner-BW73H41s.js";import"./button-CPceKQnT.js";import"./button-group-CAnn0_Ku.js";import"./checkbox-BRuIli36.js";import"./combo-box-Bo5WGBqQ.js";import"./date-picker-pMJfSnii.js";import"./error-messages-_lA7co94.js";import"./index-Al5h7hI8.js";import"./form-group-RW_L-8wz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DSHcO3IW.js";import"./label-0qqEdO1f.js";import"./modal-D5wIiW8J.js";import"./process-list-BwBgnQYa.js";import"./radio-button-CUShxS_O.js";import"./range-slider-DyoEvVCi.js";import"./search-BLE9gsW5.js";import"./select-BxQ7zMlw.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BfblnkNp.js";import"./step-indicator--sKB1jWz.js";import"./summary-box-B4zWynWF.js";import"./tag-Dhnnd0L-.js";import"./text-area-D5CJVc_V.js";import"./time-picker-YAfelJ_H.js";import"./tooltip-DNj1ozNN.js";import"./index-DUFx5r_F.js";import"./iframe-DoOtH7e2.js";import"./index-Da_auYbC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Ds-rJRIb.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
