import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-Ydl4yuFa.js";import"./banner-YXUMuJIv.js";import"./button-BXofz8FW.js";import"./button-group-wT7CE2SS.js";import"./checkbox-lDKxywH-.js";import"./combo-box-DEbXvHRM.js";import"./date-picker-EBge1TGV.js";import"./error-messages-DQwxQ3pR.js";import"./index-BwkW8ppQ.js";import"./form-group-CsY8k-GF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-bizhDbD6.js";import"./label-Z58zP1tT.js";import"./modal-DY_daRfu.js";import"./process-list-B87QmEjq.js";import"./radio-button-BUM_kFdV.js";import"./range-slider-CslxIG2u.js";import"./search-BRFeYrNH.js";import"./select-CcFRbJmc.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DTDxIAJf.js";import"./step-indicator-BNbKgUG7.js";import"./summary-box-CRdqISwY.js";import"./tag-DvzQhobB.js";import"./text-area-CO0wGerf.js";import"./time-picker-D_d0pSFG.js";import"./tooltip-P0HHh0Fa.js";import"./index-h9M4Wkah.js";import"./iframe-D2kwuCXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYA2rnwY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-TaCLZyBF.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
