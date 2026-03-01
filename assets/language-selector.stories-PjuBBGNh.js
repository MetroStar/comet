import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Bar13plf.js";import"./banner-DbFUAhNG.js";import"./button-ffGbt_Ww.js";import"./button-group-BaU0kfnO.js";import"./checkbox-BZKoH8WH.js";import"./combo-box-DN8WGebT.js";import"./date-picker-UahoSx6W.js";import"./error-messages-DQwxQ3pR.js";import"./index-CcVn3sHa.js";import"./form-group-CS7jclOy.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CSGERsm9.js";import"./label-Z58zP1tT.js";import"./modal-B6MEUZgO.js";import"./process-list-C1-6C-U2.js";import"./radio-button-D0M8jQtJ.js";import"./range-slider-CzZDIB_7.js";import"./search-BYXCCPZR.js";import"./select-DhAAD6zD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CjKb598A.js";import"./step-indicator-BLj_ZoPZ.js";import"./summary-box-CKMaVeZ4.js";import"./tag-BOa7e9QQ.js";import"./text-area-Bl1HSWIL.js";import"./time-picker-BROe3EpJ.js";import"./tooltip-ZrQjdNc3.js";import"./index-CiqF2SW8.js";import"./iframe-CBeyx4WF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uAYjUUGB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-aiAaYu5C.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
