import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{C as i,a as u}from"./checkbox-BWQVeGWC.js";import"./index-C9lBdWCt.js";import"./iframe-Dn1ZsrJK.js";import"./form-group-DC2meTDh.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";const S={title:"USWDS/Forms/Checkbox",component:i,argTypes:{id:{required:!0},name:{required:!0}}},r={args:{id:"lorem-checkbox",name:"lorem-checkbox",label:"Lorem",value:"lorem",isTile:!1,defaultChecked:!0},render:e=>c.jsx(i,{id:e.id,name:e.name,label:e.label,value:e.value,defaultChecked:e.defaultChecked,isTile:e.isTile})},p=["Lorem","Ipsum","Dolor","Sit"],o={args:{id:"checkbox-group",name:"checkbox-group",data:p.map((e,m)=>({label:e,value:e.toLowerCase(),defaultChecked:m===0})),areTiles:!1,required:!1,label:"Options",helperText:"Select from the list below"},render:e=>c.jsx(u,{...e})};var a,l,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: 'lorem-checkbox',
    name: 'lorem-checkbox',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true
  },
  render: (args: CheckboxProps) => <Checkbox id={args.id} name={args.name} label={args.label} value={args.value} defaultChecked={args.defaultChecked} isTile={args.isTile} />
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var t,n,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const v=["Single","Group"];export{o as Group,r as Single,v as __namedExportsOrder,S as default};
