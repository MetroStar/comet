import{n as e}from"./chunk-DnJy8xQt.js";import{L as t}from"./iframe-pVO7hzh_.js";import{t as n}from"./jsx-runtime-BpX3lQ6F.js";import{n as r,r as i,t as a}from"./radio-button-BROD-Mtl.js";var o,s,c,l,u,d;e((()=>{t(),i(),o=n(),s={title:`USWDS/Forms/Radio Button`,component:a,argTypes:{id:{required:!0},name:{required:!0}}},c={args:{id:`lorem-radio-button`,name:`lorem-radio-button`,label:`Lorem`,value:`lorem`,isTile:!1,defaultChecked:!0},render:e=>(0,o.jsx)(a,{id:e.id,name:e.name,label:e.label,value:e.value,defaultChecked:e.defaultChecked,isTile:e.isTile})},l=[`Lorem`,`Ipsum`,`Dolor`,`Sit`],u={args:{id:`radio-group`,name:`radio-group`,data:l.map((e,t)=>({label:e,value:e.toLowerCase(),defaultChecked:t===0})),areTiles:!1,required:!1,label:`Options`,helperText:`Select from the list below`},render:e=>(0,o.jsx)(r,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'lorem-radio-button',
    name: 'lorem-radio-button',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true
  },
  render: (args: RadioButtonProps) => <RadioButton id={args.id} name={args.name} label={args.label} value={args.value} defaultChecked={args.defaultChecked} isTile={args.isTile} />
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Single`,`Group`]}))();export{u as Group,c as Single,d as __namedExportsOrder,s as default};