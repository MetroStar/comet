import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-CEC6VR9e.js";import"./banner-BkIJS_6z.js";import"./button-Cz7RgtoX.js";import"./button-group-Bv-TDQ2J.js";import"./checkbox-Bb6cbyCa.js";import"./combo-box-QTBgiBcd.js";import"./date-picker-k5bZck_k.js";import"./error-messages-_lA7co94.js";import"./index-DHOAzmtN.js";import"./form-group-BWHxpag0.js";import"./helper-text-BRA2CuHl.js";import"./icon-CltekIt2.js";import"./label-0qqEdO1f.js";import"./modal-CDqm1nCU.js";import"./process-list-DEBo6nte.js";import"./radio-button-CKLsf2Y8.js";import"./range-slider-BVh0FSE4.js";import"./search-SVFGc8u5.js";import"./select-VUMvBmOF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BFo_LLtW.js";import"./step-indicator-DhkvXvbl.js";import"./summary-box-BDJ68lGd.js";import"./tag-BwQanvXK.js";import"./text-area-Ce8nxo5M.js";import"./time-picker-C8zu-Q1o.js";import"./tooltip-DeexD_cA.js";import"./index-D82vRiCQ.js";import"./iframe-B2NCm2Rb.js";import"./index-C-iG_L9p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Mg8z5oX4.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
