import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BYtm8aWr.js";import"./banner-BOsb6-5M.js";import"./button-kvp-3bRO.js";import"./button-group-Bz8x7RTE.js";import"./checkbox-U1-aMXP1.js";import"./combo-box-C41SXqKd.js";import"./date-picker-CZxAjDjb.js";import"./error-messages-_lA7co94.js";import"./index-B-rCaw0b.js";import"./form-group-C7WDyZYd.js";import"./helper-text-BRA2CuHl.js";import"./icon-CepZwO60.js";import"./label-0qqEdO1f.js";import"./modal-AEuqzuY7.js";import"./process-list-SwSDrK6Y.js";import"./radio-button-BTfMv-fS.js";import"./range-slider-CP1tnxY0.js";import"./search-7C4hTjQi.js";import"./select-DwRGmsQU.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BIGnOVGL.js";import"./step-indicator-C7aYC1tN.js";import"./summary-box-CO5CN3ne.js";import"./tag-CjzNHQU6.js";import"./text-area-nycWrcG_.js";import"./time-picker-BXCuHpEP.js";import"./tooltip-2q8JeVRJ.js";import"./index-CKsPUyOS.js";import"./iframe-Bh4Kgv9z.js";import"./index-Bj0UJ-Ok.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-GgdPq9z-.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
