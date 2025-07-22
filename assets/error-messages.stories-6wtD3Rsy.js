import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{E as n}from"./error-messages-_lA7co94.js";const c={title:"USWDS/Forms/Error Messages",component:n},e={args:{id:"errors-1",errors:["This is an error."]},render:s=>r.jsx(n,{...s})},a={args:{id:"errors-2",errors:["This is an error.","This is another error."]},render:s=>r.jsx(n,{...s})},o={args:{id:"errors-3"},render:s=>r.jsxs(n,{...s,children:[r.jsx("span",{className:"usa-error-message",children:"Error 1"}),r.jsx("span",{className:"usa-error-message",children:"Error 2"}),r.jsx("span",{className:"usa-error-message",children:"Error 3"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'errors-1',
    errors: ['This is an error.']
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args} />
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'errors-2',
    errors: ['This is an error.', 'This is another error.']
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'errors-3'
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args}>
      <span className="usa-error-message">Error 1</span>
      <span className="usa-error-message">Error 2</span>
      <span className="usa-error-message">Error 3</span>
    </ErrorMessages>
}`,...o.parameters?.docs?.source}}};const d=["Standard","MultipleErrors","WithChildren"];export{a as MultipleErrors,e as Standard,o as WithChildren,d as __namedExportsOrder,c as default};
