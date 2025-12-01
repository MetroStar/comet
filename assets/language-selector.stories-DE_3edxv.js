import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DMBuCYe_.js";import"./banner-DFFrh2we.js";import"./button-CebCDk22.js";import"./button-group-CP6QYoDT.js";import"./checkbox-BNnJF55M.js";import"./combo-box-C7-v9zyp.js";import"./date-picker-CAgeyYpd.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVf-osoh.js";import"./form-group-D9z_c3KR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Box8_GlQ.js";import"./label-Z58zP1tT.js";import"./modal-BIpf-zb1.js";import"./process-list-Dy1X11P1.js";import"./radio-button-DYlmKEnZ.js";import"./range-slider-BGMS1c5-.js";import"./search-Bf4lYVbJ.js";import"./select-CtAQSun1.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-qfke9_ky.js";import"./step-indicator-qlAV-NTT.js";import"./summary-box-CWhGKQyS.js";import"./tag-B8oHhohV.js";import"./text-area-DTRoQh8l.js";import"./time-picker-Xaqt13c1.js";import"./tooltip-C2SUIZOU.js";import"./index-CiA_ydS_.js";import"./iframe-Cu6PFQIF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sxjDgNp1.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BgeT6qmK.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
