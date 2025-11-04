import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BkSI5mbc.js";import"./banner-CTZ2PdPw.js";import"./button-CsYmh0vm.js";import"./button-group-BPJ6fggK.js";import"./checkbox-DhCPixBd.js";import"./combo-box-BXgqhUEs.js";import"./date-picker-C9E8UeDk.js";import"./error-messages-_lA7co94.js";import"./index-CI7UOko6.js";import"./form-group-CCYs-ltk.js";import"./helper-text-BRA2CuHl.js";import"./icon-GNqBduXf.js";import"./label-0qqEdO1f.js";import"./modal-dzF0TLRm.js";import"./process-list-Dq101AFb.js";import"./radio-button-Do9Rh2zd.js";import"./range-slider-B5r5rPxC.js";import"./search-DhE-ggo7.js";import"./select-1e1qJ9Ro.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-W4oZm-Rd.js";import"./step-indicator-DSv3EHu1.js";import"./summary-box-BS8sVZlh.js";import"./tag-Cq7MI9LS.js";import"./text-area-DviweLtB.js";import"./time-picker-SOqVqpwV.js";import"./tooltip-CWN-T5j-.js";import"./index-ByTD_-5Y.js";import"./iframe-CCHYt90f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7-mVSiM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DNXJughs.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
