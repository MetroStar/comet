import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-luUx04bm.js";import"./banner-D4Eit51W.js";import"./button-DNdCgeu5.js";import"./button-group-BD0JEpF_.js";import"./checkbox-BJ-xYc0N.js";import"./combo-box-DXcbu5I5.js";import"./date-picker-8WhXjeat.js";import"./error-messages-DQwxQ3pR.js";import"./index-D86_PsyH.js";import"./form-group-CX0LVAtq.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DUaH-WVT.js";import"./label-Z58zP1tT.js";import"./modal-B0m6buq3.js";import"./process-list-DpHne8bX.js";import"./radio-button-CWbykzPm.js";import"./range-slider-CT2-RIUa.js";import"./search-D2qakHU1.js";import"./select-CIPD7EMl.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CJCZeBC9.js";import"./step-indicator-yM6dTqmK.js";import"./summary-box-Cp1bfIsu.js";import"./tag-RKDNbzYK.js";import"./text-area-AMxLhMtc.js";import"./time-picker-D42idwCe.js";import"./tooltip-BPlFa0e3.js";import"./index-8gstkWMy.js";import"./iframe-BpOry1Kh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7DyRbAp.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bqk60UQq.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
