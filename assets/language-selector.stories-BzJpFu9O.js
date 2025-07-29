import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CFZe1oZk.js";import"./banner-C0iRi7lY.js";import"./button-EjrCymmn.js";import"./button-group-B45KQgZo.js";import"./checkbox-BTDbXMs9.js";import"./combo-box-PCieNkZt.js";import"./date-picker-DD5vN0l4.js";import"./error-messages-_lA7co94.js";import"./index-DXpWHD9X.js";import"./form-group-DXBWy_5J.js";import"./helper-text-BRA2CuHl.js";import"./icon-BAmAFE3F.js";import"./label-0qqEdO1f.js";import"./modal-BaXUXORU.js";import"./process-list-Bes59W1_.js";import"./radio-button-Cg7so58a.js";import"./range-slider-DMLTBef-.js";import"./search-CemhTU5F.js";import"./select-DONnmCi2.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ChVoEick.js";import"./step-indicator-BtFe2dBb.js";import"./summary-box-DtlSzkaU.js";import"./tag-DmV8dUk0.js";import"./text-area-z3x7pbPL.js";import"./time-picker-BiDHUfm5.js";import"./tooltip-C3AqG2BR.js";import"./index-DF9socu3.js";import"./iframe-Bj_WYFuV.js";import"./index-zqKFCB0Q.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-FZjDNhBr.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
