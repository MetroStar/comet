import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-C1RLpG-G.js";import"./banner-DH6QgulV.js";import"./button-Db3wJyCy.js";import"./button-group-BulGe28K.js";import"./checkbox-BaI_YfOl.js";import"./combo-box-Dv1PMtXX.js";import"./date-picker-xedVW46W.js";import"./error-messages-DQwxQ3pR.js";import"./index-fFA3JtzK.js";import"./form-group-BJHd_lpP.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D0rONDc8.js";import"./label-Z58zP1tT.js";import"./modal-Dm0WuDuZ.js";import"./process-list-lqJb71JE.js";import"./radio-button-BpLLDlkk.js";import"./range-slider-BlBZgRTH.js";import"./search-CJ_zW23S.js";import"./select-_nNbbpjO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BtL5UUxM.js";import"./step-indicator-CLKds4-I.js";import"./summary-box-Crr76biK.js";import"./tag-CdXv5j6I.js";import"./text-area-CE2uSnwT.js";import"./time-picker-Dho_ucHb.js";import"./tooltip-Cy1CeqH9.js";import"./index-CDjQvKj7.js";import"./iframe-DmczAETD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Duk1BxEa.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C9EfC_2_.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
