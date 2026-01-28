import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Bq6GEKwN.js";import"./banner-DK3VBm5U.js";import"./button-D8zIbCge.js";import"./button-group-CuPgHglY.js";import"./checkbox-CzQYJoKR.js";import"./combo-box-CJkqnDV4.js";import"./date-picker-CYzZbYRN.js";import"./error-messages-DQwxQ3pR.js";import"./index-BR9Kz18I.js";import"./form-group-DgFamHKx.js";import"./helper-text-C5i0f8Ge.js";import"./icon-B8KreRvd.js";import"./label-Z58zP1tT.js";import"./modal-BDwXsif8.js";import"./process-list-Cz-W6YwX.js";import"./radio-button-BocApSzk.js";import"./range-slider-faOPHNJW.js";import"./search-DL3oXpp6.js";import"./select-_A3e-4TS.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Ddk_Hcer.js";import"./step-indicator-AWmi0NuP.js";import"./summary-box-Du5uqv8U.js";import"./tag-Byr-lYbf.js";import"./text-area-CXRY8a5j.js";import"./time-picker-BXGxN0EV.js";import"./tooltip-Z2bNLvCP.js";import"./index-16IRk5e0.js";import"./iframe-Cn7wZz7_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_I8d7DW.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-pA1eNxZY.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
