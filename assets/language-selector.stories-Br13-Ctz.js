import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DN2zX9w5.js";import"./banner-DmybvjyX.js";import"./button-DaVVrHT6.js";import"./button-group-DL1d-oUd.js";import"./checkbox-B95JovIm.js";import"./combo-box-3yuNCmgT.js";import"./date-picker-MXHZCJx-.js";import"./error-messages-_lA7co94.js";import"./index-BSnHZeMx.js";import"./form-group-DBzbMrNY.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTn1fg3T.js";import"./label-0qqEdO1f.js";import"./modal-C9ErPmL0.js";import"./process-list-CxnI2fTS.js";import"./radio-button-BptSw1UH.js";import"./range-slider-BRs7lDMv.js";import"./search-D7OaEWwM.js";import"./select-DBPXSEr4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BrMEkozl.js";import"./step-indicator-BLqJZzSw.js";import"./summary-box-BITmi2EU.js";import"./tag-BQwTgAeY.js";import"./text-area-aL1qtgvL.js";import"./time-picker-PZ_jVo6d.js";import"./tooltip-DqmHi9L2.js";import"./index-CZnHAbqW.js";import"./iframe-DAkoUa8c.js";import"./index-VfhVxxkQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BmV7Pdh3.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
