import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-Bse5DExo.js";import"./banner-BwO0HiA4.js";import"./button-DiHoCjUb.js";import"./button-group-CsEIu6gv.js";import"./checkbox-DC3XQgFH.js";import"./combo-box-CrVnplkd.js";import"./date-picker-ao6BA4Jq.js";import"./error-messages-DQwxQ3pR.js";import"./index-BfIDrPCA.js";import"./form-group-BYOZKLJh.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DPOheGDS.js";import"./label-Z58zP1tT.js";import"./modal-D-P-giTm.js";import"./process-list-BYk2qEP5.js";import"./radio-button-D6dovua3.js";import"./range-slider-BM6BzcML.js";import"./search-O5uHTu-n.js";import"./select-BUCNjJ4o.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DZJPNjAO.js";import"./step-indicator-7qKQZOBY.js";import"./summary-box-D5bHgkv8.js";import"./tag-DXQHCdsJ.js";import"./text-area-DqvxoD8F.js";import"./time-picker-DJ8eVvNZ.js";import"./tooltip-CkP7cUnO.js";import"./index-C0ruH5vH.js";import"./iframe-Cu46YZU-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt3gd5Dn.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dj0TSj9e.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
