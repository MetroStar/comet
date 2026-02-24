import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-Ch-sZdwv.js";import"./banner-XLvXtSqA.js";import"./button-BsC6LYen.js";import"./button-group-C-mMKkOx.js";import"./checkbox-BrkCm2o9.js";import"./combo-box-Cas2il9B.js";import"./date-picker-Bqh6GVSb.js";import"./error-messages-DQwxQ3pR.js";import"./index-CkKdknOi.js";import"./form-group-bMnI7vyb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7ZI2_WA.js";import"./label-Z58zP1tT.js";import"./modal-BnlhklE2.js";import"./process-list-DG1jhLut.js";import"./radio-button-BK2GU6Ug.js";import"./range-slider-CcpPZara.js";import"./search-BD8ryVTf.js";import"./select-BAp0tBXJ.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BDPCZz7C.js";import"./step-indicator-BoU6H3fm.js";import"./summary-box-CUyYbWXy.js";import"./tag-Dd3nNNr4.js";import"./text-area-DvYQT1M1.js";import"./time-picker-DPoYf0Ep.js";import"./tooltip-gTCSVkqI.js";import"./index-Bv8IALZP.js";import"./iframe-DkQxi855.js";import"./preload-helper-PPVm8Dsz.js";import"./index--78zLXpN.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BekW2GCl.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
