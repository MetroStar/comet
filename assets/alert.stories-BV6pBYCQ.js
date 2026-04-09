import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{T as r,t as i}from"./src-BZKMcYWZ.js";var a,o,s,c,l,u;e((()=>{t(),i(),a=n(),o={title:`USWDS/Alert`,component:r,argTypes:{id:{required:!0},type:{control:`select`,required:!0}}},s={args:{id:`alert-1`,type:`info`,slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:``},render:e=>(0,a.jsx)(r,{...e,children:`This is the alert body`})},c={args:{id:`alert-close`,type:`info`,slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:`Alert with close button`,onClose:()=>{console.log(`Alert closed`)}},render:e=>(0,a.jsx)(r,{...e,children:`This is the alert body`})},l={args:{id:`alert-2`,type:`info`,slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:``,body:(0,a.jsx)(`span`,{children:`This is the alert body as a prop`})},render:e=>(0,a.jsx)(r,{...e,children:`This is the alert body`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-1',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: ''
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-close',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: true,
    heading: 'Alert with close button',
    onClose: () => {
      // eslint-disable-next-line no-console
      console.log('Alert closed');
    }
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-2',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: '',
    body: <span>This is the alert body as a prop</span>
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`AllowClose`,`WithBody`]}))();export{c as AllowClose,s as Default,l as WithBody,u as __namedExportsOrder,o as default};