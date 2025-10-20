import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-CMDmZj7c.js";import"./banner-BAz2G--5.js";import"./button-B9OaNNhT.js";import"./button-group-DlaVFbxh.js";import"./checkbox-C28N4a1k.js";import"./combo-box-BvakVT0f.js";import"./date-picker-UsI544BE.js";import"./error-messages-_lA7co94.js";import"./index-Bkp4uBDp.js";import"./form-group-Bpk2fpaH.js";import"./helper-text-BRA2CuHl.js";import"./icon-cxkbKgKE.js";import"./label-0qqEdO1f.js";import"./modal-BQkULiVL.js";import"./process-list-Bss4hcvS.js";import"./radio-button-CEz13IeH.js";import"./range-slider-BpGVvSsE.js";import"./search-Cin5Af7e.js";import"./select-BlI-nL0Q.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-LVKe454Y.js";import"./step-indicator-C4JBCoYw.js";import"./summary-box-DnFH13SG.js";import"./tag-CneVrYpY.js";import"./text-area-D_fB21ck.js";import"./time-picker-CSKB0_Nb.js";import"./tooltip-Y544ZiXZ.js";import"./index-o8AzxdkW.js";import"./iframe-CeHEORJQ.js";import"./index-Da7q7RYZ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-4Bao6GuI.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
