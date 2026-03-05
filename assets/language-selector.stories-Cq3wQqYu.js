import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BkcizWb6.js";import"./banner-DweQbrQc.js";import"./button-XBMUcWoC.js";import"./button-group-BrIUjRCR.js";import"./checkbox-BvZeZHtM.js";import"./combo-box-Bj433j_h.js";import"./date-picker-z6Q7eOM2.js";import"./error-messages-DQwxQ3pR.js";import"./index-Cnn-YZcV.js";import"./form-group-CG_NYfoS.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cc1dzDtb.js";import"./label-Z58zP1tT.js";import"./modal-Cpe_cfLH.js";import"./process-list-CvTJfKYq.js";import"./radio-button-DUmMrbPy.js";import"./range-slider-gxORhVag.js";import"./search-NuBoJI84.js";import"./select-Bzt55IHF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CxJW4m1g.js";import"./step-indicator-BDNx4Eop.js";import"./summary-box-CpxqpbYb.js";import"./tag-CbEMar7b.js";import"./text-area-blUsZJJZ.js";import"./time-picker-CtBf-17B.js";import"./tooltip-BwdNh6of.js";import"./index-oP94_y1q.js";import"./iframe-DZGaHezm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oFd3Ri_j.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dv1nB6qQ.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
