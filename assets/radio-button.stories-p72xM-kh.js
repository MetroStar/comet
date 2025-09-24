import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as t,R as d}from"./radio-button-BzTiBx4p.js";import"./index-CFllaHPr.js";import"./iframe-CPcXRZAp.js";import"./form-group-Df0vG0OS.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";const b={title:"USWDS/Forms/Radio Button",component:t,argTypes:{id:{required:!0},name:{required:!0}}},r={args:{id:"lorem-radio-button",name:"lorem-radio-button",label:"Lorem",value:"lorem",isTile:!1,defaultChecked:!0},render:e=>o.jsx(t,{id:e.id,name:e.name,label:e.label,value:e.value,defaultChecked:e.defaultChecked,isTile:e.isTile})},s=["Lorem","Ipsum","Dolor","Sit"],a={args:{id:"radio-group",name:"radio-group",data:s.map((e,l)=>({label:e,value:e.toLowerCase(),defaultChecked:l===0})),areTiles:!1,required:!1,label:"Options",helperText:"Select from the list below"},render:e=>o.jsx(d,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'lorem-radio-button',
    name: 'lorem-radio-button',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true
  },
  render: (args: RadioButtonProps) => <RadioButton id={args.id} name={args.name} label={args.label} value={args.value} defaultChecked={args.defaultChecked} isTile={args.isTile} />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'radio-group',
    name: 'radio-group',
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
  render: (args: RadioButtonGroupProps) => <RadioButtonGroup {...args} />
}`,...a.parameters?.docs?.source}}};const h=["Single","Group"];export{a as Group,r as Single,h as __namedExportsOrder,b as default};
