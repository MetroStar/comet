import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-CX_3fU8G.js";import"./banner-BX1AEE79.js";import"./button-BRZIQbIO.js";import"./button-group-DhizJLA4.js";import"./checkbox-DIx_kXh1.js";import"./combo-box-DC_XAVf9.js";import"./date-picker-BgdkMevD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BEJPuihF.js";import"./form-group-1FQ6ZL-b.js";import"./helper-text-C5i0f8Ge.js";import"./icon-IlFqEd48.js";import"./label-Z58zP1tT.js";import"./modal-aFbxMgIk.js";import"./process-list-CQ1coxJ7.js";import"./radio-button-GUxkA6VJ.js";import"./range-slider-BXYo9qBg.js";import"./search-BDj3JnRH.js";import"./select-B3omePZx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B_dSrAsx.js";import"./step-indicator-BD3Ashid.js";import"./summary-box-Dcai1aDP.js";import"./tag-CAOLYjFJ.js";import"./text-area-jjmMtOfo.js";import"./time-picker-BooG6I3G.js";import"./tooltip-DqvkubAg.js";import"./index-Dt1OuEIl.js";import"./iframe-DrYRFDkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BktZxXXP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJeDAx_i.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
