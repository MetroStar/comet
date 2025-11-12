import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table--dTJ_LlN.js";import"./banner-DdeTFA5m.js";import"./button-DZcatjI3.js";import"./button-group-CIDeXJwb.js";import"./checkbox-CPEjjsvs.js";import"./combo-box-CuLm5IF7.js";import"./date-picker-due9hnL1.js";import"./error-messages-DQwxQ3pR.js";import"./index-0pD0Rfof.js";import"./form-group-B_GsfbZZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cwt70qU2.js";import"./label-Z58zP1tT.js";import"./modal-CR2VGK_Z.js";import"./process-list-Hq8KfT0t.js";import"./radio-button-QrmP5zSj.js";import"./range-slider-B7ThKR_I.js";import"./search-iaPpQ-jF.js";import"./select-DouUKTqO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BFT9GY45.js";import"./step-indicator-IM_qMCyO.js";import"./summary-box-DfJ7OwM5.js";import"./tag-BpxbKPsG.js";import"./text-area-Dh5yMKcm.js";import"./time-picker-B_vT5Vzq.js";import"./tooltip-yNuiRydh.js";import"./index-BWc2KjT0.js";import"./iframe-DLzeRc9X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNkV8ViH.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CvKfrh-m.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
