import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as t}from"./table-CzoVEYc_.js";import"./banner-DW0yElUw.js";import"./button-bZ5Mp_AU.js";import"./button-group-D0lWyXML.js";import"./checkbox-3CDfTcVY.js";import"./combo-box-AJ0FExB2.js";import"./date-picker-DKItmH8g.js";import"./error-messages-DQwxQ3pR.js";import"./index-DHHCfnS1.js";import"./form-group-B8g8yeM1.js";import"./helper-text-C5i0f8Ge.js";import{I as u}from"./icon-C3FchpV-.js";import"./label-Z58zP1tT.js";import"./modal-Brj4-T_g.js";import"./process-list-Cc3I22IW.js";import"./radio-button-5YXeP0HL.js";import"./range-slider-DIrxMbkG.js";import"./search-ePFsEUvt.js";import"./select-DJU_fcta.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-0hF62P37.js";import"./step-indicator-Bk8eT84t.js";import"./summary-box-B38BLNY4.js";import"./tag-CLDP7JT-.js";import"./text-area-C2UJ0jwX.js";import"./time-picker-CotNdUu4.js";import"./tooltip-BVlyVB0A.js";import"./index-BBTpoaCK.js";import"./iframe-BZfy-MOI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHvMlG60.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4iV9IVu.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:e=>r.jsx(t,{...e})},a={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:e=>r.jsx(t,{...e})},i={args:{id:"input-mask",type:"text",mask:"ssn",label:"Social Security Number",helperText:"Enter your SSN"},render:e=>r.jsx(t,{...e})},s={args:{id:"input-prefix",type:"text",label:"Input with Prefix",helperText:"Enter a credit card number",prefix:r.jsx(u,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:e=>r.jsx(t,{...e})},p={args:{id:"input-suffix",type:"number",label:"Input with Suffix",helperText:"Enter a weight in pounds",suffix:"lbs","aria-label":"Input pounds"},render:e=>r.jsx(t,{...e})},o={args:{id:"input-change-event",type:"text",label:"Input with Change Event",helperText:"Type something to see an alert",placeholder:"Will alert on change...",onChange:e=>alert(e.target.value)},render:e=>r.jsx(t,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
