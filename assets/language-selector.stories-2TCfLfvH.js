import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DJmLJWvg.js";import"./banner-BUZwlTq1.js";import"./button-C4QfSxW0.js";import"./button-group-ieTsNMrX.js";import"./checkbox-BTlZxQ4F.js";import"./combo-box-DU30cfkl.js";import"./date-picker-CpHMGSi4.js";import"./error-messages-DQwxQ3pR.js";import"./index-B00UuIqu.js";import"./form-group-VLBEVhA0.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CTFc-y2-.js";import"./label-Z58zP1tT.js";import"./modal-B9LiO5_D.js";import"./process-list-xhix8Wuu.js";import"./radio-button-BhXyRUXt.js";import"./range-slider-DrXaDfu4.js";import"./search-C0nIEegv.js";import"./select-BMaCLBfp.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DjdkxkUE.js";import"./step-indicator-BaunrL7u.js";import"./summary-box-DOA8Q_xK.js";import"./tag-0raYCf6x.js";import"./text-area-O1BkgWFk.js";import"./time-picker-ZOMr_7mu.js";import"./tooltip-ajWB9iB8.js";import"./index-x-BpOtc8.js";import"./iframe-Ct8SnmH1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWUUcN-5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B89yV2G1.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
