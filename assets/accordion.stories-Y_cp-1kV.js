import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-CXEDt_IX.js";import"./banner-DD5k-zia.js";import"./button-iFbrQHz5.js";import"./button-group-DmlLR6Ch.js";import"./checkbox-D5awqogb.js";import"./combo-box-faxTxgNA.js";import"./date-picker-e0prf2AC.js";import"./error-messages-DQwxQ3pR.js";import"./index-BFbCUD2X.js";import"./form-group-WXs29FIM.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BHDT1NP-.js";import"./label-Z58zP1tT.js";import"./modal-D14ptv-N.js";import"./process-list-2VbCpAnh.js";import"./radio-button-Dk8Mk2UZ.js";import"./range-slider-cFlpjLRU.js";import"./search-CP0HC-Ul.js";import"./select-CMdnoFND.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BARPFDdc.js";import"./step-indicator-3EBTDo0B.js";import"./summary-box-DAOtTa8X.js";import"./tag-C8SuK6DB.js";import"./text-area-CTybm8Is.js";import"./time-picker-CcsjNbhV.js";import"./tooltip-bk-dUcpD.js";import"./index-BMYzY_Pu.js";import"./iframe-BZXS5M1A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWwuGuar.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxdN8t19.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
