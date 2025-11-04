import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./text-area-DviweLtB.js";import"./index-D7-mVSiM.js";import"./iframe-CCHYt90f.js";import"./preload-helper-PPVm8Dsz.js";import"./form-group-CCYs-ltk.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";const g={title:"USWDS/Forms/Text Area",component:s,argTypes:{id:{required:!0},name:{required:!0},rows:{control:"number"},required:{control:"boolean"},validationStatus:{control:"select",options:["error","success"]},disabled:{control:"boolean"}}},r={args:{id:"text-area-1",name:"text-area-1",rows:5,required:!1,label:"Text Area",helperText:"Enter your text",disabled:!1},render:e=>o.jsx(s,{...e})},a={args:{id:"text-area-2",name:"text-area-2",defaultValue:"A long time ago in a galaxy far, far away....",label:"Text Area"},render:e=>o.jsx(s,{...e})},t={args:{id:"text-area-3",name:"text-area-3",required:!0,label:"Text Area",helperText:"Enter your text",errors:"This field is required",validationStatus:"error"},render:e=>o.jsx(s,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'text-area-2',
    name: 'text-area-2',
    defaultValue: 'A long time ago in a galaxy far, far away....',
    label: 'Text Area'
  },
  render: (args: TextAreaProps) => <TextArea {...args} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["Standard","WithDefaultValue","WithErrors"];export{r as Standard,a as WithDefaultValue,t as WithErrors,T as __namedExportsOrder,g as default};
