import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Ydl4yuFa.js";import"./banner-YXUMuJIv.js";import"./button-BXofz8FW.js";import"./button-group-wT7CE2SS.js";import"./checkbox-lDKxywH-.js";import"./combo-box-DEbXvHRM.js";import"./date-picker-EBge1TGV.js";import"./error-messages-DQwxQ3pR.js";import"./index-BwkW8ppQ.js";import"./form-group-CsY8k-GF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-bizhDbD6.js";import"./label-Z58zP1tT.js";import"./modal-DY_daRfu.js";import"./process-list-B87QmEjq.js";import"./radio-button-BUM_kFdV.js";import"./range-slider-CslxIG2u.js";import"./search-BRFeYrNH.js";import"./select-CcFRbJmc.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DTDxIAJf.js";import"./step-indicator-BNbKgUG7.js";import"./summary-box-CRdqISwY.js";import"./tag-DvzQhobB.js";import"./text-area-CO0wGerf.js";import"./time-picker-D_d0pSFG.js";import"./tooltip-P0HHh0Fa.js";import"./index-h9M4Wkah.js";import"./iframe-D2kwuCXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYA2rnwY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-TaCLZyBF.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
