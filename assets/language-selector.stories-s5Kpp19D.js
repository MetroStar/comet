import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-CSaK-x_V.js";import"./banner-BxYGXyna.js";import"./button-GJ2BfbS-.js";import"./button-group-LFVyA_Fj.js";import"./checkbox-CdQ19bvs.js";import"./combo-box-CR-5V3Ia.js";import"./date-picker-DkK0_rB_.js";import"./error-messages-DQwxQ3pR.js";import"./index-oYevnVru.js";import"./form-group-ij1d4Lar.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DgbwmsD7.js";import"./label-Z58zP1tT.js";import"./modal-CgDi7N4S.js";import"./process-list-CodrIgEm.js";import"./radio-button-CX8ESqGR.js";import"./range-slider-fSM1VMq-.js";import"./search-Cojt-1JY.js";import"./select-B2E_eMP0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D6b4wbVc.js";import"./step-indicator-BF9Xj5dC.js";import"./summary-box-DopPB8AA.js";import"./tag-CaZv0Xjc.js";import"./text-area-BDP9Xbyw.js";import"./time-picker-Qm8rb22s.js";import"./tooltip-Zvlq8EIV.js";import"./index-q8yHh5aR.js";import"./iframe-BWsQfN69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfnSD9B1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-o16bkFsK.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
