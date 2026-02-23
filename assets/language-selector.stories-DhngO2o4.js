import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-CZhgR457.js";import"./banner-DIEW8n6B.js";import"./button-DGvenM4j.js";import"./button-group-BV1Ytlrk.js";import"./checkbox-DzLYMhp5.js";import"./combo-box-kKNgi2y1.js";import"./date-picker-BI-4-5Ws.js";import"./error-messages-DQwxQ3pR.js";import"./index-B2SZ3QXI.js";import"./form-group-CdcOJC88.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CsGs4XnL.js";import"./label-Z58zP1tT.js";import"./modal-BZVpKvbi.js";import"./process-list-Bs__pWGn.js";import"./radio-button-B2-5RiLD.js";import"./range-slider-B_aFnZC_.js";import"./search-CMPDoc5B.js";import"./select-CT7NorQw.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BNiS1_pH.js";import"./step-indicator-DQxEqhPc.js";import"./summary-box-B-Tr6alV.js";import"./tag-BkiTKNVF.js";import"./text-area-Bo3yVAyW.js";import"./time-picker-B0q7-5Ml.js";import"./tooltip-DtEVUKwV.js";import"./index-CE8u-YIp.js";import"./iframe-C-4Tka3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClkTyj86.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-COT3FEAd.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,N as __namedExportsOrder,K as default};
