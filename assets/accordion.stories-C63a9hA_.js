import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-sgBBeN_3.js";import"./banner-BlKhwcl-.js";import"./button-s6X5UBaR.js";import"./button-group-B1aWv9gb.js";import"./checkbox-cnQ_-peT.js";import"./combo-box-ByFKHUsq.js";import"./date-picker-CdtWHcRU.js";import"./error-messages-_lA7co94.js";import"./index-CRpSyyh9.js";import"./form-group-B-Pr4jGu.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDcUgKz8.js";import"./label-0qqEdO1f.js";import"./modal-B-Ar_YiJ.js";import"./process-list-B1j8-mm9.js";import"./radio-button-B5LIr0wS.js";import"./range-slider-CCd_gb87.js";import"./search-B2v06REB.js";import"./select-CFmg9oUl.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-T3keRwyR.js";import"./step-indicator-BjOG0FUs.js";import"./summary-box-Dep7O2aS.js";import"./tag-CvARMcmu.js";import"./text-area-ktJJJxPq.js";import"./time-picker-Dpbrbtdg.js";import"./tooltip-Ce_IMZUp.js";import"./index-BrPJmFEP.js";import"./iframe-CUeiGFJS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hkmjj3pC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUB1n4uP.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
