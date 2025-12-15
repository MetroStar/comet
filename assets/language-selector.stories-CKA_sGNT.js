import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DcU0b4S9.js";import"./banner-Zhn659kb.js";import"./button-B_-ONNZl.js";import"./button-group-BKOewsSA.js";import"./checkbox-C3tZzpbU.js";import"./combo-box-Q1ShTlun.js";import"./date-picker-Wpd8_OKF.js";import"./error-messages-DQwxQ3pR.js";import"./index-B7AoSx0a.js";import"./form-group-CMLBbM3T.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DCURlvdx.js";import"./label-Z58zP1tT.js";import"./modal-BV7fkCww.js";import"./process-list-gyaY5MhK.js";import"./radio-button-idXHHZgI.js";import"./range-slider-DSlEtBnj.js";import"./search-DPGJ6RwK.js";import"./select-DccGlsGn.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BeC0GHZw.js";import"./step-indicator-CEe8z7Jq.js";import"./summary-box-Bw0p2-tj.js";import"./tag-BClIq1Bj.js";import"./text-area-B6LM3Fp9.js";import"./time-picker-BqOXWfTb.js";import"./tooltip-DrkxkMMW.js";import"./index-2ou9KEVW.js";import"./iframe-B742Kdb9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_5Z-PB-3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bu9PEM7P.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
