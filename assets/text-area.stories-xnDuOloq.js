import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{n as r,t as i}from"./text-area-DDaQ_yt7.js";var a,o,s,c,l,u;e((()=>{t(),r(),a=n(),o={title:`USWDS/Forms/Text Area`,component:i,argTypes:{id:{required:!0},name:{required:!0},rows:{control:`number`},required:{control:`boolean`},validationStatus:{control:`select`,options:[`error`,`success`]},disabled:{control:`boolean`}}},s={args:{id:`text-area-1`,name:`text-area-1`,rows:5,required:!1,label:`Text Area`,helperText:`Enter your text`,disabled:!1},render:e=>(0,a.jsx)(i,{...e})},c={args:{id:`text-area-2`,name:`text-area-2`,defaultValue:`A long time ago in a galaxy far, far away....`,label:`Text Area`},render:e=>(0,a.jsx)(i,{...e})},l={args:{id:`text-area-3`,name:`text-area-3`,required:!0,label:`Text Area`,helperText:`Enter your text`,errors:`This field is required`,validationStatus:`error`},render:e=>(0,a.jsx)(i,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'text-area-1',
    name: 'text-area-1',
    rows: 5,
    required: false,
    label: 'Text Area',
    helperText: 'Enter your text',
    disabled: false
  },
  render: (args: TextAreaProps) => <TextArea {...args} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'text-area-2',
    name: 'text-area-2',
    defaultValue: 'A long time ago in a galaxy far, far away....',
    label: 'Text Area'
  },
  render: (args: TextAreaProps) => <TextArea {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'text-area-3',
    name: 'text-area-3',
    required: true,
    label: 'Text Area',
    helperText: 'Enter your text',
    errors: 'This field is required',
    validationStatus: 'error'
  },
  render: (args: TextAreaProps) => <TextArea {...args} />
}`,...l.parameters?.docs?.source}}},u=[`Standard`,`WithDefaultValue`,`WithErrors`]}))();export{s as Standard,c as WithDefaultValue,l as WithErrors,u as __namedExportsOrder,o as default};