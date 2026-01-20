import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-MLSJ1qAa.js";import"./banner-CZ791pMQ.js";import"./button-CF9efJMC.js";import"./button-group-CyNdtrB1.js";import"./checkbox-CnbmgKsJ.js";import"./combo-box-BfjGAN3U.js";import"./date-picker-VEt5vO7h.js";import"./error-messages-DQwxQ3pR.js";import"./index-NijndOXy.js";import"./form-group-BczgvB8Y.js";import"./helper-text-C5i0f8Ge.js";import"./icon-w-WB5_9_.js";import"./label-Z58zP1tT.js";import"./modal-sHxpdT3B.js";import"./process-list-BYnHW8RD.js";import"./radio-button-DitFf2If.js";import"./range-slider-Cy-87WO9.js";import"./search-VnOoVJQO.js";import"./select-BzPUx0jF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BRdvMZGO.js";import"./step-indicator-DV3EBP1L.js";import"./summary-box-BkFoCo6H.js";import"./tag-CWjkauZ_.js";import"./text-area-DQz5z8KE.js";import"./time-picker-aqy_O4vE.js";import"./tooltip-CckFkPTI.js";import"./index-BfAW8-H0.js";import"./iframe-BVPKJM18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7O_8YBX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwz56cnG.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
