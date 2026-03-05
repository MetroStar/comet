import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BkcizWb6.js";import"./banner-DweQbrQc.js";import"./button-XBMUcWoC.js";import"./button-group-BrIUjRCR.js";import"./checkbox-BvZeZHtM.js";import"./combo-box-Bj433j_h.js";import"./date-picker-z6Q7eOM2.js";import"./error-messages-DQwxQ3pR.js";import"./index-Cnn-YZcV.js";import"./form-group-CG_NYfoS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cc1dzDtb.js";import"./label-Z58zP1tT.js";import"./modal-Cpe_cfLH.js";import"./process-list-CvTJfKYq.js";import"./radio-button-DUmMrbPy.js";import"./range-slider-gxORhVag.js";import"./search-NuBoJI84.js";import"./select-Bzt55IHF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CxJW4m1g.js";import"./step-indicator-BDNx4Eop.js";import"./summary-box-CpxqpbYb.js";import"./tag-CbEMar7b.js";import"./text-area-blUsZJJZ.js";import"./time-picker-CtBf-17B.js";import"./tooltip-BwdNh6of.js";import"./index-oP94_y1q.js";import"./iframe-DZGaHezm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oFd3Ri_j.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dv1nB6qQ.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
