import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-D8h51JS1.js";import"./banner-DCDmr0G8.js";import"./button-ijgBrMFA.js";import"./button-group-B0UmdrOD.js";import"./checkbox-C11XdatN.js";import"./combo-box-ByBwJrwY.js";import"./date-picker-yq7UOVP1.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW_M1et5.js";import"./form-group-D1HeFVB2.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D34rc_xL.js";import"./label-Z58zP1tT.js";import"./modal-QVZYOgd8.js";import"./process-list-BuU7wWlY.js";import"./radio-button-DyalhMhA.js";import"./range-slider-C1FbPf95.js";import"./search-D1Ve7K6E.js";import"./select-D496jgZF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CHUyH9R-.js";import"./step-indicator-A5ivSDeW.js";import"./summary-box-CXscmp-j.js";import"./tag-BqbH648p.js";import"./text-area-CsLFuSaj.js";import"./time-picker-CpqDNJ7b.js";import"./tooltip-DPDnsQ2S.js";import"./index-Bb_jRSga.js";import"./iframe-DAElSkcd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpyczfRn.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CD1kXvG_.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
