import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-C_C78in7.js";import"./banner-BgiZqRlo.js";import"./button-tylLr4j2.js";import"./button-group-D6cjC1Vo.js";import"./checkbox-B6VyoAKp.js";import"./combo-box-CDNvDZLL.js";import"./date-picker-DgQlJTCw.js";import"./error-messages-DQwxQ3pR.js";import"./index-CdaV37ys.js";import"./form-group-DoY8VT3L.js";import"./helper-text-C5i0f8Ge.js";import"./icon-hzBFwrUe.js";import"./label-Z58zP1tT.js";import"./modal-DLp_famE.js";import"./process-list-DQ8FW98J.js";import"./radio-button-C3p27onq.js";import"./range-slider-Cluh4832.js";import"./search-BMB22s0V.js";import"./select-Dff7ZjSm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DtkG30B7.js";import"./step-indicator-CDua6ht5.js";import"./summary-box-CvRPeRE0.js";import"./tag-AOv4Bgzm.js";import"./text-area-BKiL77Z2.js";import"./time-picker-CernixGi.js";import"./tooltip-KHEIxHIJ.js";import"./index-91E-2JV-.js";import"./iframe-BTUuw-2g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrsoTcc4.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CgEYPfm3.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
