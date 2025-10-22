import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-lkz4hOMD.js";import"./banner-Ig5f_ff_.js";import"./button-ByaPeP45.js";import"./button-group-BYLDb9dK.js";import"./checkbox-Bx0i06cV.js";import"./combo-box-CYlMeI46.js";import"./date-picker-Bfyv2fVt.js";import"./error-messages-_lA7co94.js";import"./index-Bj3PxKMc.js";import"./form-group-CZMC42k8.js";import"./helper-text-BRA2CuHl.js";import"./icon-qxS9RIgY.js";import"./label-0qqEdO1f.js";import"./modal-DHbPHUzb.js";import"./process-list-CdCHmAIf.js";import"./radio-button-BCFO0GZX.js";import"./range-slider-CLdCU-10.js";import"./search-DxDEgAvO.js";import"./select-BgcnNTUP.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-6hTBLbFk.js";import"./step-indicator-DVqdwgVq.js";import"./summary-box-C1sGnI8z.js";import"./tag-BtjAR3XH.js";import"./text-area-CY6IMMmT.js";import"./time-picker-CDjYCY_5.js";import"./tooltip-BpJC97gU.js";import"./index-BgC3XmV1.js";import"./iframe-BDLZuKeY.js";import"./index-BC9Je7_j.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BY9Gf3eC.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
