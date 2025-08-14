import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-Sd8cxFUx.js";import"./banner-upozFeST.js";import"./button-DeQuXKOz.js";import"./button-group-n1LE8F7m.js";import"./checkbox-DAwvlk7m.js";import"./combo-box-DTj_V3yZ.js";import"./date-picker-m9zUkIvb.js";import"./error-messages-_lA7co94.js";import"./index-Bm7npR7P.js";import"./form-group-ODM8qnlA.js";import"./helper-text-BRA2CuHl.js";import"./icon-C4QULdnD.js";import"./label-0qqEdO1f.js";import"./modal-CVqJuv9Y.js";import"./process-list-CYa6MbFC.js";import"./radio-button-DreS4VKm.js";import"./range-slider-BWH65D0M.js";import"./search-MvPWk77I.js";import"./select-BUVP5uNL.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Bo3xCnGW.js";import"./step-indicator-DzN4kYk1.js";import"./summary-box-DYGCR5mO.js";import"./tag-Ce7eHv1o.js";import"./text-area-BjhcLw6Y.js";import"./time-picker-DG6m1DpN.js";import"./tooltip-DHiDK0fF.js";import"./index-BNTQFOaE.js";import"./iframe-9tQC-4Xm.js";import"./index-CasUqPWH.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAbhvx1n.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const K=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,K as __namedExportsOrder,J as default};
