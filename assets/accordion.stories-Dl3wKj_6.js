import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-B2_7QTih.js";import"./banner-CB9iV2Es.js";import"./button-BbKRgqlt.js";import"./button-group-CakS15NU.js";import"./checkbox-jSUtNPxL.js";import"./combo-box-B2Abj-tx.js";import"./date-picker-3NLl3BU_.js";import"./error-messages-_lA7co94.js";import"./index-CD1vgVfL.js";import"./form-group-Df0vG0OS.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDRbc-Od.js";import"./label-0qqEdO1f.js";import"./modal-DZyUjUka.js";import"./process-list-DRc4oMF1.js";import"./radio-button-BzTiBx4p.js";import"./range-slider-ux1Bdl2a.js";import"./search-CENs0X1h.js";import"./select-DOrzXlhC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DeGKKjT7.js";import"./step-indicator-DhRqkIt4.js";import"./summary-box-C4Nw8Ivw.js";import"./tag--Mz2xj8r.js";import"./text-area-Dxh8xs4l.js";import"./time-picker-BZQdmWCi.js";import"./tooltip-CCdLEe-A.js";import"./index-fhRGG_ox.js";import"./iframe-CPcXRZAp.js";import"./index-CFllaHPr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYUEugg6.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
