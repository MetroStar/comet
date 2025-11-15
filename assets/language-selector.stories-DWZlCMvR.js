import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DW_bMWHL.js";import"./banner-BuudoFOQ.js";import"./button-B4wDKhOD.js";import"./button-group-DozuKPpf.js";import"./checkbox-ZHZjr4cn.js";import"./combo-box-CsP_B6Zh.js";import"./date-picker-CqC6lTbh.js";import"./error-messages-DQwxQ3pR.js";import"./index-DD-f6anU.js";import"./form-group-ZBJWDz0G.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BH5NOiaC.js";import"./label-Z58zP1tT.js";import"./modal-CLdCh8BH.js";import"./process-list-CZ6SCh55.js";import"./radio-button-8ffYBqhl.js";import"./range-slider-D2vE_SJf.js";import"./search-ojO1ONPP.js";import"./select-_crQ4lid.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Dbb_hWNu.js";import"./step-indicator-DuHvjJSx.js";import"./summary-box-DBxxh4rZ.js";import"./tag-CwSNC5bx.js";import"./text-area-Bop2UMwn.js";import"./time-picker-DYqV8tkF.js";import"./tooltip-Ch_NwA79.js";import"./index-DRC3u4o-.js";import"./iframe-CnqCO9iU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dzl_5l3M.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CT5x6rTX.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
