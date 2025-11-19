import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Bse5DExo.js";import"./banner-BwO0HiA4.js";import"./button-DiHoCjUb.js";import"./button-group-CsEIu6gv.js";import"./checkbox-DC3XQgFH.js";import"./combo-box-CrVnplkd.js";import"./date-picker-ao6BA4Jq.js";import"./error-messages-DQwxQ3pR.js";import"./index-BfIDrPCA.js";import"./form-group-BYOZKLJh.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DPOheGDS.js";import"./label-Z58zP1tT.js";import"./modal-D-P-giTm.js";import"./process-list-BYk2qEP5.js";import"./radio-button-D6dovua3.js";import"./range-slider-BM6BzcML.js";import"./search-O5uHTu-n.js";import"./select-BUCNjJ4o.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DZJPNjAO.js";import"./step-indicator-7qKQZOBY.js";import"./summary-box-D5bHgkv8.js";import"./tag-DXQHCdsJ.js";import"./text-area-DqvxoD8F.js";import"./time-picker-DJ8eVvNZ.js";import"./tooltip-CkP7cUnO.js";import"./index-C0ruH5vH.js";import"./iframe-Cu46YZU-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt3gd5Dn.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dj0TSj9e.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
