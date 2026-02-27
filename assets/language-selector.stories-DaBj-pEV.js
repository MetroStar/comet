import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DoPD4hfz.js";import"./banner-CO-rJZEh.js";import"./button-s3f33iqR.js";import"./button-group-yvOjzuR7.js";import"./checkbox-CtRvH166.js";import"./combo-box-BjQtQyeK.js";import"./date-picker-BXS9EJIo.js";import"./error-messages-DQwxQ3pR.js";import"./index-Y6j-vL1X.js";import"./form-group-C2eezSoD.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BvEpj7o9.js";import"./label-Z58zP1tT.js";import"./modal-C3ovDbUu.js";import"./process-list-CtF8XHOe.js";import"./radio-button-5J3HPOi8.js";import"./range-slider-BmvWjfhG.js";import"./search-DXUrmg5z.js";import"./select-BFVUdGDr.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DrN3KhjE.js";import"./step-indicator-Dmo_bZM0.js";import"./summary-box-2eCbppDZ.js";import"./tag-C3E-r3xI.js";import"./text-area-BRG0rnJp.js";import"./time-picker-eDTugkBF.js";import"./tooltip-CyHsxTd4.js";import"./index-CajJ0eJG.js";import"./iframe-DI97NYzA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXqkfQZm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN4bhDLR.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
