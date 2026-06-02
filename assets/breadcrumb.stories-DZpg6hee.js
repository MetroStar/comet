import{i as e}from"./preload-helper-xPQekRTU.js";import{R as t}from"./iframe-BIDTTI5V.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{M as r,j as i,t as a}from"./src-BBppIzF4.js";var o,s,c,l,u,d;e((()=>{t(),a(),o=n(),s={title:`USWDS/Breadcrumb`,component:i,argTypes:{id:{required:!0}}},c=e=>alert(`Called with: `+JSON.stringify(e)),l={args:{id:`breadcrumb-1`,items:[{name:`Rome`,path:`/rome`},{name:`Greece`,path:`/greece`}],current:`Italy`,action:c},render:e=>(0,o.jsx)(i,{...e})},u={args:{id:`breadcrumb-2`,current:`Italy`,action:c},render:e=>(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(r,{name:`Rome`,path:`/rome`,action:e.action}),(0,o.jsx)(r,{name:`Greece`,path:`/greece`,action:e.action})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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