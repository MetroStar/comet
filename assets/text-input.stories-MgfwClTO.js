import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{c as r,t as i}from"./src-BZKMcYWZ.js";import{t as a}from"./icon-C70HHeNi.js";var o,s,c,l,u,d,f,p,m;e((()=>{t(),i(),o=n(),s={title:`USWDS/Forms/Text Input`,component:r,argTypes:{mask:{control:`select`},validationStatus:{control:`select`,options:[`error`,`success`]},required:{control:`boolean`},disabled:{control:`boolean`}}},c={args:{id:`input-standard`,type:`text`,required:!1,label:`Input`,helperText:`Enter your input`,disabled:!1},render:e=>(0,o.jsx)(r,{...e})},l={args:{id:`input-errors`,type:`text`,required:!0,label:`Input`,helperText:`Enter your input`,errors:`This field is required`,validationStatus:`error`},render:e=>(0,o.jsx)(r,{...e})},u={args:{id:`input-mask`,type:`text`,mask:`ssn`,label:`Social Security Number`,helperText:`Enter your SSN`},render:e=>(0,o.jsx)(r,{...e})},d={args:{id:`input-prefix`,type:`text`,label:`Input with Prefix`,helperText:`Enter a credit card number`,prefix:(0,o.jsx)(a,{id:`credit-card-icon`,type:`credit_card`}),"aria-label":`Input credit card`},render:e=>(0,o.jsx)(r,{...e})},f={args:{id:`input-suffix`,type:`number`,label:`Input with Suffix`,helperText:`Enter a weight in pounds`,suffix:`lbs`,"aria-label":`Input pounds`},render:e=>(0,o.jsx)(r,{...e})},p={args:{id:`input-change-event`,type:`text`,label:`Input with Change Event`,helperText:`Type something to see an alert`,placeholder:`Will alert on change...`,onChange:e=>alert(e.target.value)},render:e=>(0,o.jsx)(r,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-standard',
    type: 'text',
    required: false,
    label: 'Input',
    helperText: 'Enter your input',
    disabled: false
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-errors',
    type: 'text',
    required: true,
    label: 'Input',
    helperText: 'Enter your input',
    errors: 'This field is required',
    validationStatus: 'error'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-mask',
    type: 'text',
    mask: 'ssn',
    label: 'Social Security Number',
    helperText: 'Enter your SSN'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-prefix',
    type: 'text',
    label: 'Input with Prefix',
    helperText: 'Enter a credit card number',
    prefix: <Icon id="credit-card-icon" type="credit_card" />,
    'aria-label': 'Input credit card'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-suffix',
    type: 'number',
    label: 'Input with Suffix',
    helperText: 'Enter a weight in pounds',
    suffix: 'lbs',
    'aria-label': 'Input pounds'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-change-event',
    type: 'text',
    label: 'Input with Change Event',
    helperText: 'Type something to see an alert',
    placeholder: 'Will alert on change...',
    onChange: (e: any) => alert(e.target.value)
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...p.parameters?.docs?.source}}},m=[`Standard`,`WithErrors`,`WithMask`,`WithPrefix`,`WithSuffix`,`WithChangeEvent`]}))();export{c as Standard,p as WithChangeEvent,l as WithErrors,u as WithMask,d as WithPrefix,f as WithSuffix,m as __namedExportsOrder,s as default};