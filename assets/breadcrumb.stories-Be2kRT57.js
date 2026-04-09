import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{C as r,t as i,w as a}from"./src-BZKMcYWZ.js";var o,s,c,l,u,d;e((()=>{t(),i(),o=n(),s={title:`USWDS/Breadcrumb`,component:r,argTypes:{id:{required:!0}}},c=e=>alert(`Called with: `+JSON.stringify(e)),l={args:{id:`breadcrumb-1`,items:[{name:`Rome`,path:`/rome`},{name:`Greece`,path:`/greece`}],current:`Italy`,action:c},render:e=>(0,o.jsx)(r,{...e})},u={args:{id:`breadcrumb-2`,current:`Italy`,action:c},render:e=>(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(a,{name:`Rome`,path:`/rome`,action:e.action}),(0,o.jsx)(a,{name:`Greece`,path:`/greece`,action:e.action})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'breadcrumb-1',
    items: [{
      name: 'Rome',
      path: '/rome'
    }, {
      name: 'Greece',
      path: '/greece'
    }],
    current: 'Italy',
    action
  },
  render: (args: BreadcrumbProps) => <Breadcrumb {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'breadcrumb-2',
    current: 'Italy',
    action
  },
  render: (args: BreadcrumbProps) => <Breadcrumb {...args}>
      <BreadcrumbItem name="Rome" path="/rome" action={args.action} />
      <BreadcrumbItem name="Greece" path="/greece" action={args.action} />
    </Breadcrumb>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithChildren`]}))();export{l as Default,u as WithChildren,d as __namedExportsOrder,s as default};