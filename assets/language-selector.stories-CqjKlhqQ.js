import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-B8FMHg_J.js";import"./banner-BHD4a-YF.js";import"./button-CZnSuiSG.js";import"./button-group-D_3I6eIv.js";import"./checkbox-BlfnrhUV.js";import"./combo-box-CH8ob2Tb.js";import"./date-picker-BRoY0Im-.js";import"./error-messages-_lA7co94.js";import"./index-CJ4Rmd2u.js";import"./form-group-Db87imG5.js";import"./helper-text-BRA2CuHl.js";import"./icon-CjZN-pZP.js";import"./label-0qqEdO1f.js";import"./modal-nc01-4DT.js";import"./process-list-BShwkqsW.js";import"./radio-button-BZ8kNZ3P.js";import"./range-slider-C0Al_MLK.js";import"./search-BuJgjO8M.js";import"./select-PK_HMEM4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B7eMpm6t.js";import"./step-indicator-BTtpkGV8.js";import"./summary-box-CHjfH4Zj.js";import"./tag-Dr4ongqQ.js";import"./text-area-CoOy6seG.js";import"./time-picker-CxHuHVd3.js";import"./tooltip-DF1b6R82.js";import"./index-QkTpvnaW.js";import"./iframe-Bzkq98Jv.js";import"./index-BJjidRwi.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CevKQl2c.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
