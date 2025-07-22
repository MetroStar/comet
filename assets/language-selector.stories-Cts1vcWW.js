import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CyrrKNI3.js";import"./banner-BW73H41s.js";import"./button-CPceKQnT.js";import"./button-group-CAnn0_Ku.js";import"./checkbox-BRuIli36.js";import"./combo-box-Bo5WGBqQ.js";import"./date-picker-pMJfSnii.js";import"./error-messages-_lA7co94.js";import"./index-Al5h7hI8.js";import"./form-group-RW_L-8wz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DSHcO3IW.js";import"./label-0qqEdO1f.js";import"./modal-D5wIiW8J.js";import"./process-list-BwBgnQYa.js";import"./radio-button-CUShxS_O.js";import"./range-slider-DyoEvVCi.js";import"./search-BLE9gsW5.js";import"./select-BxQ7zMlw.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BfblnkNp.js";import"./step-indicator--sKB1jWz.js";import"./summary-box-B4zWynWF.js";import"./tag-Dhnnd0L-.js";import"./text-area-D5CJVc_V.js";import"./time-picker-YAfelJ_H.js";import"./tooltip-DNj1ozNN.js";import"./index-DUFx5r_F.js";import"./iframe-DoOtH7e2.js";import"./index-Da_auYbC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Ds-rJRIb.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
