import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-CSaK-x_V.js";import"./banner-BxYGXyna.js";import"./button-GJ2BfbS-.js";import"./button-group-LFVyA_Fj.js";import"./checkbox-CdQ19bvs.js";import"./combo-box-CR-5V3Ia.js";import"./date-picker-DkK0_rB_.js";import"./error-messages-DQwxQ3pR.js";import"./index-oYevnVru.js";import"./form-group-ij1d4Lar.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DgbwmsD7.js";import"./label-Z58zP1tT.js";import"./modal-CgDi7N4S.js";import"./process-list-CodrIgEm.js";import"./radio-button-CX8ESqGR.js";import"./range-slider-fSM1VMq-.js";import"./search-Cojt-1JY.js";import"./select-B2E_eMP0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D6b4wbVc.js";import"./step-indicator-BF9Xj5dC.js";import"./summary-box-DopPB8AA.js";import"./tag-CaZv0Xjc.js";import"./text-area-BDP9Xbyw.js";import"./time-picker-Qm8rb22s.js";import"./tooltip-Zvlq8EIV.js";import"./index-q8yHh5aR.js";import"./iframe-BWsQfN69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfnSD9B1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-o16bkFsK.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
