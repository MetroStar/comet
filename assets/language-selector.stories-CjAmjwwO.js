import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-etSpiK93.js";import"./banner-CWfSVMcQ.js";import"./button-B7pFt37z.js";import"./button-group-BRc77wHK.js";import"./checkbox-CUU9R15H.js";import"./combo-box-BPfnr8Rw.js";import"./date-picker-BMJNX18e.js";import"./error-messages-_lA7co94.js";import"./index-DSCzkK-X.js";import"./form-group-DkPWxlhw.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTBvyvH7.js";import"./label-0qqEdO1f.js";import"./modal-CKRHOoEv.js";import"./process-list-BZIxW3s3.js";import"./radio-button-Buv9cRjs.js";import"./range-slider-CxFZvE3_.js";import"./search-cT6P9tE4.js";import"./select-BNqncbBi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ovEs71ou.js";import"./step-indicator-CW9DACn5.js";import"./summary-box-DHtf9G_9.js";import"./tag-d3bWREuo.js";import"./text-area-CYy6almf.js";import"./time-picker-CEE4fWkk.js";import"./tooltip-DzncSK4y.js";import"./index-BAh54tqx.js";import"./iframe-3nCC7gWt.js";import"./index-C-EJdkFK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-l_I2nizS.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'selector-1',
    items: [{
      label: 'English',
      attr: 'en',
      onChange: () => handleChange('en')
    }, {
      label: 'Español',
      attr: 'es',
      onChange: () => handleChange('es')
    }],
    variant: 'default',
    size: 'default'
  },
  render: (args: LanguageSelectorProps) => <LanguageSelector {...args} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'selector-2',
    items: [{
      label: 'English',
      attr: 'en',
      onChange: () => handleChange('en')
    }, {
      label: 'Español',
      localLabel: 'Spanish',
      attr: 'es',
      onChange: () => handleChange('es')
    }, {
      label: 'Français',
      localLabel: 'French',
      attr: 'fr',
      onChange: () => handleChange('fr')
    }],
    variant: 'default',
    size: 'small'
  },
  render: (args: LanguageSelectorProps) => <LanguageSelector {...args} />
}`,...t.parameters?.docs?.source}}};const K=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,K as __namedExportsOrder,J as default};
