import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-Bb6U9UN-.js";import"./banner-9IEHsLzf.js";import"./button-B2zgU3gw.js";import"./button-group-CuV8b-Jt.js";import"./checkbox-BEI5JEAd.js";import"./combo-box-CQxpp1rn.js";import"./date-picker-BwF3ZQWf.js";import"./error-messages-_lA7co94.js";import"./index-B2IyjUDW.js";import"./form-group-D7o0mHcs.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDMZOkTr.js";import"./label-0qqEdO1f.js";import"./modal-BWU4uOwE.js";import"./process-list-DLQVUbiM.js";import"./radio-button-DiQ8zHvZ.js";import"./range-slider-B1JHoTLM.js";import"./search-Dzffyc8z.js";import"./select-neAeqmJy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BC3cl4Xt.js";import"./step-indicator-DLuCjkFb.js";import"./summary-box-DTZd7klS.js";import"./tag-DN6lamzf.js";import"./text-area-DOXKJPbL.js";import"./time-picker-B4nbaApt.js";import"./tooltip-BnEISZxP.js";import"./index-CprWhq2V.js";import"./iframe-BYzdcdZ1.js";import"./index-CxoXSAzG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DgAcE3a1.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
