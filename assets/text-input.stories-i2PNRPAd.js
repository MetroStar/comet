import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./table-CYmhWNEm.js";import"./banner-D2I3LpOl.js";import"./button-DfWJO5NC.js";import"./button-group-DekWdHfJ.js";import"./checkbox-Bm3o4vL2.js";import"./combo-box-BHD_tO2S.js";import"./date-picker-DdcJA1Y7.js";import"./error-messages-pdO9TZPZ.js";import"./index-BpWRmvKG.js";import"./form-group-wfwX5Iyy.js";import"./helper-text-BRA2CuHl.js";import{I as j}from"./icon-D_78rZ8u.js";import"./label-0qqEdO1f.js";import"./modal-iTvJGglD.js";import"./process-list-DVFfdVOe.js";import"./radio-button-BP_-j6a8.js";import"./range-slider-Lw04wRca.js";import"./search-DIBGS6Yh.js";import"./select-BOY6QlqM.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-OB1OtwWB.js";import"./step-indicator-QWvk8Pwa.js";import"./summary-box-CE8DF4gV.js";import"./tag-CTPMiUx4.js";import"./text-area-C0d-1XAJ.js";import"./time-picker-BbmV3cSI.js";import"./tooltip-DSLaw7yL.js";import"./index-rTA6sVZJ.js";import"./iframe-DY9HBLoi.js";import"./index-BDMt5_-6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwk6v0GG.js";import"./active-element-BuxAly_Z.js";const xe={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:e=>r.jsx(t,{...e})},a={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:e=>r.jsx(t,{...e})},i={args:{id:"input-mask",type:"text",mask:"ssn",label:"Social Security Number",helperText:"Enter your SSN"},render:e=>r.jsx(t,{...e})},s={args:{id:"input-prefix",type:"text",label:"Input with Prefix",helperText:"Enter a credit card number",prefix:r.jsx(j,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:e=>r.jsx(t,{...e})},p={args:{id:"input-suffix",type:"number",label:"Input with Suffix",helperText:"Enter a weight in pounds",suffix:"lbs","aria-label":"Input pounds"},render:e=>r.jsx(t,{...e})},o={args:{id:"input-change-event",type:"text",label:"Input with Change Event",helperText:"Type something to see an alert",placeholder:"Will alert on change...",onChange:e=>alert(e.target.value)},render:e=>r.jsx(t,{...e})};var u,d,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'input-standard',
    type: 'text',
    required: false,
    label: 'Input',
    helperText: 'Enter your input',
    disabled: false
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(c=a.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'input-mask',
    type: 'text',
    mask: 'ssn',
    label: 'Social Security Number',
    helperText: 'Enter your SSN'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,I,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'input-prefix',
    type: 'text',
    label: 'Input with Prefix',
    helperText: 'Enter a credit card number',
    prefix: <Icon id="credit-card-icon" type="credit_card" />,
    'aria-label': 'Input credit card'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var y,S,E;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'input-suffix',
    type: 'number',
    label: 'Input with Suffix',
    helperText: 'Enter a weight in pounds',
    suffix: 'lbs',
    'aria-label': 'Input pounds'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var W,v,P;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'input-change-event',
    type: 'text',
    label: 'Input with Change Event',
    helperText: 'Type something to see an alert',
    placeholder: 'Will alert on change...',
    onChange: (e: any) => alert(e.target.value)
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const ge=["Standard","WithErrors","WithMask","WithPrefix","WithSuffix","WithChangeEvent"];export{n as Standard,o as WithChangeEvent,a as WithErrors,i as WithMask,s as WithPrefix,p as WithSuffix,ge as __namedExportsOrder,xe as default};
