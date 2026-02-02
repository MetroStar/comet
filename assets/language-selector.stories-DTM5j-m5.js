import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BEKSweh_.js";import"./banner-DyAyilqF.js";import"./button-VNXf3ISx.js";import"./button-group-xmotaBdt.js";import"./checkbox-BweNvPRE.js";import"./combo-box-ClEp36RC.js";import"./date-picker-BqoWjb8c.js";import"./error-messages-DQwxQ3pR.js";import"./index-BZ1H5p7K.js";import"./form-group-BFEWiwy1.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C75CzOhg.js";import"./label-Z58zP1tT.js";import"./modal-CEGm1Rs3.js";import"./process-list-D0GJ3lSG.js";import"./radio-button-tlBbfaT6.js";import"./range-slider-D-cIFdgq.js";import"./search-DCoJlB32.js";import"./select-CYSnMBtu.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-3WD2CfWL.js";import"./step-indicator-rn6oeVSC.js";import"./summary-box-Bs9YqzRK.js";import"./tag-CBCRz6dN.js";import"./text-area-BSZLkY_3.js";import"./time-picker-C9u4OHrU.js";import"./tooltip-w2oQOtQH.js";import"./index-DAhVAgpx.js";import"./iframe-DRiTG7GW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgyOCjq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DSAWNYRB.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
