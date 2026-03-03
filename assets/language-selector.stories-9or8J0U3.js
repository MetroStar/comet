import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DJk-XhMn.js";import"./banner-753k4wS4.js";import"./button-Zp2H4Y6h.js";import"./button-group-C2O7PpJm.js";import"./checkbox-BgWuR-IY.js";import"./combo-box-CihLQ5-J.js";import"./date-picker-tZBs_O5G.js";import"./error-messages-DQwxQ3pR.js";import"./index-CUBRylId.js";import"./form-group-BhQwpRkB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7X0n4qy.js";import"./label-Z58zP1tT.js";import"./modal-BJk45PfD.js";import"./process-list-DZl8MoFR.js";import"./radio-button-CbVGWSxw.js";import"./range-slider-CuyjuimZ.js";import"./search-CxOU0G1I.js";import"./select-dXE1vA8A.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CgJkBig9.js";import"./step-indicator-CMG5DhXp.js";import"./summary-box-BIDD5Ly5.js";import"./tag-DG7R--Z-.js";import"./text-area-DopYU4uh.js";import"./time-picker-C_yvhzgf.js";import"./tooltip-DCRG7Dm3.js";import"./index-Cthlo8g0.js";import"./iframe-CBTPnINx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmdtenRm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BTJpA1Cv.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
