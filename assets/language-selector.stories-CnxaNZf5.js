import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BQeTkK1M.js";import"./banner-BZszu9Hy.js";import"./button-C1_RgaQE.js";import"./button-group-B14JmUJ1.js";import"./checkbox-D3z24Vel.js";import"./combo-box-DbeRSt4E.js";import"./date-picker-CnIzSQKS.js";import"./error-messages-_lA7co94.js";import"./index-BKjg4RhJ.js";import"./form-group-8TLLYdhI.js";import"./helper-text-BRA2CuHl.js";import"./icon-BJTLgqOL.js";import"./label-0qqEdO1f.js";import"./modal-9N1QXayz.js";import"./process-list-DJRNsDCz.js";import"./radio-button-D9V3ZUqb.js";import"./range-slider-BNntapAU.js";import"./search-i8PX9Grh.js";import"./select-Dk-O5ttt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B1Xc6g-U.js";import"./step-indicator-DUKM1WXK.js";import"./summary-box-B7jql9xw.js";import"./tag-DW9bMkE3.js";import"./text-area-MPsxISJ-.js";import"./time-picker-DAIr41Lx.js";import"./tooltip-DdBtyx6p.js";import"./index-DU2c9KRp.js";import"./iframe-ChG3UuR9.js";import"./index-BlziFMf9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7_Jpop9.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
