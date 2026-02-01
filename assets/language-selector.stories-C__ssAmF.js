import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-B2o3L5ZV.js";import"./banner-T9UCSkUS.js";import"./button-CGO10ZW3.js";import"./button-group-CLEDvRIf.js";import"./checkbox-DjsJa_hv.js";import"./combo-box-BafjISi3.js";import"./date-picker-CBzsr4eS.js";import"./error-messages-DQwxQ3pR.js";import"./index-D15vhobV.js";import"./form-group-BobNIxMO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BhI-VD6M.js";import"./label-Z58zP1tT.js";import"./modal-Nt6vEbzp.js";import"./process-list-D4WiINi_.js";import"./radio-button-CaaqLWeq.js";import"./range-slider-Biv5tL1q.js";import"./search-i0MjTWlB.js";import"./select-DqWfVKLa.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-RxrWG83b.js";import"./step-indicator-B5xlPv5_.js";import"./summary-box-D6p7Ly2b.js";import"./tag-D_TXvely.js";import"./text-area-sCCd6OhD.js";import"./time-picker-NspqPdtx.js";import"./tooltip-DZqvoc_b.js";import"./index-CfGYGdnL.js";import"./iframe-D6g7oyBT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSW12edA.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CygnMxBv.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
