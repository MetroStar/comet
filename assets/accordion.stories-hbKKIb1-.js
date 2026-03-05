import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-C1p0Tl06.js";import"./banner-DoI9yGrg.js";import"./button-CzpSgtjY.js";import"./button-group-BfU8yjRw.js";import"./checkbox-DtOiFVfN.js";import"./combo-box-DogqRNR0.js";import"./date-picker-Dijhhk7v.js";import"./error-messages-DQwxQ3pR.js";import"./index-CtzF-D60.js";import"./form-group-Cai7TlWJ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Drjjlf9N.js";import"./label-Z58zP1tT.js";import"./modal-CehYCqMP.js";import"./process-list-CGZSrz7X.js";import"./radio-button-CfiXaEF6.js";import"./range-slider-6r50nwPO.js";import"./search-BjUh2JlI.js";import"./select-v7nb6AkK.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D8j5nbHS.js";import"./step-indicator-CcO3oml5.js";import"./summary-box-YvpXG5nZ.js";import"./tag-OTrlQ7_Y.js";import"./text-area-BMhIGIyW.js";import"./time-picker-DQcFw9pV.js";import"./tooltip-C8stFGcz.js";import"./index-8bL-dlWE.js";import"./iframe-CyoivpIQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjtC_FDd.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-LC7cK7JR.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
