import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./table-CNabwFd0.js";import"./banner-CEBngVBm.js";import"./button-BwDKLya9.js";import"./button-group-BejYm1FH.js";import"./checkbox-CQDMIMXT.js";import"./combo-box-C55i6zvi.js";import"./date-picker-CCa4mAhu.js";import"./error-messages-pdO9TZPZ.js";import"./index-ClE7f3XS.js";import"./form-group-BfLWRLjx.js";import"./helper-text-BRA2CuHl.js";import{I as j}from"./icon-tSldNKzR.js";import"./label-0qqEdO1f.js";import"./modal-shQVnoNU.js";import"./process-list-B6SN6S6H.js";import"./radio-button-sUS7D1P8.js";import"./range-slider-BF8zD3pc.js";import"./search-bRN4-ja6.js";import"./select-BWdstRoK.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CKar7Nja.js";import"./step-indicator-BF0nJBUs.js";import"./summary-box-jrcClhIx.js";import"./tag-1P0fxoyb.js";import"./text-area-gQuZ9eqj.js";import"./time-picker-Wna0e8Fn.js";import"./tooltip-C2T8JWOX.js";import"./index-D8FXGwiB.js";import"./iframe-DIbYc2YD.js";import"./index-BGU-z_Jn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BK1LKP5m.js";import"./active-element-BuxAly_Z.js";const xe={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:e=>r.jsx(t,{...e})},a={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:e=>r.jsx(t,{...e})},i={args:{id:"input-mask",type:"text",mask:"ssn",label:"Social Security Number",helperText:"Enter your SSN"},render:e=>r.jsx(t,{...e})},s={args:{id:"input-prefix",type:"text",label:"Input with Prefix",helperText:"Enter a credit card number",prefix:r.jsx(j,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:e=>r.jsx(t,{...e})},p={args:{id:"input-suffix",type:"number",label:"Input with Suffix",helperText:"Enter a weight in pounds",suffix:"lbs","aria-label":"Input pounds"},render:e=>r.jsx(t,{...e})},o={args:{id:"input-change-event",type:"text",label:"Input with Change Event",helperText:"Type something to see an alert",placeholder:"Will alert on change...",onChange:e=>alert(e.target.value)},render:e=>r.jsx(t,{...e})};var u,d,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
