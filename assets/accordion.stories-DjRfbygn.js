import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-walHDM1X.js";import"./banner-D6OWsJH6.js";import"./button-B7htGxce.js";import"./button-group-DPRKc4CK.js";import"./checkbox-gJbOdNV_.js";import"./combo-box-qTwjyg9R.js";import"./date-picker-DEqYSMys.js";import"./error-messages-DQwxQ3pR.js";import"./index-IzqfyfZA.js";import"./form-group-DaebfseS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CYZuVbXq.js";import"./label-Z58zP1tT.js";import"./modal-UTT_pOU9.js";import"./process-list-FACfqpED.js";import"./radio-button-8Hppabgw.js";import"./range-slider-cvo6pp4o.js";import"./search-JwXuI3O4.js";import"./select-BLtfPvgx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BJY1MeDm.js";import"./step-indicator-B38Y5p7y.js";import"./summary-box-KQva4Gki.js";import"./tag-C2j4csul.js";import"./text-area-C9cwn9DQ.js";import"./time-picker-DQ38ClCl.js";import"./tooltip-C7QNwUXe.js";import"./index-BVzeUMco.js";import"./iframe-Co_ow-pI.js";import"./preload-helper-PPVm8Dsz.js";import"./index--DG9ymCz.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-5cdN7wMr.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
