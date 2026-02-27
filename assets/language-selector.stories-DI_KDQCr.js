import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-CfPzz4nf.js";import"./banner-BH6B8BCY.js";import"./button-CLevJzxR.js";import"./button-group-D3Ocr3Rb.js";import"./checkbox-Cc0V9sR6.js";import"./combo-box-TU4qt16Y.js";import"./date-picker-DSHGeHYl.js";import"./error-messages-DQwxQ3pR.js";import"./index-BsEblj0h.js";import"./form-group-BzmrJy3n.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D2Nqola7.js";import"./label-Z58zP1tT.js";import"./modal-DfDUd-Mt.js";import"./process-list-UharPk4r.js";import"./radio-button-D4Pk_Rgl.js";import"./range-slider-sQ5Tj5dy.js";import"./search-CFh4K7A8.js";import"./select-Kk8L1GnB.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D0bVirTZ.js";import"./step-indicator-z7wQapN2.js";import"./summary-box-BkJ1H1hK.js";import"./tag-ZOpGD9hG.js";import"./text-area-ynEclwl4.js";import"./time-picker-Bb-pazU6.js";import"./tooltip-Cg_p7vCm.js";import"./index-BdG5vuSr.js";import"./iframe-D2HmkBK5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dyunygu1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CucFHm0F.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
