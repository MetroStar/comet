import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-D6PxWkEz.js";import"./banner-5PnvCMeN.js";import"./button-C6DDMlzm.js";import"./button-group-D2NUrE1E.js";import"./checkbox-97CiXItc.js";import"./combo-box-CqKpeFyZ.js";import"./date-picker-9XfVeNZj.js";import"./error-messages-_lA7co94.js";import"./index-Dc5iOzpo.js";import"./form-group-C37VFKvz.js";import"./helper-text-BRA2CuHl.js";import"./icon-ldTZd2PJ.js";import"./label-0qqEdO1f.js";import"./modal-CLRIHiE2.js";import"./process-list-Dv3imPAG.js";import"./radio-button-CQt1YoIZ.js";import"./range-slider-CnELvyde.js";import"./search-CYLnDm6f.js";import"./select-g8Uw7pfh.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CBI-9iTh.js";import"./step-indicator-C3Nqgbfm.js";import"./summary-box-D4YHkNEC.js";import"./tag-DrpHvKAI.js";import"./text-area-ANeT3eEi.js";import"./time-picker-BphduNSw.js";import"./tooltip-DwNK3jut.js";import"./index-DUKoxV3s.js";import"./iframe-D7rw0kbP.js";import"./index-C9q_5GSN.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-SMKFmbVV.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
