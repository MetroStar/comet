import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-CvmPfSUC.js";import"./banner-BwEE1fCf.js";import"./button-DnGnzYJl.js";import"./button-group-LTdk4OWd.js";import"./checkbox-e4Y_ckhj.js";import"./combo-box-BaXlIVuK.js";import"./date-picker-DJdBt-9d.js";import"./error-messages-_lA7co94.js";import"./index-BVo_kvWB.js";import"./form-group-8jYj3Y7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-BnuOR3E6.js";import"./label-0qqEdO1f.js";import"./modal-CyphDcoJ.js";import"./process-list-DC0p2f6t.js";import"./radio-button-RU0tDYN1.js";import"./range-slider-CsBLh5Zx.js";import"./search-Di5fDXID.js";import"./select-D7Qnylr_.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CY56Emxt.js";import"./step-indicator-22trubn0.js";import"./summary-box-CVwyDQy5.js";import"./tag-BET6tKi0.js";import"./text-area-DmXx35cn.js";import"./time-picker-CBInagW_.js";import"./tooltip-C_Y0L0LB.js";import"./index-K_UqQySj.js";import"./iframe-BWSz9So8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_fBeR743.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BQL2wJBc.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
