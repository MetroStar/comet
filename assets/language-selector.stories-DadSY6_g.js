import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Cof7Ljxw.js";import"./banner-DZ0ebqlp.js";import"./button-mFolkgwz.js";import"./button-group-CsdMoKMD.js";import"./checkbox-BQ-bjBr7.js";import"./combo-box-QWTBgS1h.js";import"./date-picker-CEhy0WXY.js";import"./error-messages-DQwxQ3pR.js";import"./index-C5OTqaeq.js";import"./form-group-ioiVrL2h.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DN8sM9dv.js";import"./label-Z58zP1tT.js";import"./modal-eBwykmDT.js";import"./process-list-Dusstfuy.js";import"./radio-button-CAASPgna.js";import"./range-slider-CL6e4st8.js";import"./search-CK-e7ALh.js";import"./select-hgIVHsJi.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B4EcsSpo.js";import"./step-indicator-BeUZnxYe.js";import"./summary-box-DvvAlmYA.js";import"./tag-BHLVfqLG.js";import"./text-area-oJoyGoaw.js";import"./time-picker-t8bSILu6.js";import"./tooltip-CCcZSQT3.js";import"./index-CcYm8E6G.js";import"./iframe-Qm5GmbtS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF68Yrx3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-c7glwd7z.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
