import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{i as r,n as i,t as a}from"./select-BQ4PDwA3.js";var o,s,c,l,u,d,f;e((()=>{t(),r(),o=n(),s={title:`USWDS/Forms/Select`,component:a,argTypes:{id:{required:!0},name:{required:!0},required:{control:`boolean`},disabled:{control:`boolean`}}},c=[`Lorem`,`Ipsum`,`Dolor`,`Sit`].map(e=>({value:e.toLowerCase(),label:e})),l={args:{id:`select-1`,name:`select-1`,options:c,required:!1,label:`Options`,helperText:`Select from the list below`,disabled:!1},render:e=>(0,o.jsx)(a,{...e})},u={args:{id:`select-1`,name:`select-1`,options:c,required:!1,label:`Options`,helperText:`Select from the list below`,errors:`This field is required`},render:e=>(0,o.jsx)(a,{...e})},d={args:{id:`select-2`,name:`select-2`,label:`Options`,helperText:`Select from the list below`},render:e=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(i,{value:`1`,label:`Item 1`}),(0,o.jsx)(i,{value:`2`,label:`Item 2`}),(0,o.jsx)(i,{value:`3`,label:`Item 3`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    name: 'select-1',
    options,
    required: false,
    label: 'Options',
    helperText: 'Select from the list below',
    disabled: false
  },
  render: (args: SelectProps) => <Select {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    name: 'select-1',
    options,
    required: false,
    label: 'Options',
    helperText: 'Select from the list below',
    errors: 'This field is required'
  },
  render: (args: SelectProps) => <Select {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-2',
    name: 'select-2',
    label: 'Options',
    helperText: 'Select from the list below'
  },
  render: (args: SelectProps) => <Select {...args}>
      <SelectOption value="1" label="Item 1" />
      <SelectOption value="2" label="Item 2" />
      <SelectOption value="3" label="Item 3" />
    </Select>
}`,...d.parameters?.docs?.source}}},f=[`Standard`,`WithErrors`,`WithChildren`]}))();export{l as Standard,d as WithChildren,u as WithErrors,f as __namedExportsOrder,s as default};