import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-COi9ma6z.js";import"./banner-BY97cSax.js";import"./button-CqrPBp8K.js";import"./button-group-CdGkF7WG.js";import"./checkbox-3ChjEf2R.js";import"./combo-box-B6O4vxiK.js";import"./date-picker-Dd9Iw-ol.js";import"./error-messages-_lA7co94.js";import"./index-CE4Qbm93.js";import"./form-group-C2lFXs7K.js";import"./helper-text-BRA2CuHl.js";import"./icon-Eg7KUmam.js";import"./label-0qqEdO1f.js";import"./modal-ByL-yNd7.js";import"./process-list-oXo-lIyy.js";import"./radio-button-C6MUYnX_.js";import"./range-slider-BRFEcZKS.js";import"./search-B58zHbmN.js";import"./select-DOSbCKLB.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BuAtgi14.js";import"./step-indicator-D8MXlKv6.js";import"./summary-box-BxR4roeg.js";import"./tag-CWw6NOTz.js";import"./text-area-d4GYi33a.js";import"./time-picker-CU9bog2Y.js";import"./tooltip-ugUe3fuh.js";import"./index-Cd-en3Xw.js";import"./iframe-BiUBZBi9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L6niw3Vl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Br38tAj3.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
