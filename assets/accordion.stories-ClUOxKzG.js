import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a}from"./table-MPKe8Ila.js";import"./banner-DPBvQbSo.js";import"./button-Bf0VrC9L.js";import"./button-group-SzaEBtpA.js";import"./checkbox-_Wt8UjXW.js";import"./combo-box-B4psjhG_.js";import"./date-picker-DU9UqJRM.js";import"./error-messages-pdO9TZPZ.js";import"./index-rGsKvddx.js";import"./form-group-00NMt7vW.js";import"./helper-text-BRA2CuHl.js";import"./icon-D_ZN9vDs.js";import"./label-0qqEdO1f.js";import"./modal-BNbINjhK.js";import"./process-list-Cll0kTKP.js";import"./radio-button-CSPa9WI2.js";import"./range-slider-D_pBXwXC.js";import"./search-Bhw3b0NB.js";import"./select-BacdfqYt.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DSxMQNmj.js";import"./step-indicator-1zoU-WBF.js";import"./summary-box-CTYMzxjT.js";import"./tag-C9cxY06M.js";import"./text-area-hSK-s690.js";import"./time-picker-X_lbIc1r.js";import"./tooltip-DPiLySq6.js";import"./index-Bo3ISOMl.js";import"./iframe-BlSZsq3b.js";import"./index--9xU-wIR.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bfh4D05J.js";import"./active-element-BuxAly_Z.js";const oe={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};var l,d,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
