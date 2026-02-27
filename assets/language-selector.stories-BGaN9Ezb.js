import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-JRy8o7uW.js";import"./banner-CQ3xCBuG.js";import"./button-Ba7xgwez.js";import"./button-group-B3gTHZWA.js";import"./checkbox-CLvsLWaM.js";import"./combo-box-Co7v8Gdu.js";import"./date-picker-mWD4hatY.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ba-_iRH5.js";import"./form-group-DaNJz7RT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZ8toPDV.js";import"./label-Z58zP1tT.js";import"./modal-u2tm0lfe.js";import"./process-list-nskObF0o.js";import"./radio-button-BqGmz9gl.js";import"./range-slider-zqNchBAK.js";import"./search-DMPs4SjR.js";import"./select-Cd16SEf0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B22i4OXT.js";import"./step-indicator-DQdWZbZs.js";import"./summary-box-BQaBbU0N.js";import"./tag-CRQC5syz.js";import"./text-area-jBrudwtx.js";import"./time-picker-Bt-xFGpB.js";import"./tooltip-CJQbMQMO.js";import"./index-BNIzpdMi.js";import"./iframe-BTdRfY9k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGx-jJq7.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cz8WPAN8.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
