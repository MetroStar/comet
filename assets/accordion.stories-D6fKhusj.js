import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BPs16-FG.js";import"./banner-LwyMWt_f.js";import"./button-DzOuhbyX.js";import"./button-group-DYkrmCJV.js";import"./checkbox-DXuqZY3J.js";import"./combo-box-C7iC2mHN.js";import"./date-picker-DVrnKbmB.js";import"./error-messages-DQwxQ3pR.js";import"./index-BqWP0DP-.js";import"./form-group-CqavwUjT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZJuTWWU.js";import"./label-Z58zP1tT.js";import"./modal-Be2O8iTh.js";import"./process-list-COVkMve9.js";import"./radio-button-CTxx2WwS.js";import"./range-slider-D1_yv7oc.js";import"./search-DypyX-qM.js";import"./select-Cp8HWSd0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CmhnIneU.js";import"./step-indicator-BqqEEUy_.js";import"./summary-box-vGIC5NTA.js";import"./tag-CB3TBIup.js";import"./text-area--8jwfK7F.js";import"./time-picker-BxfpYFKH.js";import"./tooltip-DcEE479F.js";import"./index-ByS0UJ_H.js";import"./iframe-Bvnd1wKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tyhn6axX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DBgtOXSw.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
