import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Dmb-ffh0.js";import"./banner-DZNvfklf.js";import"./button-DzGNrXYT.js";import"./button-group-Zzh5VRIu.js";import"./checkbox-LlIZ6WAZ.js";import"./combo-box-Bv6VcdXU.js";import"./date-picker-CqoH8LeI.js";import"./error-messages-DQwxQ3pR.js";import"./index-52vSm_bk.js";import"./form-group-DhnpQ1gO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-4RfGqqIJ.js";import"./label-Z58zP1tT.js";import"./modal-DwhLWDUa.js";import"./process-list-DGxHCMjD.js";import"./radio-button-gMU8aMNI.js";import"./range-slider-Dq4GAh67.js";import"./search-B2MV1myA.js";import"./select-BjUKF4It.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DV2fzf3r.js";import"./step-indicator-DdaAIm1x.js";import"./summary-box-CoPcq3HL.js";import"./tag-B4n4yz8K.js";import"./text-area-ClvojZeY.js";import"./time-picker-G362YD_L.js";import"./tooltip-Dq6tjxuf.js";import"./index-oUbQcmvJ.js";import"./iframe-OQEP8bq4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYS2UhCj.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DC7B1Qf2.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
