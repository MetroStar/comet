import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-DLVQfNEK.js";import"./banner-DyQAgApN.js";import"./button-BXqyO3L3.js";import"./button-group-ksHkBbPj.js";import"./checkbox-CG93fIg_.js";import"./combo-box-Dw716zwh.js";import"./date-picker-Cbrlz2N3.js";import"./error-messages-DQwxQ3pR.js";import"./index-cm5JWLhR.js";import"./form-group-wymoTdrb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CHlGeBd8.js";import"./label-Z58zP1tT.js";import"./modal-nbn3cjTG.js";import"./process-list-DDsIXP2y.js";import"./radio-button-D3C-_jtH.js";import"./range-slider-CX1O6KiW.js";import"./search-0vzl5eJD.js";import"./select-DwK2wipF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CkTX5cWS.js";import"./step-indicator-PHVEZmUf.js";import"./summary-box-rpKWzcmi.js";import"./tag-BaXE9Fwc.js";import"./text-area-CPIHjsdo.js";import"./time-picker-BjWpsv0Q.js";import"./tooltip-Ck9scKOs.js";import"./index-CeC9og-I.js";import"./iframe-u1rK465H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RV7t3OPq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CiZW3QX2.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
