import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./combo-box-BHD_tO2S.js";import"./select-BOY6QlqM.js";import"./index-BDMt5_-6.js";import"./iframe-DY9HBLoi.js";import"./form-group-wfwX5Iyy.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";import"./index-Bwk6v0GG.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./sanitizer-BDKKlE4O.js";import"./events-CleOcHg4.js";const D={title:"USWDS/Forms/Combo Box",component:t,argTypes:{id:{required:!0},required:{control:"boolean"},disabled:{control:"boolean"}}},c="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.",d=[...c.replace(".","").replace(",","").split(" ")],a=d.map(o=>({value:o.toLowerCase(),label:o})),e={args:{id:"combo-box-1",name:"combo-box-1",options:a,required:!1,label:"Options",helperText:"Select from the list below",disabled:!1,defaultValue:a[0].value},render:o=>u.jsx(t,{...o})},r={args:{id:"combo-box-1",name:"combo-box-1",options:a,label:"Pick one",defaultValue:""},render:o=>u.jsx(t,{...o})};var s,i,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 'combo-box-1',
    name: 'combo-box-1',
    options,
    required: false,
    label: 'Options',
    helperText: 'Select from the list below',
    disabled: false,
    defaultValue: options[0].value
  },
  render: (args: ComboBoxProps) => <ComboBox {...args} />
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'combo-box-1',
    name: 'combo-box-1',
    options,
    label: 'Pick one',
    defaultValue: ''
  },
  render: (args: ComboBoxProps) => <ComboBox {...args} />
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=["Standard","NoDefault"];export{r as NoDefault,e as Standard,N as __namedExportsOrder,D as default};
