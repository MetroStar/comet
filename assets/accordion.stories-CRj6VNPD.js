import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BcAjHaPe.js";import"./banner-Bb9tgDMu.js";import"./button-DHPf3ZSy.js";import"./button-group-DXkD3Odw.js";import"./checkbox-CWxi48TQ.js";import"./combo-box-BgWuh_WY.js";import"./date-picker-CY9wn-JD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BeU7Me-t.js";import"./form-group-030VDF0V.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CtOfy-k_.js";import"./label-Z58zP1tT.js";import"./modal-D415_Ju7.js";import"./process-list-B5_A_qL3.js";import"./radio-button-iLLUIu9s.js";import"./range-slider-B-Hf8WYx.js";import"./search-297e9Y7D.js";import"./select-P2zO11OG.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BBLMX3ph.js";import"./step-indicator-VzIYVCPL.js";import"./summary-box-i_aO1v2Q.js";import"./tag-BURryAb1.js";import"./text-area-CrhVCt3o.js";import"./time-picker-CvagkXJf.js";import"./tooltip-BhAJp-EY.js";import"./index-BdXVIPuw.js";import"./iframe-B31pvYvh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCMedrEY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-A9mp8xSv.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
