import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as t}from"./table-CSaK-x_V.js";import"./banner-BxYGXyna.js";import"./button-GJ2BfbS-.js";import"./button-group-LFVyA_Fj.js";import"./checkbox-CdQ19bvs.js";import"./combo-box-CR-5V3Ia.js";import"./date-picker-DkK0_rB_.js";import"./error-messages-DQwxQ3pR.js";import"./index-oYevnVru.js";import"./form-group-ij1d4Lar.js";import"./helper-text-C5i0f8Ge.js";import{I as u}from"./icon-DgbwmsD7.js";import"./label-Z58zP1tT.js";import"./modal-CgDi7N4S.js";import"./process-list-CodrIgEm.js";import"./radio-button-CX8ESqGR.js";import"./range-slider-fSM1VMq-.js";import"./search-Cojt-1JY.js";import"./select-B2E_eMP0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D6b4wbVc.js";import"./step-indicator-BF9Xj5dC.js";import"./summary-box-DopPB8AA.js";import"./tag-CaZv0Xjc.js";import"./text-area-BDP9Xbyw.js";import"./time-picker-Qm8rb22s.js";import"./tooltip-Zvlq8EIV.js";import"./index-q8yHh5aR.js";import"./iframe-BWsQfN69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfnSD9B1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-o16bkFsK.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:e=>r.jsx(t,{...e})},a={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:e=>r.jsx(t,{...e})},i={args:{id:"input-mask",type:"text",mask:"ssn",label:"Social Security Number",helperText:"Enter your SSN"},render:e=>r.jsx(t,{...e})},s={args:{id:"input-prefix",type:"text",label:"Input with Prefix",helperText:"Enter a credit card number",prefix:r.jsx(u,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:e=>r.jsx(t,{...e})},p={args:{id:"input-suffix",type:"number",label:"Input with Suffix",helperText:"Enter a weight in pounds",suffix:"lbs","aria-label":"Input pounds"},render:e=>r.jsx(t,{...e})},o={args:{id:"input-change-event",type:"text",label:"Input with Change Event",helperText:"Type something to see an alert",placeholder:"Will alert on change...",onChange:e=>alert(e.target.value)},render:e=>r.jsx(t,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
