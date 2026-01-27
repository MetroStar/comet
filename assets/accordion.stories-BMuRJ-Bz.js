import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-DJmLJWvg.js";import"./banner-BUZwlTq1.js";import"./button-C4QfSxW0.js";import"./button-group-ieTsNMrX.js";import"./checkbox-BTlZxQ4F.js";import"./combo-box-DU30cfkl.js";import"./date-picker-CpHMGSi4.js";import"./error-messages-DQwxQ3pR.js";import"./index-B00UuIqu.js";import"./form-group-VLBEVhA0.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CTFc-y2-.js";import"./label-Z58zP1tT.js";import"./modal-B9LiO5_D.js";import"./process-list-xhix8Wuu.js";import"./radio-button-BhXyRUXt.js";import"./range-slider-DrXaDfu4.js";import"./search-C0nIEegv.js";import"./select-BMaCLBfp.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DjdkxkUE.js";import"./step-indicator-BaunrL7u.js";import"./summary-box-DOA8Q_xK.js";import"./tag-0raYCf6x.js";import"./text-area-O1BkgWFk.js";import"./time-picker-ZOMr_7mu.js";import"./tooltip-ajWB9iB8.js";import"./index-x-BpOtc8.js";import"./iframe-Ct8SnmH1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWUUcN-5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B89yV2G1.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
