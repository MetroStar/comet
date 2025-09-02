import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DdVOCvYZ.js";import"./banner-DQMHi-aW.js";import"./button-DI5qMgFe.js";import"./button-group-CsmqFrP1.js";import"./checkbox-PjFvKvpp.js";import"./combo-box-B2haW5dU.js";import"./date-picker-BIPhfaAN.js";import"./error-messages-_lA7co94.js";import"./index-j0ODhhQa.js";import"./form-group-BqN9ZsX3.js";import"./helper-text-BRA2CuHl.js";import"./icon-CufaamKb.js";import"./label-0qqEdO1f.js";import"./modal-BZ7djAFQ.js";import"./process-list-DMfh53jt.js";import"./radio-button-BE7ko7w4.js";import"./range-slider-DHVUPffB.js";import"./search-CArZRBWZ.js";import"./select-6paA5eWu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-E2RY7NFc.js";import"./step-indicator-DmrnODcm.js";import"./summary-box-DYsEWNiy.js";import"./tag-C21wbAG6.js";import"./text-area-BloRP6vR.js";import"./time-picker-BCDXAFpJ.js";import"./tooltip-BfeS9RUy.js";import"./index-BwND8XNc.js";import"./iframe-ZYripNYc.js";import"./index-C-nO5zU_.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOTlr87W.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
