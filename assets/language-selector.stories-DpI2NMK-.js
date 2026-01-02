import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-_ySZ1kIM.js";import"./banner-DDXVgGyN.js";import"./button-BTS2x0Pt.js";import"./button-group-_vnsl2F_.js";import"./checkbox-DJRaGhmt.js";import"./combo-box-70sdfL1_.js";import"./date-picker-eKStoA0t.js";import"./error-messages-DQwxQ3pR.js";import"./index-80aeHvEm.js";import"./form-group-CWgS9-1Q.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BFPF_o-y.js";import"./label-Z58zP1tT.js";import"./modal-BNXAw0Vh.js";import"./process-list-BbE7PYOl.js";import"./radio-button-DTxW2Np9.js";import"./range-slider-CtaOGn7K.js";import"./search-J78xjvHz.js";import"./select-C7SsP2-G.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-s9UKtouU.js";import"./step-indicator-DdT1SOvY.js";import"./summary-box-D49JJTOM.js";import"./tag-BwLKNIcJ.js";import"./text-area-BH5aI-nX.js";import"./time-picker-BV7NhZs-.js";import"./tooltip-Dw1tkfBR.js";import"./index-DfNGQrnd.js";import"./iframe-Dos1JflN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JGxDgrpx.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BqRRjYiV.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
