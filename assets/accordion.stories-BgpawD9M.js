import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-EDJB2sTo.js";import"./banner-BOpU37qp.js";import"./button-DBKb0ewM.js";import"./button-group-Bh92E-bS.js";import"./checkbox-Dw6UHJ51.js";import"./combo-box-CSSj876a.js";import"./date-picker-CrF8QLeb.js";import"./error-messages-_lA7co94.js";import"./index-Dz3KGBJ1.js";import"./form-group-D61Ut1VC.js";import"./helper-text-BRA2CuHl.js";import"./icon-C2GMX_Yd.js";import"./label-0qqEdO1f.js";import"./modal-SzqUbwHE.js";import"./process-list-DWkHGGyu.js";import"./radio-button-CJrfb0RL.js";import"./range-slider-Dclr-Ayn.js";import"./search-D8XGy_cg.js";import"./select-Dp05dyOy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DrY8ZEeD.js";import"./step-indicator-QljTgDVY.js";import"./summary-box-ubPFwvIt.js";import"./tag-CTmDgqa8.js";import"./text-area-BF6Qq-LB.js";import"./time-picker-D2RHFb7y.js";import"./tooltip-CkbpW6i9.js";import"./index-CR8NEJay.js";import"./iframe-vQD5sTXz.js";import"./index-fgMZaG23.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CWfwrV3c.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
