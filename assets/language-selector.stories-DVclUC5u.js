import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DSl4auMC.js";import"./banner-CEZKUkbF.js";import"./button-B7gNPYIL.js";import"./button-group-Brorikwu.js";import"./checkbox-eWG9SJdV.js";import"./combo-box-BsFocY2f.js";import"./date-picker-DZDMadHV.js";import"./error-messages-DQwxQ3pR.js";import"./index-CYtU26vE.js";import"./form-group-DXXdEMrs.js";import"./helper-text-C5i0f8Ge.js";import"./icon-uymm9zyE.js";import"./label-Z58zP1tT.js";import"./modal-D8oOiZoK.js";import"./process-list-CUm5Q4da.js";import"./radio-button-ClH9r-YV.js";import"./range-slider-DXbD-WkO.js";import"./search-CVMveQck.js";import"./select-Dm9gk4f-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DNWbVdiF.js";import"./step-indicator-BVn4ZNzg.js";import"./summary-box-D7Fun5SH.js";import"./tag-BNT1hXJ0.js";import"./text-area-DLgrCPMA.js";import"./time-picker-BBv860sW.js";import"./tooltip-Bg5a6Fm-.js";import"./index-cRcqcJEf.js";import"./iframe-CUCs5BC9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLD1Bu8G.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C2r2cwpe.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
