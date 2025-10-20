import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as l,a as t}from"./checkbox-B95JovIm.js";import"./index-VfhVxxkQ.js";import"./iframe-DAkoUa8c.js";import"./form-group-DBzbMrNY.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";const x={title:"USWDS/Forms/Checkbox",component:l,argTypes:{id:{required:!0},name:{required:!0}}},r={args:{id:"lorem-checkbox",name:"lorem-checkbox",label:"Lorem",value:"lorem",isTile:!1,defaultChecked:!0},render:e=>a.jsx(l,{id:e.id,name:e.name,label:e.label,value:e.value,defaultChecked:e.defaultChecked,isTile:e.isTile})},n=["Lorem","Ipsum","Dolor","Sit"],o={args:{id:"checkbox-group",name:"checkbox-group",data:n.map((e,s)=>({label:e,value:e.toLowerCase(),defaultChecked:s===0})),areTiles:!1,required:!1,label:"Options",helperText:"Select from the list below"},render:e=>a.jsx(t,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'lorem-checkbox',
    name: 'lorem-checkbox',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true
  },
  render: (args: CheckboxProps) => <Checkbox id={args.id} name={args.name} label={args.label} value={args.value} defaultChecked={args.defaultChecked} isTile={args.isTile} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-group',
    name: 'checkbox-group',
    data: loremWords.map((word, wordIndex) => ({
      label: word,
      value: word.toLowerCase(),
      defaultChecked: wordIndex === 0
    })),
    areTiles: false,
    required: false,
    label: 'Options',
    helperText: 'Select from the list below'
  },
  render: (args: CheckboxGroupProps) => <CheckboxGroup {...args} />
}`,...o.parameters?.docs?.source}}};const k=["Single","Group"];export{o as Group,r as Single,k as __namedExportsOrder,x as default};
