import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-CfPzz4nf.js";import"./banner-BH6B8BCY.js";import"./button-CLevJzxR.js";import"./button-group-D3Ocr3Rb.js";import"./checkbox-Cc0V9sR6.js";import"./combo-box-TU4qt16Y.js";import"./date-picker-DSHGeHYl.js";import"./error-messages-DQwxQ3pR.js";import"./index-BsEblj0h.js";import"./form-group-BzmrJy3n.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D2Nqola7.js";import"./label-Z58zP1tT.js";import"./modal-DfDUd-Mt.js";import"./process-list-UharPk4r.js";import"./radio-button-D4Pk_Rgl.js";import"./range-slider-sQ5Tj5dy.js";import"./search-CFh4K7A8.js";import"./select-Kk8L1GnB.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D0bVirTZ.js";import"./step-indicator-z7wQapN2.js";import"./summary-box-BkJ1H1hK.js";import"./tag-ZOpGD9hG.js";import"./text-area-ynEclwl4.js";import"./time-picker-Bb-pazU6.js";import"./tooltip-Cg_p7vCm.js";import"./index-BdG5vuSr.js";import"./iframe-D2HmkBK5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dyunygu1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CucFHm0F.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
