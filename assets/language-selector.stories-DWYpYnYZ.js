import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BNfe135G.js";import"./banner-DPjbFk6x.js";import"./button-C-D3Shbk.js";import"./button-group-BCoHKgA-.js";import"./checkbox-GPYpo4RE.js";import"./combo-box-DUwNofml.js";import"./date-picker-DfAmFoHa.js";import"./error-messages-_lA7co94.js";import"./index-ZT5FrD4g.js";import"./form-group-CiFlcqBa.js";import"./helper-text-BRA2CuHl.js";import"./icon-CbBiLLJ0.js";import"./label-0qqEdO1f.js";import"./modal-Dre79qFw.js";import"./process-list-DJDoVvk0.js";import"./radio-button-C9VBjnj1.js";import"./range-slider-7Gmc7fk2.js";import"./search-CGRST86R.js";import"./select-BP-JJAUc.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dqf_N2g4.js";import"./step-indicator-CsJry-v3.js";import"./summary-box-1CmwUG7w.js";import"./tag-zmEcz-se.js";import"./text-area-C9pHn9jX.js";import"./time-picker-O_U2zYQF.js";import"./tooltip-cZpruF5b.js";import"./index-BECprJbH.js";import"./iframe-DksaedcG.js";import"./index-Bl_X5Dmy.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CmIK2Abd.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
