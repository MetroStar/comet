import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BkSI5mbc.js";import"./banner-CTZ2PdPw.js";import"./button-CsYmh0vm.js";import"./button-group-BPJ6fggK.js";import"./checkbox-DhCPixBd.js";import"./combo-box-BXgqhUEs.js";import"./date-picker-C9E8UeDk.js";import"./error-messages-_lA7co94.js";import"./index-CI7UOko6.js";import"./form-group-CCYs-ltk.js";import"./helper-text-BRA2CuHl.js";import"./icon-GNqBduXf.js";import"./label-0qqEdO1f.js";import"./modal-dzF0TLRm.js";import"./process-list-Dq101AFb.js";import"./radio-button-Do9Rh2zd.js";import"./range-slider-B5r5rPxC.js";import"./search-DhE-ggo7.js";import"./select-1e1qJ9Ro.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-W4oZm-Rd.js";import"./step-indicator-DSv3EHu1.js";import"./summary-box-BS8sVZlh.js";import"./tag-Cq7MI9LS.js";import"./text-area-DviweLtB.js";import"./time-picker-SOqVqpwV.js";import"./tooltip-CWN-T5j-.js";import"./index-ByTD_-5Y.js";import"./iframe-CCHYt90f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7-mVSiM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DNXJughs.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
