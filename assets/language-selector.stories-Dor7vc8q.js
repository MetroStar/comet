import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BClhlT0z.js";import"./banner-CzkaGaVP.js";import"./button-DU2pOzuh.js";import"./button-group-CnynISiL.js";import"./checkbox-Cb6FxYwq.js";import"./combo-box-qh64P4iq.js";import"./date-picker-DHhq89_1.js";import"./error-messages-_lA7co94.js";import"./index-BlvOJwI9.js";import"./form-group-B80SdfXj.js";import"./helper-text-BRA2CuHl.js";import"./icon-CF9rid26.js";import"./label-0qqEdO1f.js";import"./modal-BguBK0_s.js";import"./process-list-BuGmR-8F.js";import"./radio-button-ON0RGceu.js";import"./range-slider-BoVWNUy0.js";import"./search-ClnHZvP6.js";import"./select-C4g0Dhmi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEXzN5iU.js";import"./step-indicator-h0VWgyZg.js";import"./summary-box-Hwd2puDo.js";import"./tag-BMw6NXFS.js";import"./text-area-Ltx5Xw97.js";import"./time-picker-4nej8pOD.js";import"./tooltip-B9Y8zZao.js";import"./index-0XD21YYW.js";import"./iframe-Ca0L-wZx.js";import"./index-NMaxshBa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0mqKmh-.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
