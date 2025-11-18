import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-hzsZ3yNS.js";import"./banner-DkIwXkOU.js";import"./button-Dk8wHbcB.js";import"./button-group-BTjygAXg.js";import"./checkbox-NisSa0r1.js";import"./combo-box-CFVhT9gX.js";import"./date-picker-CmknYkJM.js";import"./error-messages-DQwxQ3pR.js";import"./index-9j484q7r.js";import"./form-group-_DXArboa.js";import"./helper-text-C5i0f8Ge.js";import"./icon-5iiv7Ua4.js";import"./label-Z58zP1tT.js";import"./modal-m0qzC8Um.js";import"./process-list-DN565JV4.js";import"./radio-button-Dw7Gb0xo.js";import"./range-slider-DwIDWau-.js";import"./search-CJEmPhN0.js";import"./select-DBGTIg3Z.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CocnM4md.js";import"./step-indicator-_QX7SUDc.js";import"./summary-box-gIEos8kd.js";import"./tag-B-gIfjeS.js";import"./text-area-CXDLVR1_.js";import"./time-picker-B1YLTgxm.js";import"./tooltip-_J1saDjG.js";import"./index-D55o9aet.js";import"./iframe-nl7dBz9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-j-nxxJDD.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B3nRdOI3.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
