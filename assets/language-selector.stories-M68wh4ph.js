import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-sgBBeN_3.js";import"./banner-BlKhwcl-.js";import"./button-s6X5UBaR.js";import"./button-group-B1aWv9gb.js";import"./checkbox-cnQ_-peT.js";import"./combo-box-ByFKHUsq.js";import"./date-picker-CdtWHcRU.js";import"./error-messages-_lA7co94.js";import"./index-CRpSyyh9.js";import"./form-group-B-Pr4jGu.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDcUgKz8.js";import"./label-0qqEdO1f.js";import"./modal-B-Ar_YiJ.js";import"./process-list-B1j8-mm9.js";import"./radio-button-B5LIr0wS.js";import"./range-slider-CCd_gb87.js";import"./search-B2v06REB.js";import"./select-CFmg9oUl.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-T3keRwyR.js";import"./step-indicator-BjOG0FUs.js";import"./summary-box-Dep7O2aS.js";import"./tag-CvARMcmu.js";import"./text-area-ktJJJxPq.js";import"./time-picker-Dpbrbtdg.js";import"./tooltip-Ce_IMZUp.js";import"./index-BrPJmFEP.js";import"./iframe-CUeiGFJS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hkmjj3pC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUB1n4uP.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
