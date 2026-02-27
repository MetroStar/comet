import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BDQM1Mh-.js";import"./banner-LSfpRy_K.js";import"./button-DJ5nAEG1.js";import"./button-group-Dcen566A.js";import"./checkbox-D0U7RwWN.js";import"./combo-box-BfgX98SM.js";import"./date-picker-Du1p9VUj.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW9Wuonm.js";import"./form-group-HfvnDvlG.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZo7BvZV.js";import"./label-Z58zP1tT.js";import"./modal-DYIQgugP.js";import"./process-list-ga9XxOBq.js";import"./radio-button-BGGtbapx.js";import"./range-slider-BFrngnN-.js";import"./search-on2kCCM2.js";import"./select-hFENQz29.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-H-QvbnQk.js";import"./step-indicator-HXg70ZdV.js";import"./summary-box-Dg97T2F4.js";import"./tag-z2XKQvMC.js";import"./text-area-Bmocz1Tg.js";import"./time-picker-jKhXTcgJ.js";import"./tooltip-BvAtgz7H.js";import"./index-BwwyfavA.js";import"./iframe-BHrdwcbC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DW3xBdI_.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BBlPgDhR.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
