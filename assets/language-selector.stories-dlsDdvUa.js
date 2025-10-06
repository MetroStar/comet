import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-do3Wtiuz.js";import"./banner-C69xj6up.js";import"./button-BjwnDlUa.js";import"./button-group-DaZ29ND5.js";import"./checkbox-OyR24-QB.js";import"./combo-box-D4Ec50_t.js";import"./date-picker-C24u14Kt.js";import"./error-messages-_lA7co94.js";import"./index-DB5TIisB.js";import"./form-group-CWTBhvs3.js";import"./helper-text-BRA2CuHl.js";import"./icon-Ds9U5QK2.js";import"./label-0qqEdO1f.js";import"./modal-BdgCaLBt.js";import"./process-list-C_Gbba5Q.js";import"./radio-button-BNUbyZkN.js";import"./range-slider-dvvIi5fH.js";import"./search-Ca-ELIx0.js";import"./select-nGKBp-EG.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BWuugDej.js";import"./step-indicator-ClF7nu7D.js";import"./summary-box-CQ7ma9q9.js";import"./tag-C7eGu5si.js";import"./text-area-DldIq14N.js";import"./time-picker-BTP0M3i1.js";import"./tooltip-0tlrOCcc.js";import"./index-CsUVYJI9.js";import"./iframe-jnbR5XB0.js";import"./index-yAIAkIfa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-KEPVNFbW.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
