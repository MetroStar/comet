import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-C1p0Tl06.js";import"./banner-DoI9yGrg.js";import"./button-CzpSgtjY.js";import"./button-group-BfU8yjRw.js";import"./checkbox-DtOiFVfN.js";import"./combo-box-DogqRNR0.js";import"./date-picker-Dijhhk7v.js";import"./error-messages-DQwxQ3pR.js";import"./index-CtzF-D60.js";import"./form-group-Cai7TlWJ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Drjjlf9N.js";import"./label-Z58zP1tT.js";import"./modal-CehYCqMP.js";import"./process-list-CGZSrz7X.js";import"./radio-button-CfiXaEF6.js";import"./range-slider-6r50nwPO.js";import"./search-BjUh2JlI.js";import"./select-v7nb6AkK.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D8j5nbHS.js";import"./step-indicator-CcO3oml5.js";import"./summary-box-YvpXG5nZ.js";import"./tag-OTrlQ7_Y.js";import"./text-area-BMhIGIyW.js";import"./time-picker-DQcFw9pV.js";import"./tooltip-C8stFGcz.js";import"./index-8bL-dlWE.js";import"./iframe-CyoivpIQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjtC_FDd.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-LC7cK7JR.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
