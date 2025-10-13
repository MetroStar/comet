import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BdXERNfX.js";import"./banner-CGSORo_u.js";import"./button-CPtR5gcQ.js";import"./button-group-DhFFAP-Y.js";import"./checkbox-DIPu4W-G.js";import"./combo-box-xrw4u4Io.js";import"./date-picker-DdAbCWL7.js";import"./error-messages-_lA7co94.js";import"./index-CKMVbOyC.js";import"./form-group-BeYI6hSE.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTh2LF1Z.js";import"./label-0qqEdO1f.js";import"./modal-BkSCj_pK.js";import"./process-list-GG4225wz.js";import"./radio-button-DB9WFX5r.js";import"./range-slider-CjiD_4se.js";import"./search-D9RuuV-W.js";import"./select-DGKF5XvH.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-r4FkvNy4.js";import"./step-indicator-C7lNI0IH.js";import"./summary-box-Kko0uUi9.js";import"./tag-swdBJkEH.js";import"./text-area-B21G4oD1.js";import"./time-picker-z2FyGRfL.js";import"./tooltip-BiO4j0Po.js";import"./index-BOcI9Sy8.js";import"./iframe-BlRJQ1-Y.js";import"./index-Croz4O4J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-lROLGhdI.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
