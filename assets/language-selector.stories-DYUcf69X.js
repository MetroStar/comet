import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-C1RLpG-G.js";import"./banner-DH6QgulV.js";import"./button-Db3wJyCy.js";import"./button-group-BulGe28K.js";import"./checkbox-BaI_YfOl.js";import"./combo-box-Dv1PMtXX.js";import"./date-picker-xedVW46W.js";import"./error-messages-DQwxQ3pR.js";import"./index-fFA3JtzK.js";import"./form-group-BJHd_lpP.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D0rONDc8.js";import"./label-Z58zP1tT.js";import"./modal-Dm0WuDuZ.js";import"./process-list-lqJb71JE.js";import"./radio-button-BpLLDlkk.js";import"./range-slider-BlBZgRTH.js";import"./search-CJ_zW23S.js";import"./select-_nNbbpjO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BtL5UUxM.js";import"./step-indicator-CLKds4-I.js";import"./summary-box-Crr76biK.js";import"./tag-CdXv5j6I.js";import"./text-area-CE2uSnwT.js";import"./time-picker-Dho_ucHb.js";import"./tooltip-Cy1CeqH9.js";import"./index-CDjQvKj7.js";import"./iframe-DmczAETD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Duk1BxEa.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C9EfC_2_.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
