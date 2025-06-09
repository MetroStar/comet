import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./table-BlI47a42.js";import"./banner-CmzRFqpO.js";import"./button-D9Wdx50N.js";import"./button-group-BtL05JZx.js";import"./checkbox-CYDcYypr.js";import"./combo-box-4UaID54b.js";import"./date-picker-DhNdhWoz.js";import"./error-messages-pdO9TZPZ.js";import"./index-jGmS5lj0.js";import"./form-group-KdJstwiz.js";import"./helper-text-BRA2CuHl.js";import{I as P}from"./icon-B8I8DfLA.js";import"./label-0qqEdO1f.js";import"./modal-dSr-m1nB.js";import"./process-list-wWdVkJAE.js";import"./radio-button-DFlR5LhN.js";import"./range-slider-ByuSUVCH.js";import"./search-CSHRDgKS.js";import"./select-DVb__2mq.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiwGmtXm.js";import"./step-indicator-Dur3iiBJ.js";import"./summary-box-DeBRERe2.js";import"./tag-BkaVgh7n.js";import"./text-area-CtxSlzmP.js";import"./time-picker-BNt0A-Or.js";import"./tooltip-D22GfTlD.js";import"./index-B9tBr0ep.js";import"./iframe-D0wlIprT.js";import"./index-DqlK7rFw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C1TKt0S7.js";import"./active-element-BuxAly_Z.js";const xr={title:"USWDS/Forms/Text Input",component:t,argTypes:{mask:{control:"select"},validationStatus:{control:"select",options:["error","success"]},required:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{id:"input-standard",type:"text",required:!1,label:"Input",helperText:"Enter your input",disabled:!1},render:r=>e.jsx(t,{...r})},n={args:{id:"input-errors",type:"text",required:!0,label:"Input",helperText:"Enter your input",errors:"This field is required",validationStatus:"error"},render:r=>e.jsx(t,{...r})},s={args:{id:"input-mask",type:"text",mask:"ssn"},render:r=>e.jsx(t,{...r})},o={args:{id:"input-prefix",type:"text",prefix:e.jsx(P,{id:"credit-card-icon",type:"credit_card"}),"aria-label":"Input credit card"},render:r=>e.jsx(t,{...r})},i={args:{id:"input-suffix",type:"number",suffix:"lbs","aria-label":"Input pounds"},render:r=>e.jsx(t,{...r})},p={args:{id:"input-change-event",type:"text",placeholder:"Will alert on change...",onChange:r=>alert(r.target.value)},render:r=>e.jsx(t,{...r})};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'input-standard',
    type: 'text',
    required: false,
    label: 'Input',
    helperText: 'Enter your input',
    disabled: false
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,l,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(l=n.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'input-mask',
    type: 'text',
    mask: 'ssn'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,T,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'input-prefix',
    type: 'text',
    prefix: <Icon id="credit-card-icon" type="credit_card" />,
    'aria-label': 'Input credit card'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var b,S,W;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'input-suffix',
    type: 'number',
    suffix: 'lbs',
    'aria-label': 'Input pounds'
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var E,j,v;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'input-change-event',
    type: 'text',
    placeholder: 'Will alert on change...',
    onChange: (e: any) => alert(e.target.value)
  },
  render: (args: TextInputProps) => <TextInput {...args} />
}`,...(v=(j=p.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const gr=["Standard","WithErrors","WithMask","WithPrefix","WithSuffix","WithChangeEvent"];export{a as Standard,p as WithChangeEvent,n as WithErrors,s as WithMask,o as WithPrefix,i as WithSuffix,gr as __namedExportsOrder,xr as default};
