import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DSl4auMC.js";import"./banner-CEZKUkbF.js";import"./button-B7gNPYIL.js";import"./button-group-Brorikwu.js";import"./checkbox-eWG9SJdV.js";import"./combo-box-BsFocY2f.js";import"./date-picker-DZDMadHV.js";import"./error-messages-DQwxQ3pR.js";import"./index-CYtU26vE.js";import"./form-group-DXXdEMrs.js";import"./helper-text-C5i0f8Ge.js";import"./icon-uymm9zyE.js";import"./label-Z58zP1tT.js";import"./modal-D8oOiZoK.js";import"./process-list-CUm5Q4da.js";import"./radio-button-ClH9r-YV.js";import"./range-slider-DXbD-WkO.js";import"./search-CVMveQck.js";import"./select-Dm9gk4f-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DNWbVdiF.js";import"./step-indicator-BVn4ZNzg.js";import"./summary-box-D7Fun5SH.js";import"./tag-BNT1hXJ0.js";import"./text-area-DLgrCPMA.js";import"./time-picker-BBv860sW.js";import"./tooltip-Bg5a6Fm-.js";import"./index-cRcqcJEf.js";import"./iframe-CUCs5BC9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLD1Bu8G.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C2r2cwpe.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
