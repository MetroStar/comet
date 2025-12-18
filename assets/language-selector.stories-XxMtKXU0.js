import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-C_C78in7.js";import"./banner-BgiZqRlo.js";import"./button-tylLr4j2.js";import"./button-group-D6cjC1Vo.js";import"./checkbox-B6VyoAKp.js";import"./combo-box-CDNvDZLL.js";import"./date-picker-DgQlJTCw.js";import"./error-messages-DQwxQ3pR.js";import"./index-CdaV37ys.js";import"./form-group-DoY8VT3L.js";import"./helper-text-C5i0f8Ge.js";import"./icon-hzBFwrUe.js";import"./label-Z58zP1tT.js";import"./modal-DLp_famE.js";import"./process-list-DQ8FW98J.js";import"./radio-button-C3p27onq.js";import"./range-slider-Cluh4832.js";import"./search-BMB22s0V.js";import"./select-Dff7ZjSm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DtkG30B7.js";import"./step-indicator-CDua6ht5.js";import"./summary-box-CvRPeRE0.js";import"./tag-AOv4Bgzm.js";import"./text-area-BKiL77Z2.js";import"./time-picker-CernixGi.js";import"./tooltip-KHEIxHIJ.js";import"./index-91E-2JV-.js";import"./iframe-BTUuw-2g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrsoTcc4.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CgEYPfm3.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
