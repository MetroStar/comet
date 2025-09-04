import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as o,a}from"./select-gcVG_7Gs.js";import"./index-BVkfGhKT.js";import"./iframe-BsmwYSRM.js";import"./form-group-DRHOEtVf.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";const f={title:"USWDS/Forms/Select",component:o,argTypes:{id:{required:!0},name:{required:!0},required:{control:"boolean"},disabled:{control:"boolean"}}},i=["Lorem","Ipsum","Dolor","Sit"],n=i.map(e=>({value:e.toLowerCase(),label:e})),t={args:{id:"select-1",name:"select-1",options:n,required:!1,label:"Options",helperText:"Select from the list below",disabled:!1},render:e=>r.jsx(o,{...e})},s={args:{id:"select-1",name:"select-1",options:n,required:!1,label:"Options",helperText:"Select from the list below",errors:"This field is required"},render:e=>r.jsx(o,{...e})},l={args:{id:"select-2",name:"select-2",label:"Options",helperText:"Select from the list below"},render:e=>r.jsxs(o,{...e,children:[r.jsx(a,{value:"1",label:"Item 1"}),r.jsx(a,{value:"2",label:"Item 2"}),r.jsx(a,{value:"3",label:"Item 3"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const g=["Standard","WithErrors","WithChildren"];export{t as Standard,l as WithChildren,s as WithErrors,g as __namedExportsOrder,f as default};
