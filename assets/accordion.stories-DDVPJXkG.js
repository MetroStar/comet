import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-BlnceWZT.js";import"./banner-DdYHPnzv.js";import"./button-M0p4z2np.js";import"./button-group-CTzsh1Qs.js";import"./checkbox-BLWy1ewy.js";import"./combo-box-DAnMy2Zd.js";import"./date-picker-BinjPKZk.js";import"./error-messages-_lA7co94.js";import"./index-DHy8gSfp.js";import"./form-group-DN1OID7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-ooEVvdPp.js";import"./label-0qqEdO1f.js";import"./modal-JsDx-7FJ.js";import"./process-list-eg8YhyYR.js";import"./radio-button-CXGOkgST.js";import"./range-slider-BXGET5_y.js";import"./search-B5IuNjKS.js";import"./select-DY3XXkwD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-De5kiDiV.js";import"./step-indicator-lKJzCiiT.js";import"./summary-box-C_2Rbq_I.js";import"./tag-DCGDkX5e.js";import"./text-area-BGhE39VC.js";import"./time-picker-DT7HzhKL.js";import"./tooltip-CLhFKuL2.js";import"./index-DDrUjC2G.js";import"./iframe-DJ-niyiJ.js";import"./index-Ctl6FX5J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-tJEc6IQE.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
