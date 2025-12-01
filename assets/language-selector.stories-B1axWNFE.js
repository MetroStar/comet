import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Hzj3yCl4.js";import"./banner-BM68dEEY.js";import"./button-CAdIHhr5.js";import"./button-group-B9dZJN23.js";import"./checkbox-CyHFcZFX.js";import"./combo-box-CtcodrSH.js";import"./date-picker-D-9P-Y26.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVEhI-RK.js";import"./form-group-xZ43lr12.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIOfJG2o.js";import"./label-Z58zP1tT.js";import"./modal-DmgRvfLd.js";import"./process-list-B5mxUUsY.js";import"./radio-button-BjMGGsE7.js";import"./range-slider-DC0X_owM.js";import"./search-BGfPHDPn.js";import"./select-DkyaY8B2.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DVYJRvZP.js";import"./step-indicator-DBhmaTHM.js";import"./summary-box-Bfah1ntm.js";import"./tag-BfPPkP3z.js";import"./text-area-DGQ6Eimz.js";import"./time-picker-DDH8YCye.js";import"./tooltip-BgKzB3lI.js";import"./index-B1cA9pBl.js";import"./iframe-y5ok3I9y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhulT-dX.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DMAFzJVB.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
