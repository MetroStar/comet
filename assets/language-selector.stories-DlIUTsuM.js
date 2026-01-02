import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-luUx04bm.js";import"./banner-D4Eit51W.js";import"./button-DNdCgeu5.js";import"./button-group-BD0JEpF_.js";import"./checkbox-BJ-xYc0N.js";import"./combo-box-DXcbu5I5.js";import"./date-picker-8WhXjeat.js";import"./error-messages-DQwxQ3pR.js";import"./index-D86_PsyH.js";import"./form-group-CX0LVAtq.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DUaH-WVT.js";import"./label-Z58zP1tT.js";import"./modal-B0m6buq3.js";import"./process-list-DpHne8bX.js";import"./radio-button-CWbykzPm.js";import"./range-slider-CT2-RIUa.js";import"./search-D2qakHU1.js";import"./select-CIPD7EMl.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CJCZeBC9.js";import"./step-indicator-yM6dTqmK.js";import"./summary-box-Cp1bfIsu.js";import"./tag-RKDNbzYK.js";import"./text-area-AMxLhMtc.js";import"./time-picker-D42idwCe.js";import"./tooltip-BPlFa0e3.js";import"./index-8gstkWMy.js";import"./iframe-BpOry1Kh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7DyRbAp.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bqk60UQq.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
