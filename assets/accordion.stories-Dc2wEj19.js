import{i as e}from"./preload-helper-xPQekRTU.js";import{R as t}from"./iframe-BIDTTI5V.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{I as r,L as i,t as a}from"./src-BBppIzF4.js";var o,s,c,l,u,d;e((()=>{t(),a(),o=n(),s={title:`USWDS/Accordion`,component:r,argTypes:{id:{required:!0}}},c={args:{id:`accordion-1`,allowMultiSelect:!1,items:[{id:`item-1`,label:`Item 1`,children:(0,o.jsx)(`span`,{children:`Hello`}),expanded:!0},{id:`item-2`,label:`Item 2`,children:(0,o.jsx)(`span`,{children:`World`}),expanded:!1}]},render:e=>(0,o.jsx)(r,{...e})},l={args:{id:`accordion-2`,allowMultiSelect:!0,items:[{id:`item-1`,label:`Item 1`,children:(0,o.jsx)(`span`,{children:`Hello`}),expanded:!1},{id:`item-2`,label:`Item 2`,children:(0,o.jsx)(`span`,{children:`World`}),expanded:!1}]},render:e=>(0,o.jsx)(r,{...e})},u={args:{id:`accordion-3`,allowMultiSelect:!1},render:e=>(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(i,{id:`item-1`,label:`Item 1`,expanded:!0,children:(0,o.jsx)(`span`,{children:`Hello`})}),(0,o.jsx)(i,{id:`item-2`,label:`Item 2`,expanded:!1,children:(0,o.jsx)(`span`,{children:`World`})})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`,`MultiSelect`,`WithChildren`]}))();export{c as Default,l as MultiSelect,u as WithChildren,d as __namedExportsOrder,s as default};