import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-CJqRdRnA.js";import"./banner-CDze5A-o.js";import"./button-Cfsih1JM.js";import"./button-group-C7oR13Zx.js";import"./checkbox-DdvE8Qv0.js";import"./combo-box-MLHL-BJJ.js";import"./date-picker-CzeDYvZ6.js";import"./error-messages-_lA7co94.js";import"./index-Cd6JFthD.js";import"./form-group-B0crHuAm.js";import"./helper-text-BRA2CuHl.js";import"./icon-_aWJ0mlv.js";import"./label-0qqEdO1f.js";import"./modal-0FNrf6C-.js";import"./process-list-BXqeNRaz.js";import"./radio-button-Nt_CKpgW.js";import"./range-slider-C7Ny-QWb.js";import"./search-KLEJmmQN.js";import"./select-CAlDhwkC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-C3x03OFs.js";import"./step-indicator-CDd_u7Xd.js";import"./summary-box-Bu6NGAGG.js";import"./tag-LtQ0fvOs.js";import"./text-area-DnBgkfMa.js";import"./time-picker-ByDgOAtB.js";import"./tooltip-CA57b6l2.js";import"./index-Sl1xyaxe.js";import"./iframe-B7oP2X8t.js";import"./index-BmmP-Ded.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EhFKVBHe.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
