import{j as a}from"./jsx-runtime-u17CrQMm.js";import{a as t,R as d}from"./radio-button-QrmP5zSj.js";import"./index-DNkV8ViH.js";import"./iframe-DLzeRc9X.js";import"./preload-helper-PPVm8Dsz.js";import"./form-group-B_GsfbZZ.js";import"./label-Z58zP1tT.js";import"./helper-text-C5i0f8Ge.js";import"./error-messages-DQwxQ3pR.js";const h={title:"USWDS/Forms/Radio Button",component:t,argTypes:{id:{required:!0},name:{required:!0}}},r={args:{id:"lorem-radio-button",name:"lorem-radio-button",label:"Lorem",value:"lorem",isTile:!1,defaultChecked:!0},render:e=>a.jsx(t,{id:e.id,name:e.name,label:e.label,value:e.value,defaultChecked:e.defaultChecked,isTile:e.isTile})},s=["Lorem","Ipsum","Dolor","Sit"],o={args:{id:"radio-group",name:"radio-group",data:s.map((e,l)=>({label:e,value:e.toLowerCase(),defaultChecked:l===0})),areTiles:!1,required:!1,label:"Options",helperText:"Select from the list below"},render:e=>a.jsx(d,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'lorem-radio-button',
    name: 'lorem-radio-button',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true
  },
  render: (args: RadioButtonProps) => <RadioButton id={args.id} name={args.name} label={args.label} value={args.value} defaultChecked={args.defaultChecked} isTile={args.isTile} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const T=["Single","Group"];export{o as Group,r as Single,T as __namedExportsOrder,h as default};
