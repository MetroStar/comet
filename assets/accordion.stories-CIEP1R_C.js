import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-qipDyWWW.js";import"./banner-Dbu76H_h.js";import"./button-BMfJYqv5.js";import"./button-group-C2oE1fke.js";import"./checkbox-DV3FgYFD.js";import"./combo-box-DDkfMCEb.js";import"./date-picker-0NFNJK6U.js";import"./error-messages-pdO9TZPZ.js";import"./index-Uy9L_0xv.js";import"./form-group-B_64fuat.js";import"./helper-text-BRA2CuHl.js";import"./icon-BVVlaEti.js";import"./label-0qqEdO1f.js";import"./modal-CR3V5z44.js";import"./process-list-DIpvwoK3.js";import"./radio-button-C1yJv6Ul.js";import"./range-slider-DBEKSDkg.js";import"./search-V-FTtime.js";import"./select-B0FkRYsk.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-B2zEUvDJ.js";import"./step-indicator-CDE04cMN.js";import"./summary-box-BQOeikKb.js";import"./tag-Di9uSiTh.js";import"./text-area-qn4mo8GQ.js";import"./time-picker-C5iYe6-E.js";import"./tooltip-DkS2g9OU.js";import"./index-BLKK0fUp.js";import"./iframe-DLFxhOfQ.js";import"./index-DbdQ-_yw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DnM5t5zf.js";import"./active-element-BuxAly_Z.js";const oe={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};var l,d,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
