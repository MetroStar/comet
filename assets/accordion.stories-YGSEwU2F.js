import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DBM-rGfp.js";import"./banner-DIDB5AZZ.js";import"./button-CuJ08vmO.js";import"./button-group-D-MjqxLe.js";import"./checkbox-BxmFBsme.js";import"./combo-box-DUHBtXaj.js";import"./date-picker-BCezd6Bu.js";import"./error-messages-DQwxQ3pR.js";import"./index-aT39rhBA.js";import"./form-group-CvVwrbvR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CB1t2izj.js";import"./label-Z58zP1tT.js";import"./modal-D_ak00hh.js";import"./process-list-CjLrlXdK.js";import"./radio-button-Dk1l3M4e.js";import"./range-slider-ud6TP_Wq.js";import"./search-Bo9VOzvv.js";import"./select-YaEncsiE.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-C1_MfARb.js";import"./step-indicator-BLKVxSQA.js";import"./summary-box-fglBdzAE.js";import"./tag-B1iarCZg.js";import"./text-area-SV8dYrCz.js";import"./time-picker-D6V8Wd0x.js";import"./tooltip-d8p4Ljze.js";import"./index-DO_WIL-g.js";import"./iframe-Bwmg5-4I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsph7FLZ.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-XxeCWWQm.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
