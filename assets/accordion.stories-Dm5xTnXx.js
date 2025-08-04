import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-DqHQ9AC6.js";import"./banner-CKUJPF1-.js";import"./button-ByK7N37x.js";import"./button-group-DisPr8Ll.js";import"./checkbox-ZBX-3sk9.js";import"./combo-box-D1B40_Ed.js";import"./date-picker-Dk0zHLIH.js";import"./error-messages-_lA7co94.js";import"./index-eGJhptUH.js";import"./form-group-DYKjDP8T.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bs7luVDn.js";import"./label-0qqEdO1f.js";import"./modal-C_aHr31j.js";import"./process-list-BrnP9Mlx.js";import"./radio-button-C4ZsFajo.js";import"./range-slider-CRQ9fPP5.js";import"./search-DzgeHfgH.js";import"./select-DJpgwHeu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DBdkujVI.js";import"./step-indicator-Bwjm-2R5.js";import"./summary-box-BaPYr4D4.js";import"./tag-DDOzNfXQ.js";import"./text-area-1YDixWzp.js";import"./time-picker-DgYDaV_B.js";import"./tooltip-BzHK-RTl.js";import"./index-Bk9_ws4F.js";import"./iframe-7518lDOu.js";import"./index-DENiOEZQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dz9jb3-2.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
