import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-SJRpy6TF.js";import"./banner-DKvHUpFc.js";import"./button-Co8dLuMH.js";import"./button-group-CsV4n4S0.js";import"./checkbox-BgEEI_GS.js";import"./combo-box-CkAo5f6g.js";import"./date-picker-ChpWtyOR.js";import"./error-messages-_lA7co94.js";import"./index-tY_h3Y9E.js";import"./form-group-DLQEuROg.js";import"./helper-text-BRA2CuHl.js";import"./icon-CQoY4QYS.js";import"./label-0qqEdO1f.js";import"./modal-COkJuVMB.js";import"./process-list-DF-yjf2Q.js";import"./radio-button-BKRS0NMa.js";import"./range-slider-7S54eZrE.js";import"./search-Cnde9Nqy.js";import"./select-byDVf-8O.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Baj4Nh5d.js";import"./step-indicator-yzWIyMqI.js";import"./summary-box-CWWkQxQT.js";import"./tag-B7uUqTnf.js";import"./text-area-DFlZYgWg.js";import"./time-picker-XAcq8nAQ.js";import"./tooltip-CRmdnTdO.js";import"./index-l37dtnHA.js";import"./iframe-DKZDQxow.js";import"./index-Df-QuvC-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxjvmrCa.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
