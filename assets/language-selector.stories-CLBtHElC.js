import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BWv9IJKq.js";import"./banner-DsPBt72z.js";import"./button-lJR5aED-.js";import"./button-group-Bxj5iVgy.js";import"./checkbox-In1TWY_E.js";import"./combo-box-DAWbcX4M.js";import"./date-picker-BkdMrxwm.js";import"./error-messages-_lA7co94.js";import"./index-Br_kK07F.js";import"./form-group-B9NArTvQ.js";import"./helper-text-BRA2CuHl.js";import"./icon-C9u35B_b.js";import"./label-0qqEdO1f.js";import"./modal-Cd9YNYuZ.js";import"./process-list-CD-g_9tc.js";import"./radio-button-DZ8kb-LA.js";import"./range-slider--TFS-Shg.js";import"./search-Cl8_qv-_.js";import"./select-BfCAPZTm.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DkgoCb6C.js";import"./step-indicator-RQudhJU8.js";import"./summary-box-CiJRHcX-.js";import"./tag-DWDu_7xe.js";import"./text-area-DsNcsWGK.js";import"./time-picker-BQQSmGq0.js";import"./tooltip-CpcUUJ4i.js";import"./index-CdLIUrq1.js";import"./iframe-DaQn1dS-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUGDvriB.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-86W0yJob.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
