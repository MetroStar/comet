import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BMCWheN3.js";import"./banner-DXxf7j2A.js";import"./button-BG13cfhe.js";import"./button-group-DH510XBM.js";import"./checkbox-BIksfjMa.js";import"./combo-box-CmNtbie_.js";import"./date-picker-BqFBLI8_.js";import"./error-messages-_lA7co94.js";import"./index-DIfJFMD2.js";import"./form-group-DMa1BOSH.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkVszG8e.js";import"./label-0qqEdO1f.js";import"./modal-DFz5w_J3.js";import"./process-list-DWibcUhP.js";import"./radio-button-BxaYVlRc.js";import"./range-slider-DjynCvMR.js";import"./search-yWSQaSjk.js";import"./select-44mgK95P.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprjmmdW.js";import"./step-indicator-DRL7Hrms.js";import"./summary-box-AVnlpaHk.js";import"./tag-C903ahvi.js";import"./text-area-7d5d4_iK.js";import"./time-picker-ZCAyf2CU.js";import"./tooltip-zZvGvgsP.js";import"./index-4BetU0rA.js";import"./iframe-CBtXVCyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGD1TKzu.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xNoA7Lun.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
