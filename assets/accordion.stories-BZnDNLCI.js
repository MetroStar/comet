import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-DVEIJfEP.js";import"./banner-L_qKzIPP.js";import"./button-DXVMCrjf.js";import"./button-group-CBvnVt9C.js";import"./checkbox-Ddfr57Uw.js";import"./combo-box-CI7x9s1w.js";import"./date-picker-CoWC-1CX.js";import"./error-messages-_lA7co94.js";import"./index-DMq29h7f.js";import"./form-group-DBfTQOoS.js";import"./helper-text-BRA2CuHl.js";import"./icon-CvlDciaN.js";import"./label-0qqEdO1f.js";import"./modal-ClEmu25p.js";import"./process-list--vnKh0Db.js";import"./radio-button-Cj0gMxsy.js";import"./range-slider-BjPol11t.js";import"./search-CNoK7X24.js";import"./select-Db4_XT5f.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dii6R-e4.js";import"./step-indicator-CM1to4bc.js";import"./summary-box-BX_zfgOi.js";import"./tag-D9XQSjDb.js";import"./text-area-BGtrx8-Q.js";import"./time-picker-CgWuxmNu.js";import"./tooltip-Cz_Zx_0T.js";import"./index-B4ubeI7x.js";import"./iframe-C4vNGh7L.js";import"./index-CRJmehm-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DZVpAW7Q.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
