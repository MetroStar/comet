import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as t}from"./table-BkcizWb6.js";import"./banner-DweQbrQc.js";import"./button-XBMUcWoC.js";import"./button-group-BrIUjRCR.js";import"./checkbox-BvZeZHtM.js";import"./combo-box-Bj433j_h.js";import"./date-picker-z6Q7eOM2.js";import"./error-messages-DQwxQ3pR.js";import"./index-Cnn-YZcV.js";import"./form-group-CG_NYfoS.js";import"./helper-text-C5i0f8Ge.js";import{I as u}from"./icon-Cc1dzDtb.js";import"./label-Z58zP1tT.js";import"./modal-Cpe_cfLH.js";import"./process-list-CvTJfKYq.js";import"./radio-button-DUmMrbPy.js";import"./range-slider-gxORhVag.js";import"./search-NuBoJI84.js";import"./select-Bzt55IHF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CxJW4m1g.js";import"./step-indicator-BDNx4Eop.js";import"./summary-box-CpxqpbYb.js";import"./tag-CbEMar7b.js";import"./text-area-blUsZJJZ.js";import"./time-picker-CtBf-17B.js";import"./tooltip-BwdNh6of.js";import"./index-oP94_y1q.js";import"./iframe-DZGaHezm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oFd3Ri_j.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dv1nB6qQ.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:e=>r.jsx(t,{...e})},a={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:e=>r.jsx(t,{...e})},i={args:{id:"input-mask",type:"text",mask:"ssn",label:"Social Security Number",helperText:"Enter your SSN"},render:e=>r.jsx(t,{...e})},s={args:{id:"input-prefix",type:"text",label:"Input with Prefix",helperText:"Enter a credit card number",prefix:r.jsx(u,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:e=>r.jsx(t,{...e})},p={args:{id:"input-suffix",type:"number",label:"Input with Suffix",helperText:"Enter a weight in pounds",suffix:"lbs","aria-label":"Input pounds"},render:e=>r.jsx(t,{...e})},o={args:{id:"input-change-event",type:"text",label:"Input with Change Event",helperText:"Type something to see an alert",placeholder:"Will alert on change...",onChange:e=>alert(e.target.value)},render:e=>r.jsx(t,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
