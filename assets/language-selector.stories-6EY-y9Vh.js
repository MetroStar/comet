import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BE7P90A5.js";import"./banner-CdKUtT4Q.js";import"./button-BuClEYRA.js";import"./button-group-3NzQO1eL.js";import"./checkbox-B_FgE5YG.js";import"./combo-box-BwDn4-7X.js";import"./date-picker-DtP7l5jL.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bni-B5ok.js";import"./form-group-BZBdvamC.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CdkrdHks.js";import"./label-Z58zP1tT.js";import"./modal-xumiYz7t.js";import"./process-list-CcAX-yjy.js";import"./radio-button-Bd2bWT8y.js";import"./range-slider-Be1UaCg9.js";import"./search-P4kxlHtr.js";import"./select-vPNxENBR.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CPGEl31o.js";import"./step-indicator-DJJpD3pM.js";import"./summary-box-0wY2PkS2.js";import"./tag-DkogBOJ7.js";import"./text-area-1c32Owjo.js";import"./time-picker-DmCzu4M3.js";import"./tooltip-CnpPKDFp.js";import"./index-Bj4XtJnt.js";import"./iframe-BhXn9yy1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt53Fj7x.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4TSTOiY.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
