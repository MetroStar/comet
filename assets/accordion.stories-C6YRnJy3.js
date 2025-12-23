import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-Dmb-ffh0.js";import"./banner-DZNvfklf.js";import"./button-DzGNrXYT.js";import"./button-group-Zzh5VRIu.js";import"./checkbox-LlIZ6WAZ.js";import"./combo-box-Bv6VcdXU.js";import"./date-picker-CqoH8LeI.js";import"./error-messages-DQwxQ3pR.js";import"./index-52vSm_bk.js";import"./form-group-DhnpQ1gO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-4RfGqqIJ.js";import"./label-Z58zP1tT.js";import"./modal-DwhLWDUa.js";import"./process-list-DGxHCMjD.js";import"./radio-button-gMU8aMNI.js";import"./range-slider-Dq4GAh67.js";import"./search-B2MV1myA.js";import"./select-BjUKF4It.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DV2fzf3r.js";import"./step-indicator-DdaAIm1x.js";import"./summary-box-CoPcq3HL.js";import"./tag-B4n4yz8K.js";import"./text-area-ClvojZeY.js";import"./time-picker-G362YD_L.js";import"./tooltip-Dq6tjxuf.js";import"./index-oUbQcmvJ.js";import"./iframe-OQEP8bq4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYS2UhCj.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DC7B1Qf2.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
