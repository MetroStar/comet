import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BdW5CQyz.js";import"./banner-C6irt5yh.js";import"./button-Cq7i4H52.js";import"./button-group-B1vas01y.js";import"./checkbox-D-uCv-kq.js";import"./combo-box-BAn8IQj_.js";import"./date-picker-Cpa9mYFW.js";import"./error-messages-DQwxQ3pR.js";import"./index-BcrKG5Hi.js";import"./form-group-CEqucKs6.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CDSXv68S.js";import"./label-Z58zP1tT.js";import"./modal-CiD3J_dY.js";import"./process-list-DsKEl7ZV.js";import"./radio-button-1b9u9ASV.js";import"./range-slider-1QPLkZfK.js";import"./search-Jk9E_xgr.js";import"./select-CfVwR03_.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-kEI83GIN.js";import"./step-indicator-CECnrlTP.js";import"./summary-box-BTyAB9YR.js";import"./tag-DxN_SjvT.js";import"./text-area-DEutEBFv.js";import"./time-picker-VV5_xO_L.js";import"./tooltip-CynE1fwd.js";import"./index-DDfvyXav.js";import"./iframe-Cdpn9PYs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-De4lQ0Y0.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BRZPKXJE.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
