import{n as e}from"./chunk-DnJy8xQt.js";import{L as t}from"./iframe-pVO7hzh_.js";import{t as n}from"./jsx-runtime-BpX3lQ6F.js";import{n as r,t as i}from"./combo-box-DWm_62RA.js";var a,o,s,c,l,u;e((()=>{t(),r(),a=n(),o={title:`USWDS/Forms/Combo Box`,component:i,argTypes:{id:{required:!0},required:{control:`boolean`},disabled:{control:`boolean`}}},s=[...`Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.`.split(` `)].map(e=>({value:e.toLowerCase(),label:e})),c={args:{id:`combo-box-1`,name:`combo-box-1`,options:s,required:!1,label:`Options`,helperText:`Select from the list below`,disabled:!1,defaultValue:s[0].value},render:e=>(0,a.jsx)(i,{...e})},l={args:{id:`combo-box-1`,name:`combo-box-1`,options:s,label:`Pick one`,defaultValue:``},render:e=>(0,a.jsx)(i,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'combo-box-1',
    name: 'combo-box-1',
    options,
    label: 'Pick one',
    defaultValue: ''
  },
  render: (args: ComboBoxProps) => <ComboBox {...args} />
}`,...l.parameters?.docs?.source}}},u=[`Standard`,`NoDefault`]}))();export{l as NoDefault,c as Standard,u as __namedExportsOrder,o as default};