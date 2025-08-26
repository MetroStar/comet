import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-2NAaAm4f.js";import"./banner-DmWNFVX0.js";import"./button-DMGkmuRe.js";import"./button-group-BpVsvt9f.js";import"./checkbox-QXWsWq5b.js";import"./combo-box-D7opi152.js";import"./date-picker-osE87iLd.js";import"./error-messages-_lA7co94.js";import"./index-CuYmxFJ7.js";import"./form-group-DW4A1vPS.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bne4nQ7L.js";import"./label-0qqEdO1f.js";import"./modal-v_LYecBD.js";import"./process-list-DPSQSkDw.js";import"./radio-button-hq8NkZqJ.js";import"./range-slider-C33b7wPA.js";import"./search-CC-BpXF1.js";import"./select-XWhpf6Eu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ArWdNQH1.js";import"./step-indicator-BvTe9s74.js";import"./summary-box-D0YY31pd.js";import"./tag-CkMOhSU3.js";import"./text-area-C1M1QosD.js";import"./time-picker-DufTLboP.js";import"./tooltip-Cm8FGCCc.js";import"./index-D_G_8yR1.js";import"./iframe-feKrdQjw.js";import"./index-Bq7ANQAG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BSKCmYzr.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
