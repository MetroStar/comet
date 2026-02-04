import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-B6OBZokY.js";import"./banner-Cp6CDsju.js";import"./button-CvBQ6Viu.js";import"./button-group-DT0MZYrc.js";import"./checkbox-BBNcEMVN.js";import"./combo-box-CPB8WVB1.js";import"./date-picker-CrR9zuUM.js";import"./error-messages-DQwxQ3pR.js";import"./index-S1EC9aY5.js";import"./form-group-C7OpfHVI.js";import"./helper-text-C5i0f8Ge.js";import"./icon-n5MNutTh.js";import"./label-Z58zP1tT.js";import"./modal-qxex8s-5.js";import"./process-list-_br4BDud.js";import"./radio-button-Bl1ELBoa.js";import"./range-slider-VCYG_aBg.js";import"./search-D3zv8uYS.js";import"./select-3ZPcC7oD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-MPwN2Qjg.js";import"./step-indicator-C-aqlDqc.js";import"./summary-box-D-cFSNJC.js";import"./tag-ChjVmO5T.js";import"./text-area-DXK22P_c.js";import"./time-picker-BqCyy_JL.js";import"./tooltip-obxolWCE.js";import"./index-SCBz9OJi.js";import"./iframe-DPE7MYZp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQggcgWB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B0FZfZup.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
