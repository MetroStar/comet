import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DJk-XhMn.js";import"./banner-753k4wS4.js";import"./button-Zp2H4Y6h.js";import"./button-group-C2O7PpJm.js";import"./checkbox-BgWuR-IY.js";import"./combo-box-CihLQ5-J.js";import"./date-picker-tZBs_O5G.js";import"./error-messages-DQwxQ3pR.js";import"./index-CUBRylId.js";import"./form-group-BhQwpRkB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7X0n4qy.js";import"./label-Z58zP1tT.js";import"./modal-BJk45PfD.js";import"./process-list-DZl8MoFR.js";import"./radio-button-CbVGWSxw.js";import"./range-slider-CuyjuimZ.js";import"./search-CxOU0G1I.js";import"./select-dXE1vA8A.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CgJkBig9.js";import"./step-indicator-CMG5DhXp.js";import"./summary-box-BIDD5Ly5.js";import"./tag-DG7R--Z-.js";import"./text-area-DopYU4uh.js";import"./time-picker-C_yvhzgf.js";import"./tooltip-DCRG7Dm3.js";import"./index-Cthlo8g0.js";import"./iframe-CBTPnINx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmdtenRm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BTJpA1Cv.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
