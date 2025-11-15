import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as t}from"./table-DW_bMWHL.js";import"./banner-BuudoFOQ.js";import"./button-B4wDKhOD.js";import"./button-group-DozuKPpf.js";import"./checkbox-ZHZjr4cn.js";import"./combo-box-CsP_B6Zh.js";import"./date-picker-CqC6lTbh.js";import"./error-messages-DQwxQ3pR.js";import"./index-DD-f6anU.js";import"./form-group-ZBJWDz0G.js";import"./helper-text-C5i0f8Ge.js";import{I as u}from"./icon-BH5NOiaC.js";import"./label-Z58zP1tT.js";import"./modal-CLdCh8BH.js";import"./process-list-CZ6SCh55.js";import"./radio-button-8ffYBqhl.js";import"./range-slider-D2vE_SJf.js";import"./search-ojO1ONPP.js";import"./select-_crQ4lid.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Dbb_hWNu.js";import"./step-indicator-DuHvjJSx.js";import"./summary-box-DBxxh4rZ.js";import"./tag-CwSNC5bx.js";import"./text-area-Bop2UMwn.js";import"./time-picker-DYqV8tkF.js";import"./tooltip-Ch_NwA79.js";import"./index-DRC3u4o-.js";import"./iframe-CnqCO9iU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dzl_5l3M.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CT5x6rTX.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:e=>r.jsx(t,{...e})},a={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:e=>r.jsx(t,{...e})},i={args:{id:"input-mask",type:"text",mask:"ssn",label:"Social Security Number",helperText:"Enter your SSN"},render:e=>r.jsx(t,{...e})},s={args:{id:"input-prefix",type:"text",label:"Input with Prefix",helperText:"Enter a credit card number",prefix:r.jsx(u,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:e=>r.jsx(t,{...e})},p={args:{id:"input-suffix",type:"number",label:"Input with Suffix",helperText:"Enter a weight in pounds",suffix:"lbs","aria-label":"Input pounds"},render:e=>r.jsx(t,{...e})},o={args:{id:"input-change-event",type:"text",label:"Input with Change Event",helperText:"Type something to see an alert",placeholder:"Will alert on change...",onChange:e=>alert(e.target.value)},render:e=>r.jsx(t,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-standard',
    type: 'text',
    required: false,
    label: 'Input',
    helperText: 'Enter your input',
    disabled: false
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-errors',
    type: 'text',
    required: true,
    label: 'Input',
    helperText: 'Enter your input',
    errors: 'This field is required',
    validationStatus: 'error'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-mask',
    type: 'text',
    mask: 'ssn',
    label: 'Social Security Number',
    helperText: 'Enter your SSN'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-prefix',
    type: 'text',
    label: 'Input with Prefix',
    helperText: 'Enter a credit card number',
    prefix: <Icon id="credit-card-icon" type="credit_card" />,
    'aria-label': 'Input credit card'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-suffix',
    type: 'number',
    label: 'Input with Suffix',
    helperText: 'Enter a weight in pounds',
    suffix: 'lbs',
    'aria-label': 'Input pounds'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-change-event',
    type: 'text',
    label: 'Input with Change Event',
    helperText: 'Type something to see an alert',
    placeholder: 'Will alert on change...',
    onChange: (e: any) => alert(e.target.value)
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...o.parameters?.docs?.source}}};const Z=["Standard","WithErrors","WithMask","WithPrefix","WithSuffix","WithChangeEvent"];export{n as Standard,o as WithChangeEvent,a as WithErrors,i as WithMask,s as WithPrefix,p as WithSuffix,Z as __namedExportsOrder,Y as default};
