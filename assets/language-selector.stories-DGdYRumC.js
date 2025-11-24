import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BdW5CQyz.js";import"./banner-C6irt5yh.js";import"./button-Cq7i4H52.js";import"./button-group-B1vas01y.js";import"./checkbox-D-uCv-kq.js";import"./combo-box-BAn8IQj_.js";import"./date-picker-Cpa9mYFW.js";import"./error-messages-DQwxQ3pR.js";import"./index-BcrKG5Hi.js";import"./form-group-CEqucKs6.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CDSXv68S.js";import"./label-Z58zP1tT.js";import"./modal-CiD3J_dY.js";import"./process-list-DsKEl7ZV.js";import"./radio-button-1b9u9ASV.js";import"./range-slider-1QPLkZfK.js";import"./search-Jk9E_xgr.js";import"./select-CfVwR03_.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-kEI83GIN.js";import"./step-indicator-CECnrlTP.js";import"./summary-box-BTyAB9YR.js";import"./tag-DxN_SjvT.js";import"./text-area-DEutEBFv.js";import"./time-picker-VV5_xO_L.js";import"./tooltip-CynE1fwd.js";import"./index-DDfvyXav.js";import"./iframe-Cdpn9PYs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-De4lQ0Y0.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BRZPKXJE.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
