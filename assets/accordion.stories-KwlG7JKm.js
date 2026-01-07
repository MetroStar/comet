import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-D8h51JS1.js";import"./banner-DCDmr0G8.js";import"./button-ijgBrMFA.js";import"./button-group-B0UmdrOD.js";import"./checkbox-C11XdatN.js";import"./combo-box-ByBwJrwY.js";import"./date-picker-yq7UOVP1.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW_M1et5.js";import"./form-group-D1HeFVB2.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D34rc_xL.js";import"./label-Z58zP1tT.js";import"./modal-QVZYOgd8.js";import"./process-list-BuU7wWlY.js";import"./radio-button-DyalhMhA.js";import"./range-slider-C1FbPf95.js";import"./search-D1Ve7K6E.js";import"./select-D496jgZF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CHUyH9R-.js";import"./step-indicator-A5ivSDeW.js";import"./summary-box-CXscmp-j.js";import"./tag-BqbH648p.js";import"./text-area-CsLFuSaj.js";import"./time-picker-CpqDNJ7b.js";import"./tooltip-DPDnsQ2S.js";import"./index-Bb_jRSga.js";import"./iframe-DAElSkcd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpyczfRn.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CD1kXvG_.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
