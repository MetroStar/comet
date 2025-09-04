import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-4gBBYbnv.js";import"./banner-di6yW5Uz.js";import"./button-DDnj8xdT.js";import"./button-group-DooJ8EU4.js";import"./checkbox-DIKveoyj.js";import"./combo-box-D9fuo9i4.js";import"./date-picker-DHGVSwyc.js";import"./error-messages-_lA7co94.js";import"./index-V3eZre_f.js";import"./form-group-tvOP8ASP.js";import"./helper-text-BRA2CuHl.js";import"./icon-JLyd65NR.js";import"./label-0qqEdO1f.js";import"./modal-BwfPqh08.js";import"./process-list-D_yB08p6.js";import"./radio-button-Prxo-dtn.js";import"./range-slider-QOEJ62F2.js";import"./search-CcFFi-oo.js";import"./select-DR1IqUls.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BRpmzYGQ.js";import"./step-indicator-C-Qfgoa0.js";import"./summary-box-D8962nN0.js";import"./tag-C9O5PIcN.js";import"./text-area-8F6leHVG.js";import"./time-picker-BnnSU-Lp.js";import"./tooltip-C6Xayu_D.js";import"./index-BZNHB8GM.js";import"./iframe-BecLNQGy.js";import"./index-BFAkROmT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-hvX-s2ru.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
