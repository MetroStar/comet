import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-CX_3fU8G.js";import"./banner-BX1AEE79.js";import"./button-BRZIQbIO.js";import"./button-group-DhizJLA4.js";import"./checkbox-DIx_kXh1.js";import"./combo-box-DC_XAVf9.js";import"./date-picker-BgdkMevD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BEJPuihF.js";import"./form-group-1FQ6ZL-b.js";import"./helper-text-C5i0f8Ge.js";import"./icon-IlFqEd48.js";import"./label-Z58zP1tT.js";import"./modal-aFbxMgIk.js";import"./process-list-CQ1coxJ7.js";import"./radio-button-GUxkA6VJ.js";import"./range-slider-BXYo9qBg.js";import"./search-BDj3JnRH.js";import"./select-B3omePZx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B_dSrAsx.js";import"./step-indicator-BD3Ashid.js";import"./summary-box-Dcai1aDP.js";import"./tag-CAOLYjFJ.js";import"./text-area-jjmMtOfo.js";import"./time-picker-BooG6I3G.js";import"./tooltip-DqvkubAg.js";import"./index-Dt1OuEIl.js";import"./iframe-DrYRFDkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BktZxXXP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJeDAx_i.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
