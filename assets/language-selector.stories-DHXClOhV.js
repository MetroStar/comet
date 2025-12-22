import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-CXEDt_IX.js";import"./banner-DD5k-zia.js";import"./button-iFbrQHz5.js";import"./button-group-DmlLR6Ch.js";import"./checkbox-D5awqogb.js";import"./combo-box-faxTxgNA.js";import"./date-picker-e0prf2AC.js";import"./error-messages-DQwxQ3pR.js";import"./index-BFbCUD2X.js";import"./form-group-WXs29FIM.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BHDT1NP-.js";import"./label-Z58zP1tT.js";import"./modal-D14ptv-N.js";import"./process-list-2VbCpAnh.js";import"./radio-button-Dk8Mk2UZ.js";import"./range-slider-cFlpjLRU.js";import"./search-CP0HC-Ul.js";import"./select-CMdnoFND.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BARPFDdc.js";import"./step-indicator-3EBTDo0B.js";import"./summary-box-DAOtTa8X.js";import"./tag-C8SuK6DB.js";import"./text-area-CTybm8Is.js";import"./time-picker-CcsjNbhV.js";import"./tooltip-bk-dUcpD.js";import"./index-BMYzY_Pu.js";import"./iframe-BZXS5M1A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWwuGuar.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxdN8t19.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
