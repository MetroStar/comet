import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BPs16-FG.js";import"./banner-LwyMWt_f.js";import"./button-DzOuhbyX.js";import"./button-group-DYkrmCJV.js";import"./checkbox-DXuqZY3J.js";import"./combo-box-C7iC2mHN.js";import"./date-picker-DVrnKbmB.js";import"./error-messages-DQwxQ3pR.js";import"./index-BqWP0DP-.js";import"./form-group-CqavwUjT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZJuTWWU.js";import"./label-Z58zP1tT.js";import"./modal-Be2O8iTh.js";import"./process-list-COVkMve9.js";import"./radio-button-CTxx2WwS.js";import"./range-slider-D1_yv7oc.js";import"./search-DypyX-qM.js";import"./select-Cp8HWSd0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CmhnIneU.js";import"./step-indicator-BqqEEUy_.js";import"./summary-box-vGIC5NTA.js";import"./tag-CB3TBIup.js";import"./text-area--8jwfK7F.js";import"./time-picker-BxfpYFKH.js";import"./tooltip-DcEE479F.js";import"./index-ByS0UJ_H.js";import"./iframe-Bvnd1wKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tyhn6axX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DBgtOXSw.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
