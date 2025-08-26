import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-2NAaAm4f.js";import"./banner-DmWNFVX0.js";import"./button-DMGkmuRe.js";import"./button-group-BpVsvt9f.js";import"./checkbox-QXWsWq5b.js";import"./combo-box-D7opi152.js";import"./date-picker-osE87iLd.js";import"./error-messages-_lA7co94.js";import"./index-CuYmxFJ7.js";import"./form-group-DW4A1vPS.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bne4nQ7L.js";import"./label-0qqEdO1f.js";import"./modal-v_LYecBD.js";import"./process-list-DPSQSkDw.js";import"./radio-button-hq8NkZqJ.js";import"./range-slider-C33b7wPA.js";import"./search-CC-BpXF1.js";import"./select-XWhpf6Eu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ArWdNQH1.js";import"./step-indicator-BvTe9s74.js";import"./summary-box-D0YY31pd.js";import"./tag-CkMOhSU3.js";import"./text-area-C1M1QosD.js";import"./time-picker-DufTLboP.js";import"./tooltip-Cm8FGCCc.js";import"./index-D_G_8yR1.js";import"./iframe-feKrdQjw.js";import"./index-Bq7ANQAG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BSKCmYzr.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
