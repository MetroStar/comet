import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BWWVeaG9.js";import"./banner-BoULXacJ.js";import"./button-CQKw_ArU.js";import"./button-group-ewBVF2L4.js";import"./checkbox-BjvifG72.js";import"./combo-box-aN6JnhWz.js";import"./date-picker-C67rITtz.js";import"./error-messages-_lA7co94.js";import"./index-C2_xkeJc.js";import"./form-group-BkBVLNH5.js";import"./helper-text-BRA2CuHl.js";import"./icon-R8YJ2BOW.js";import"./label-0qqEdO1f.js";import"./modal-Bv-vzx9w.js";import"./process-list-BcXx8fgu.js";import"./radio-button-CTioDZzo.js";import"./range-slider-6N7k_X-x.js";import"./search-NPEc2I-5.js";import"./select-BXK56c5V.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DLvb7ydC.js";import"./step-indicator-BJVp4xKi.js";import"./summary-box-hknuY5Lx.js";import"./tag-D_domJr-.js";import"./text-area-BLWxRhg4.js";import"./time-picker-CBvJt52P.js";import"./tooltip-BhXbaBUJ.js";import"./index-Bqv6EQsX.js";import"./iframe-BgblZ3Ci.js";import"./index-BJS_Wybf.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-zF2YK1WT.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
