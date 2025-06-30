import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as o,a}from"./select-3USV_5y9.js";import"./index-Do0kNAB-.js";import"./iframe-YKUTTlTG.js";import"./form-group-D1BkIUNZ.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";const w={title:"USWDS/Forms/Select",component:o,argTypes:{id:{required:!0},name:{required:!0},required:{control:"boolean"},disabled:{control:"boolean"}}},f=["Lorem","Ipsum","Dolor","Sit"],h=f.map(e=>({value:e.toLowerCase(),label:e})),t={args:{id:"select-1",name:"select-1",options:h,required:!1,label:"Options",helperText:"Select from the list below",disabled:!1},render:e=>r.jsx(o,{...e})},s={args:{id:"select-1",name:"select-1",options:h,required:!1,label:"Options",helperText:"Select from the list below",errors:"This field is required"},render:e=>r.jsx(o,{...e})},l={args:{id:"select-2",name:"select-2",label:"Options",helperText:"Select from the list below"},render:e=>r.jsxs(o,{...e,children:[r.jsx(a,{value:"1",label:"Item 1"}),r.jsx(a,{value:"2",label:"Item 2"}),r.jsx(a,{value:"3",label:"Item 3"})]})};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,S,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const W=["Standard","WithErrors","WithChildren"];export{t as Standard,l as WithChildren,s as WithErrors,W as __namedExportsOrder,w as default};
