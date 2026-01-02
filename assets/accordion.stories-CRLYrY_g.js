import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-8pzfOB_A.js";import"./banner-807EuhAw.js";import"./button-BDmVrewr.js";import"./button-group-BpG60Bcj.js";import"./checkbox-CRo-bLYB.js";import"./combo-box-xOSHeDpi.js";import"./date-picker-iGTXRuob.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bo9BpfTX.js";import"./form-group--j3vJMLd.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CwZlaL-J.js";import"./label-Z58zP1tT.js";import"./modal-BYOriTvt.js";import"./process-list-Czejjo2U.js";import"./radio-button-DS7TYGvv.js";import"./range-slider-DftJyvpa.js";import"./search-BJc94_-5.js";import"./select-CopyUol0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-I6f_MaFE.js";import"./step-indicator-DWHprvTt.js";import"./summary-box-BchfMT9C.js";import"./tag-zxYU5urs.js";import"./text-area-Cfzus3my.js";import"./time-picker-zTLx_dm2.js";import"./tooltip-DfU1Hy0M.js";import"./index-BtRDYpIf.js";import"./iframe-Sgzi56p1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NOZ5o7zP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DS-Y6bb9.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
