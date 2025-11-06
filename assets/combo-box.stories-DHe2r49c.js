import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./combo-box-B6O4vxiK.js";import"./select-DOSbCKLB.js";import"./index-L6niw3Vl.js";import"./iframe-BiUBZBi9.js";import"./preload-helper-PPVm8Dsz.js";import"./form-group-C2lFXs7K.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";import"./index-Br38tAj3.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./sanitizer-BDKKlE4O.js";import"./events-CleOcHg4.js";const j={title:"USWDS/Forms/Combo Box",component:t,argTypes:{id:{required:!0},required:{control:"boolean"},disabled:{control:"boolean"}}},i="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.",m=[...i.replace(".","").replace(",","").split(" ")],a=m.map(o=>({value:o.toLowerCase(),label:o})),e={args:{id:"combo-box-1",name:"combo-box-1",options:a,required:!1,label:"Options",helperText:"Select from the list below",disabled:!1,defaultValue:a[0].value},render:o=>s.jsx(t,{...o})},r={args:{id:"combo-box-1",name:"combo-box-1",options:a,label:"Pick one",defaultValue:""},render:o=>s.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const P=["Standard","NoDefault"];export{r as NoDefault,e as Standard,P as __namedExportsOrder,j as default};
