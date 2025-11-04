import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-By7JvPdL.js";import"./banner-CrFijEhj.js";import"./button-EuharW3P.js";import"./button-group-Bghajen5.js";import"./checkbox-DD_ifgi5.js";import"./combo-box-BqqLAMBj.js";import"./date-picker-X2Em5qj8.js";import"./error-messages-_lA7co94.js";import"./index-DksUg_Pu.js";import"./form-group-7iDqG7wI.js";import"./helper-text-BRA2CuHl.js";import"./icon-CzosSpGO.js";import"./label-0qqEdO1f.js";import"./modal-CxKo2Lel.js";import"./process-list-CK3CD4P9.js";import"./radio-button-BuriEYG-.js";import"./range-slider-DtOWQc-J.js";import"./search-DGAjiiYe.js";import"./select-6Fbn24rS.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-uJ66I4dg.js";import"./step-indicator-CeJIv4ob.js";import"./summary-box-DN7XFtmt.js";import"./tag-BRPKOBzf.js";import"./text-area-ChEJ_jFf.js";import"./time-picker-H4II5i2g.js";import"./tooltip-jTh08c-G.js";import"./index-KAwCHCmc.js";import"./iframe-Df-qv7MF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzHzm4Sz.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJq8K2Sb.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
