import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-B0ZfyW9e.js";import"./banner-CvO_kA9U.js";import"./button-D7jU-0wo.js";import"./button-group-Ck4w57sK.js";import"./checkbox-Rf_MEj7T.js";import"./combo-box-Bei1E7lW.js";import"./date-picker-BEGXPp7B.js";import"./error-messages-_lA7co94.js";import"./index-BUvbtEYw.js";import"./form-group-DDtB50L7.js";import"./helper-text-BRA2CuHl.js";import"./icon-DFGXQkrf.js";import"./label-0qqEdO1f.js";import"./modal-D9Aokmq8.js";import"./process-list-DMBWm_Vb.js";import"./radio-button-B7gLfpCg.js";import"./range-slider-CDYpIlxh.js";import"./search-7cG6apXU.js";import"./select-BvWJKS2s.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BNU5Kn0X.js";import"./step-indicator-D_mYB-E_.js";import"./summary-box-D0yEzeCv.js";import"./tag-BmGS_nkG.js";import"./text-area-CqKit1ly.js";import"./time-picker-_qB9ISkx.js";import"./tooltip-CWctn93i.js";import"./index-DuiSlnjk.js";import"./iframe-L8I4kFBs.js";import"./index-C7U72UuM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D-I1emzh.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
