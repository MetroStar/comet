import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-MLSJ1qAa.js";import"./banner-CZ791pMQ.js";import"./button-CF9efJMC.js";import"./button-group-CyNdtrB1.js";import"./checkbox-CnbmgKsJ.js";import"./combo-box-BfjGAN3U.js";import"./date-picker-VEt5vO7h.js";import"./error-messages-DQwxQ3pR.js";import"./index-NijndOXy.js";import"./form-group-BczgvB8Y.js";import"./helper-text-C5i0f8Ge.js";import"./icon-w-WB5_9_.js";import"./label-Z58zP1tT.js";import"./modal-sHxpdT3B.js";import"./process-list-BYnHW8RD.js";import"./radio-button-DitFf2If.js";import"./range-slider-Cy-87WO9.js";import"./search-VnOoVJQO.js";import"./select-BzPUx0jF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BRdvMZGO.js";import"./step-indicator-DV3EBP1L.js";import"./summary-box-BkFoCo6H.js";import"./tag-CWjkauZ_.js";import"./text-area-DQz5z8KE.js";import"./time-picker-aqy_O4vE.js";import"./tooltip-CckFkPTI.js";import"./index-BfAW8-H0.js";import"./iframe-BVPKJM18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7O_8YBX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwz56cnG.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
