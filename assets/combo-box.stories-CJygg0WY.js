import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./combo-box-CI7x9s1w.js";import"./select-Db4_XT5f.js";import"./index-CRJmehm-.js";import"./iframe-C4vNGh7L.js";import"./form-group-DBfTQOoS.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";import"./index-DZVpAW7Q.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./sanitizer-BDKKlE4O.js";import"./events-CleOcHg4.js";const h={title:"USWDS/Forms/Combo Box",component:t,argTypes:{id:{required:!0},required:{control:"boolean"},disabled:{control:"boolean"}}},i="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.",m=[...i.replace(".","").replace(",","").split(" ")],a=m.map(o=>({value:o.toLowerCase(),label:o})),e={args:{id:"combo-box-1",name:"combo-box-1",options:a,required:!1,label:"Options",helperText:"Select from the list below",disabled:!1,defaultValue:a[0].value},render:o=>s.jsx(t,{...o})},r={args:{id:"combo-box-1",name:"combo-box-1",options:a,label:"Pick one",defaultValue:""},render:o=>s.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'combo-box-1',
    name: 'combo-box-1',
    options,
    label: 'Pick one',
    defaultValue: ''
  },
  render: (args: ComboBoxProps) => <ComboBox {...args} />
}`,...r.parameters?.docs?.source}}};const j=["Standard","NoDefault"];export{r as NoDefault,e as Standard,j as __namedExportsOrder,h as default};
