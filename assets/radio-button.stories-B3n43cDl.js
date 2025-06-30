import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{a as u,R as p}from"./radio-button-8NO9pNju.js";import"./index-Do0kNAB-.js";import"./iframe-YKUTTlTG.js";import"./form-group-D1BkIUNZ.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";const S={title:"USWDS/Forms/Radio Button",component:u,argTypes:{id:{required:!0},name:{required:!0}}},r={args:{id:"lorem-radio-button",name:"lorem-radio-button",label:"Lorem",value:"lorem",isTile:!1,defaultChecked:!0},render:e=>i.jsx(u,{id:e.id,name:e.name,label:e.label,value:e.value,defaultChecked:e.defaultChecked,isTile:e.isTile})},c=["Lorem","Ipsum","Dolor","Sit"],a={args:{id:"radio-group",name:"radio-group",data:c.map((e,m)=>({label:e,value:e.toLowerCase(),defaultChecked:m===0})),areTiles:!1,required:!1,label:"Options",helperText:"Select from the list below"},render:e=>i.jsx(p,{...e})};var o,t,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'lorem-radio-button',
    name: 'lorem-radio-button',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true
  },
  render: (args: RadioButtonProps) => <RadioButton id={args.id} name={args.name} label={args.label} value={args.value} defaultChecked={args.defaultChecked} isTile={args.isTile} />
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,s,n;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const k=["Single","Group"];export{a as Group,r as Single,k as __namedExportsOrder,S as default};
