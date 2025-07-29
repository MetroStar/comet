import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-Bb6U9UN-.js";import"./banner-9IEHsLzf.js";import"./button-B2zgU3gw.js";import"./button-group-CuV8b-Jt.js";import"./checkbox-BEI5JEAd.js";import"./combo-box-CQxpp1rn.js";import"./date-picker-BwF3ZQWf.js";import"./error-messages-_lA7co94.js";import"./index-B2IyjUDW.js";import"./form-group-D7o0mHcs.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDMZOkTr.js";import"./label-0qqEdO1f.js";import"./modal-BWU4uOwE.js";import"./process-list-DLQVUbiM.js";import"./radio-button-DiQ8zHvZ.js";import"./range-slider-B1JHoTLM.js";import"./search-Dzffyc8z.js";import"./select-neAeqmJy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BC3cl4Xt.js";import"./step-indicator-DLuCjkFb.js";import"./summary-box-DTZd7klS.js";import"./tag-DN6lamzf.js";import"./text-area-DOXKJPbL.js";import"./time-picker-B4nbaApt.js";import"./tooltip-BnEISZxP.js";import"./index-CprWhq2V.js";import"./iframe-BYzdcdZ1.js";import"./index-CxoXSAzG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DgAcE3a1.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
