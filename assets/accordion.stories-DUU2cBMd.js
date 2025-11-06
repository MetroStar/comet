import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BMCWheN3.js";import"./banner-DXxf7j2A.js";import"./button-BG13cfhe.js";import"./button-group-DH510XBM.js";import"./checkbox-BIksfjMa.js";import"./combo-box-CmNtbie_.js";import"./date-picker-BqFBLI8_.js";import"./error-messages-_lA7co94.js";import"./index-DIfJFMD2.js";import"./form-group-DMa1BOSH.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkVszG8e.js";import"./label-0qqEdO1f.js";import"./modal-DFz5w_J3.js";import"./process-list-DWibcUhP.js";import"./radio-button-BxaYVlRc.js";import"./range-slider-DjynCvMR.js";import"./search-yWSQaSjk.js";import"./select-44mgK95P.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprjmmdW.js";import"./step-indicator-DRL7Hrms.js";import"./summary-box-AVnlpaHk.js";import"./tag-C903ahvi.js";import"./text-area-7d5d4_iK.js";import"./time-picker-ZCAyf2CU.js";import"./tooltip-zZvGvgsP.js";import"./index-4BetU0rA.js";import"./iframe-CBtXVCyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGD1TKzu.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xNoA7Lun.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
