import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-51YYwGLj.js";import"./banner-Bv_kOqML.js";import"./button-DWw3FYRE.js";import"./button-group-MlieLY4u.js";import"./checkbox-GzGDd-Ma.js";import"./combo-box-20deBagx.js";import"./date-picker-CrM8O4Ke.js";import"./error-messages-DQwxQ3pR.js";import"./index-DthDhu_P.js";import"./form-group-DmuX5GHA.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CckomvKd.js";import"./label-Z58zP1tT.js";import"./modal-Z3r9IjSG.js";import"./process-list-C5K8mXPF.js";import"./radio-button-CITFhXUS.js";import"./range-slider-VxwCY7vw.js";import"./search-CnvNPNSV.js";import"./select-BX7BE1Za.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DvKs5coS.js";import"./step-indicator-VTuD0rEC.js";import"./summary-box-qu0Fij9e.js";import"./tag-DcvZtGBJ.js";import"./text-area-Co4QZweV.js";import"./time-picker-DFYXdFz0.js";import"./tooltip-B9DpSj4U.js";import"./index-2qk3iZ2l.js";import"./iframe-OV6txbM2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6gVjvQv.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D_8CrR66.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
