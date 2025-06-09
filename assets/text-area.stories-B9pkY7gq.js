import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./text-area-CtxSlzmP.js";import"./index-DqlK7rFw.js";import"./iframe-D0wlIprT.js";import"./form-group-KdJstwiz.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";const y={title:"USWDS/Forms/Text Area",component:s,argTypes:{id:{required:!0},name:{required:!0},rows:{control:"number"},required:{control:"boolean"},validationStatus:{control:"select",options:["error","success"]},disabled:{control:"boolean"}}},r={args:{id:"text-area-1",name:"text-area-1",rows:5,required:!1,label:"Text Area",helperText:"Enter your text",disabled:!1},render:e=>o.jsx(s,{...e})},a={args:{id:"text-area-2",name:"text-area-2",defaultValue:"A long time ago in a galaxy far, far away...."},render:e=>o.jsx(s,{...e})},t={args:{id:"text-area-3",name:"text-area-3",required:!0,label:"Text Area",helperText:"Enter your text",errors:"This field is required",validationStatus:"error"},render:e=>o.jsx(s,{...e})};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,u,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'text-area-2',
    name: 'text-area-2',
    defaultValue: 'A long time ago in a galaxy far, far away....'
  },
  render: (args: TextAreaProps) => <TextArea {...args} />
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["Standard","WithDefaultValue","WithErrors"];export{r as Standard,a as WithDefaultValue,t as WithErrors,E as __namedExportsOrder,y as default};
