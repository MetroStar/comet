import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Ch-sZdwv.js";import"./banner-XLvXtSqA.js";import"./button-BsC6LYen.js";import"./button-group-C-mMKkOx.js";import"./checkbox-BrkCm2o9.js";import"./combo-box-Cas2il9B.js";import"./date-picker-Bqh6GVSb.js";import"./error-messages-DQwxQ3pR.js";import"./index-CkKdknOi.js";import"./form-group-bMnI7vyb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7ZI2_WA.js";import"./label-Z58zP1tT.js";import"./modal-BnlhklE2.js";import"./process-list-DG1jhLut.js";import"./radio-button-BK2GU6Ug.js";import"./range-slider-CcpPZara.js";import"./search-BD8ryVTf.js";import"./select-BAp0tBXJ.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BDPCZz7C.js";import"./step-indicator-BoU6H3fm.js";import"./summary-box-CUyYbWXy.js";import"./tag-Dd3nNNr4.js";import"./text-area-DvYQT1M1.js";import"./time-picker-DPoYf0Ep.js";import"./tooltip-gTCSVkqI.js";import"./index-Bv8IALZP.js";import"./iframe-DkQxi855.js";import"./preload-helper-PPVm8Dsz.js";import"./index--78zLXpN.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BekW2GCl.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
