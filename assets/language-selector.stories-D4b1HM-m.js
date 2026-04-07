import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-C5ecXiWl.js";import"./banner-CpscEPZS.js";import"./button-CCplqAD4.js";import"./button-group-CBD_PpwK.js";import"./checkbox-DgCQLK4R.js";import"./combo-box-xLPTFQHE.js";import"./date-picker-CVz009oa.js";import"./error-messages-DQwxQ3pR.js";import"./index-BLpbz4XI.js";import"./form-group-DXfMq-IB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DR4j0tBc.js";import"./label-Z58zP1tT.js";import"./modal-DOzHsvEh.js";import"./process-list-CLXtVEns.js";import"./radio-button-DDYqB7cN.js";import"./range-slider-CqZElCAA.js";import"./search-BCF1VKn-.js";import"./select-CEldNHvj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B33QLFtI.js";import"./step-indicator-D6s8wIN1.js";import"./summary-box-DdTvFNeq.js";import"./tag-CawMR5EG.js";import"./text-area-Ccz3oOr5.js";import"./time-picker-BmAckJCq.js";import"./tooltip-CbRrGeME.js";import"./index-D1vcuhlz.js";import"./iframe-CWd_O5TO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BragvABs.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BjWNQafm.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
