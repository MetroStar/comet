import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{E as n}from"./error-messages-pdO9TZPZ.js";const M={title:"USWDS/Forms/Error Messages",component:n},e={args:{id:"errors-1",errors:["This is an error."]},render:s=>r.jsx(n,{...s})},a={args:{id:"errors-2",errors:["This is an error.","This is another error."]},render:s=>r.jsx(n,{...s})},o={args:{id:"errors-3"},render:s=>r.jsxs(n,{...s,children:[r.jsx("span",{className:"usa-error-message",children:"Error 1"}),r.jsx("span",{className:"usa-error-message",children:"Error 2"}),r.jsx("span",{className:"usa-error-message",children:"Error 3"})]})};var i,t,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'errors-1',
    errors: ['This is an error.']
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args} />
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'errors-2',
    errors: ['This is an error.', 'This is another error.']
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args} />
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,l,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'errors-3'
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args}>
      <span className="usa-error-message">Error 1</span>
      <span className="usa-error-message">Error 2</span>
      <span className="usa-error-message">Error 3</span>
    </ErrorMessages>
}`,...(E=(l=o.parameters)==null?void 0:l.docs)==null?void 0:E.source}}};const x=["Standard","MultipleErrors","WithChildren"];export{a as MultipleErrors,e as Standard,o as WithChildren,x as __namedExportsOrder,M as default};
