import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BVE92j7Y.js";import"./banner-DzZkBSl7.js";import"./button-CE7abiYA.js";import"./button-group-BrbB8tWM.js";import"./checkbox-BO3qrbWe.js";import"./combo-box-DSpel1I0.js";import"./date-picker-DnfiAagl.js";import"./error-messages-DQwxQ3pR.js";import"./index-DFLXBMl_.js";import"./form-group-BG3QBWOY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BNRbLw1d.js";import"./label-Z58zP1tT.js";import"./modal-CTkWVRbb.js";import"./process-list-nPCUeE35.js";import"./radio-button-CfNv50JC.js";import"./range-slider-Dv7KAwgE.js";import"./search-BxPVF8-1.js";import"./select-ClGZrASO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DSCRVd9o.js";import"./step-indicator-OiSvWuYN.js";import"./summary-box-DfkEA6A5.js";import"./tag-gzpwfcFc.js";import"./text-area-GvWAvMOP.js";import"./time-picker-CNu7S1ey.js";import"./tooltip-wvfn-vUQ.js";import"./index-Ce1QA_hM.js";import"./iframe-B0hIjtUu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiDsKGxm.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAMhbk1n.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
