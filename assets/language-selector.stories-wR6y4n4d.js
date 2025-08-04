import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DEpAyD-X.js";import"./banner-CIEAiagf.js";import"./button-CkmPZfQ7.js";import"./button-group-BLfN6Qzi.js";import"./checkbox-CiZ0LQAf.js";import"./combo-box-CPoxHoLO.js";import"./date-picker-1x-RJkWC.js";import"./error-messages-_lA7co94.js";import"./index-DV0osu16.js";import"./form-group-CLG5AUFS.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaCh6IKn.js";import"./label-0qqEdO1f.js";import"./modal-CS74MdwY.js";import"./process-list-EgDY_ZW-.js";import"./radio-button-BojC1or9.js";import"./range-slider-Crd-k5Lz.js";import"./search-BosVVfA0.js";import"./select-BK3H334u.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DqRkn5Co.js";import"./step-indicator-v3Vvymes.js";import"./summary-box-B2UM3Fmg.js";import"./tag-D2rL-ia4.js";import"./text-area-BkFw3Hdn.js";import"./time-picker-Btaj1Wdb.js";import"./tooltip-BnWcB7Kc.js";import"./index-BV__WvX7.js";import"./iframe-U5vUr3EP.js";import"./index-Bp6jiaQq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7-aAo-x.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
