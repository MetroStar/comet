import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-K6yo3B_7.js";import"./banner-BhKBfDyZ.js";import"./button-CPwdRaPa.js";import"./button-group-BKcE8Oav.js";import"./checkbox-BcgY7deo.js";import"./combo-box-C5VUUqkJ.js";import"./date-picker-DZhlg54d.js";import"./error-messages-DQwxQ3pR.js";import"./index-BepEtKgH.js";import"./form-group-B4sEWzNu.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIiwfHXh.js";import"./label-Z58zP1tT.js";import"./modal-Dp7gLss_.js";import"./process-list-CiT4wtBa.js";import"./radio-button-DwmexyD_.js";import"./range-slider-CsIntVkP.js";import"./search-4f5hLwa7.js";import"./select-Btjfsvlm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Drwiv-SO.js";import"./step-indicator-_HVgCI85.js";import"./summary-box-CjgDttnj.js";import"./tag-Dna-t53L.js";import"./text-area-IlAvfY_F.js";import"./time-picker-BwBoa6O0.js";import"./tooltip-CWCAZCBF.js";import"./index-ChQN9uke.js";import"./iframe-D_HOsr8M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJAMUTJ6.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cybot9zD.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
