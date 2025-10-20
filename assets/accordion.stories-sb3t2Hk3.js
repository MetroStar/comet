import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BnXqzq9O.js";import"./banner-CIm70-HC.js";import"./button-Bgbky9UI.js";import"./button-group-CnvT5Qfh.js";import"./checkbox-173Vdv0m.js";import"./combo-box-BdYMw-6J.js";import"./date-picker-BQBfZpRp.js";import"./error-messages-_lA7co94.js";import"./index-jJyYyykc.js";import"./form-group-ChVWy-76.js";import"./helper-text-BRA2CuHl.js";import"./icon-CnfzXKqa.js";import"./label-0qqEdO1f.js";import"./modal-0_0oVfxj.js";import"./process-list-ooW3J2zX.js";import"./radio-button-BsKcdTWI.js";import"./range-slider-BWXXwryW.js";import"./search-MSiSwyBF.js";import"./select-H1kjN1Jj.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-gQCW04zT.js";import"./step-indicator-Ihi_S23D.js";import"./summary-box-kvJhmgjB.js";import"./tag-CWv2uEhb.js";import"./text-area-DGTyj5BG.js";import"./time-picker-BdiIZ-Qd.js";import"./tooltip-BKo9Xnb2.js";import"./index-CXGoz_dM.js";import"./iframe-BRh0L7-v.js";import"./index-BgSr64T9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BNnnE5vI.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
