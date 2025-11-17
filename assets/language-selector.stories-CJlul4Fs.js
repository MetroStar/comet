import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BR6WrhPV.js";import"./banner-CoXnAOGv.js";import"./button-Ba5SFYSH.js";import"./button-group-DrJ3dmmp.js";import"./checkbox-DRvVfAOf.js";import"./combo-box-JZtkTgBa.js";import"./date-picker-Dy-u9WJo.js";import"./error-messages-DQwxQ3pR.js";import"./index-_5yDmTtM.js";import"./form-group-DrxAuQof.js";import"./helper-text-C5i0f8Ge.js";import"./icon-R3TMqi9y.js";import"./label-Z58zP1tT.js";import"./modal-Db2SLur8.js";import"./process-list-9EdF__SY.js";import"./radio-button-B6VJ3ZlF.js";import"./range-slider-By0228wn.js";import"./search-DS8MfivK.js";import"./select-nQ058r9b.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Camo7QDz.js";import"./step-indicator-YT2NG5oe.js";import"./summary-box-DmkJ-lJj.js";import"./tag-2Y2MkQKt.js";import"./text-area-abDgHBzS.js";import"./time-picker-B5HPf1ng.js";import"./tooltip-DzHss-R_.js";import"./index-C60PpZKO.js";import"./iframe-CWUXl1bG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-9RNkUL.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EOzoFPlY.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
