import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-DRxn63zm.js";import"./banner-Bnov42sP.js";import"./button-B01WG78W.js";import"./button-group-B0VNZ7Kk.js";import"./checkbox-1gRFiwoj.js";import"./combo-box-Ome0bXkk.js";import"./date-picker-C-nJthU5.js";import"./error-messages-pdO9TZPZ.js";import"./index-C47c4gZi.js";import"./form-group-SapkwOh7.js";import"./helper-text-BRA2CuHl.js";import"./icon-BMqwZoq1.js";import"./label-0qqEdO1f.js";import"./modal-B8fKVaUm.js";import"./process-list-BYeeENcZ.js";import"./radio-button-Ce8j0-sQ.js";import"./range-slider-mv0vohDp.js";import"./search-fZqQ8d8m.js";import"./select-DzKTuOAL.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CauIfpW6.js";import"./step-indicator-CHqa5mhF.js";import"./summary-box-CeavNL2b.js";import"./tag-CtaVZdOp.js";import"./text-area-KGydQoKk.js";import"./time-picker-BKsNE-Eo.js";import"./tooltip-Cix9W9yK.js";import"./index-CHO8AZYk.js";import"./iframe-ItqDXnoe.js";import"./index-Dpnjqa6C.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOy_U2gq.js";import"./active-element-BuxAly_Z.js";const oe={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};var l,d,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var m,p,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,x,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const ie=["Default","MultiSelect","WithChildren"];export{o as Default,i as MultiSelect,t as WithChildren,ie as __namedExportsOrder,oe as default};
