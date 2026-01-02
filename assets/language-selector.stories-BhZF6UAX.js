import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-walHDM1X.js";import"./banner-D6OWsJH6.js";import"./button-B7htGxce.js";import"./button-group-DPRKc4CK.js";import"./checkbox-gJbOdNV_.js";import"./combo-box-qTwjyg9R.js";import"./date-picker-DEqYSMys.js";import"./error-messages-DQwxQ3pR.js";import"./index-IzqfyfZA.js";import"./form-group-DaebfseS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CYZuVbXq.js";import"./label-Z58zP1tT.js";import"./modal-UTT_pOU9.js";import"./process-list-FACfqpED.js";import"./radio-button-8Hppabgw.js";import"./range-slider-cvo6pp4o.js";import"./search-JwXuI3O4.js";import"./select-BLtfPvgx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BJY1MeDm.js";import"./step-indicator-B38Y5p7y.js";import"./summary-box-KQva4Gki.js";import"./tag-C2j4csul.js";import"./text-area-C9cwn9DQ.js";import"./time-picker-DQ38ClCl.js";import"./tooltip-C7QNwUXe.js";import"./index-BVzeUMco.js";import"./iframe-Co_ow-pI.js";import"./preload-helper-PPVm8Dsz.js";import"./index--DG9ymCz.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-5cdN7wMr.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
