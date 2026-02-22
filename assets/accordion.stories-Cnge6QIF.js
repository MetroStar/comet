import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-CzoVEYc_.js";import"./banner-DW0yElUw.js";import"./button-bZ5Mp_AU.js";import"./button-group-D0lWyXML.js";import"./checkbox-3CDfTcVY.js";import"./combo-box-AJ0FExB2.js";import"./date-picker-DKItmH8g.js";import"./error-messages-DQwxQ3pR.js";import"./index-DHHCfnS1.js";import"./form-group-B8g8yeM1.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C3FchpV-.js";import"./label-Z58zP1tT.js";import"./modal-Brj4-T_g.js";import"./process-list-Cc3I22IW.js";import"./radio-button-5YXeP0HL.js";import"./range-slider-DIrxMbkG.js";import"./search-ePFsEUvt.js";import"./select-DJU_fcta.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-0hF62P37.js";import"./step-indicator-Bk8eT84t.js";import"./summary-box-B38BLNY4.js";import"./tag-CLDP7JT-.js";import"./text-area-C2UJ0jwX.js";import"./time-picker-CotNdUu4.js";import"./tooltip-BVlyVB0A.js";import"./index-BBTpoaCK.js";import"./iframe-BZfy-MOI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHvMlG60.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4iV9IVu.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
