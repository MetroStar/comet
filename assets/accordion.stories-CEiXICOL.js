import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BVE92j7Y.js";import"./banner-DzZkBSl7.js";import"./button-CE7abiYA.js";import"./button-group-BrbB8tWM.js";import"./checkbox-BO3qrbWe.js";import"./combo-box-DSpel1I0.js";import"./date-picker-DnfiAagl.js";import"./error-messages-DQwxQ3pR.js";import"./index-DFLXBMl_.js";import"./form-group-BG3QBWOY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BNRbLw1d.js";import"./label-Z58zP1tT.js";import"./modal-CTkWVRbb.js";import"./process-list-nPCUeE35.js";import"./radio-button-CfNv50JC.js";import"./range-slider-Dv7KAwgE.js";import"./search-BxPVF8-1.js";import"./select-ClGZrASO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DSCRVd9o.js";import"./step-indicator-OiSvWuYN.js";import"./summary-box-DfkEA6A5.js";import"./tag-gzpwfcFc.js";import"./text-area-GvWAvMOP.js";import"./time-picker-CNu7S1ey.js";import"./tooltip-wvfn-vUQ.js";import"./index-Ce1QA_hM.js";import"./iframe-B0hIjtUu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiDsKGxm.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAMhbk1n.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
