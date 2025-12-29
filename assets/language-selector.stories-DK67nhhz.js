import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DoweFw58.js";import"./banner-DCAwis5j.js";import"./button-7RovM-Qw.js";import"./button-group-kghJkCVA.js";import"./checkbox-CFTS5l4Y.js";import"./combo-box-CE7KR71Q.js";import"./date-picker-CcHVpChK.js";import"./error-messages-DQwxQ3pR.js";import"./index-C9NoWFmt.js";import"./form-group-Dbsx7Gzo.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cygb0suf.js";import"./label-Z58zP1tT.js";import"./modal-BLZk1Mde.js";import"./process-list-Bo_blzCt.js";import"./radio-button-BxTZPhjK.js";import"./range-slider-8FINxcyX.js";import"./search-BKhtnkhS.js";import"./select-BZa46iHj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-fOh-sxzm.js";import"./step-indicator-DhVcUGb2.js";import"./summary-box-Jxgcj2fM.js";import"./tag-BiIxnUsz.js";import"./text-area-B1NVmLHg.js";import"./time-picker-j2c1grgt.js";import"./tooltip-BBY_kcQ_.js";import"./index-BUrzLQmc.js";import"./iframe-BUmp4v9P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj6Y9BYB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYQJJsbO.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
