import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Bl7Y-jHs.js";import"./banner-ByijTyXR.js";import"./button-BvDTT6fN.js";import"./button-group-DawoTUXk.js";import"./checkbox-DGKA9YCH.js";import"./combo-box-BxSvOq4M.js";import"./date-picker-hbP6XtI6.js";import"./error-messages-DQwxQ3pR.js";import"./index-awo_DVbo.js";import"./form-group-DxuCwoil.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DzaDF0tY.js";import"./label-Z58zP1tT.js";import"./modal-CdiObuoV.js";import"./process-list-CEfxPAJX.js";import"./radio-button-CQhC1dHP.js";import"./range-slider-CqCUYOdR.js";import"./search-DxnADgBP.js";import"./select-CzSkEtcT.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-xyfAWu0c.js";import"./step-indicator-CpGNsveB.js";import"./summary-box-BGlLSB41.js";import"./tag-BdHPqSov.js";import"./text-area-55osgg6i.js";import"./time-picker-Dw7X9sI8.js";import"./tooltip-D6haW_oM.js";import"./index-DieJCJBc.js";import"./iframe-E8fts5wg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmTx8Cep.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSicFjZZ.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
