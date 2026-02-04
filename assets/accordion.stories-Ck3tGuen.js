import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-B6OBZokY.js";import"./banner-Cp6CDsju.js";import"./button-CvBQ6Viu.js";import"./button-group-DT0MZYrc.js";import"./checkbox-BBNcEMVN.js";import"./combo-box-CPB8WVB1.js";import"./date-picker-CrR9zuUM.js";import"./error-messages-DQwxQ3pR.js";import"./index-S1EC9aY5.js";import"./form-group-C7OpfHVI.js";import"./helper-text-C5i0f8Ge.js";import"./icon-n5MNutTh.js";import"./label-Z58zP1tT.js";import"./modal-qxex8s-5.js";import"./process-list-_br4BDud.js";import"./radio-button-Bl1ELBoa.js";import"./range-slider-VCYG_aBg.js";import"./search-D3zv8uYS.js";import"./select-3ZPcC7oD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-MPwN2Qjg.js";import"./step-indicator-C-aqlDqc.js";import"./summary-box-D-cFSNJC.js";import"./tag-ChjVmO5T.js";import"./text-area-DXK22P_c.js";import"./time-picker-BqCyy_JL.js";import"./tooltip-obxolWCE.js";import"./index-SCBz9OJi.js";import"./iframe-DPE7MYZp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQggcgWB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B0FZfZup.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
