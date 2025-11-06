import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CCNOA2Tt.js";import"./banner-TnjcYjBW.js";import"./button-DwHw6MmX.js";import"./button-group-BsGuBAvu.js";import"./checkbox-D1-xw26W.js";import"./combo-box-BW_ELrKu.js";import"./date-picker-u_PmbiS3.js";import"./error-messages-_lA7co94.js";import"./index-CK6kpZ6D.js";import"./form-group-2abxc0CZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CA8rOCQY.js";import"./label-0qqEdO1f.js";import"./modal-COg9AbFD.js";import"./process-list-Bf0Q9txv.js";import"./radio-button-C1_K-Rqt.js";import"./range-slider-DZSXjHWc.js";import"./search-DFQDI6Z7.js";import"./select-DRe3cYfn.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B6vEvGsX.js";import"./step-indicator-hmRZqG9G.js";import"./summary-box-BdfEVXxD.js";import"./tag-6m6BCwW9.js";import"./text-area-vDjx9bIg.js";import"./time-picker-BK8RVqUd.js";import"./tooltip-CCefTJZZ.js";import"./index-BnOVKaQE.js";import"./iframe-06KVgpNd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BuGsqDMl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-McuMDvj6.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
