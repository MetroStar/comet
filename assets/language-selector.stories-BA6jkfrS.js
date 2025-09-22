import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-C1T_Hy-L.js";import"./banner-DO5hvgnM.js";import"./button-XgcnM0uG.js";import"./button-group-CvPdpJzo.js";import"./checkbox-B3YkBqWl.js";import"./combo-box-WfySd2Em.js";import"./date-picker-CT6uOhvT.js";import"./error-messages-_lA7co94.js";import"./index-CmTLF3eZ.js";import"./form-group-oS_-cAgG.js";import"./helper-text-BRA2CuHl.js";import"./icon-CMaK07ig.js";import"./label-0qqEdO1f.js";import"./modal-CXY4gmYy.js";import"./process-list-zlPAdYXT.js";import"./radio-button-C1coLMFg.js";import"./range-slider-CkEeCFda.js";import"./search-DpDw9Dfe.js";import"./select-DnxPJAIv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-hoOHyEsx.js";import"./step-indicator-DVrqYPba.js";import"./summary-box-CeIzJN4S.js";import"./tag-CQumEc23.js";import"./text-area-DgYVSH4W.js";import"./time-picker-CUgQjvfO.js";import"./tooltip-Dltimqdy.js";import"./index-DJxORCHa.js";import"./iframe-CCJFRkb0.js";import"./index-MnkQOSnn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DIfjoeEk.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const K=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,K as __namedExportsOrder,J as default};
