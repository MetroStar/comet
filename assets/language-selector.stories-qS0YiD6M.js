import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CTHJRurc.js";import"./banner-BpjHpRyz.js";import"./button-CEdaOz0v.js";import"./button-group-DPUcNWat.js";import"./checkbox-CeDcbjZa.js";import"./combo-box-Df2_U8wx.js";import"./date-picker-D-VCXnPA.js";import"./error-messages-_lA7co94.js";import"./index-CLsMeELU.js";import"./form-group-N2izWhMO.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8iiNzoR.js";import"./label-0qqEdO1f.js";import"./modal-DsQx7LhB.js";import"./process-list-lglvHysC.js";import"./radio-button-C9zE0qcx.js";import"./range-slider-BzcdN58g.js";import"./search-DCqu2wfv.js";import"./select-sAGlyFDv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Ba8esuHl.js";import"./step-indicator-DYwCyK75.js";import"./summary-box-DCFq3_YR.js";import"./tag-BWyj0ide.js";import"./text-area-Z6rUOkKh.js";import"./time-picker-CakTvnCc.js";import"./tooltip-I7dpAhOi.js";import"./index-BIsXNuh7.js";import"./iframe-DwbOoiOR.js";import"./index-CJmWpGmW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DweQinfd.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
