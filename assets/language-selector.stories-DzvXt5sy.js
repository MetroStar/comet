import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-EDJB2sTo.js";import"./banner-BOpU37qp.js";import"./button-DBKb0ewM.js";import"./button-group-Bh92E-bS.js";import"./checkbox-Dw6UHJ51.js";import"./combo-box-CSSj876a.js";import"./date-picker-CrF8QLeb.js";import"./error-messages-_lA7co94.js";import"./index-Dz3KGBJ1.js";import"./form-group-D61Ut1VC.js";import"./helper-text-BRA2CuHl.js";import"./icon-C2GMX_Yd.js";import"./label-0qqEdO1f.js";import"./modal-SzqUbwHE.js";import"./process-list-DWkHGGyu.js";import"./radio-button-CJrfb0RL.js";import"./range-slider-Dclr-Ayn.js";import"./search-D8XGy_cg.js";import"./select-Dp05dyOy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DrY8ZEeD.js";import"./step-indicator-QljTgDVY.js";import"./summary-box-ubPFwvIt.js";import"./tag-CTmDgqa8.js";import"./text-area-BF6Qq-LB.js";import"./time-picker-D2RHFb7y.js";import"./tooltip-CkbpW6i9.js";import"./index-CR8NEJay.js";import"./iframe-vQD5sTXz.js";import"./index-fgMZaG23.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CWfwrV3c.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
