import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BQeTkK1M.js";import"./banner-BZszu9Hy.js";import"./button-C1_RgaQE.js";import"./button-group-B14JmUJ1.js";import"./checkbox-D3z24Vel.js";import"./combo-box-DbeRSt4E.js";import"./date-picker-CnIzSQKS.js";import"./error-messages-_lA7co94.js";import"./index-BKjg4RhJ.js";import"./form-group-8TLLYdhI.js";import"./helper-text-BRA2CuHl.js";import"./icon-BJTLgqOL.js";import"./label-0qqEdO1f.js";import"./modal-9N1QXayz.js";import"./process-list-DJRNsDCz.js";import"./radio-button-D9V3ZUqb.js";import"./range-slider-BNntapAU.js";import"./search-i8PX9Grh.js";import"./select-Dk-O5ttt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B1Xc6g-U.js";import"./step-indicator-DUKM1WXK.js";import"./summary-box-B7jql9xw.js";import"./tag-DW9bMkE3.js";import"./text-area-MPsxISJ-.js";import"./time-picker-DAIr41Lx.js";import"./tooltip-DdBtyx6p.js";import"./index-DU2c9KRp.js";import"./iframe-ChG3UuR9.js";import"./index-BlziFMf9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7_Jpop9.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Q=["Default","MultiSelect","WithChildren"];export{o as Default,i as MultiSelect,t as WithChildren,Q as __namedExportsOrder,N as default};
