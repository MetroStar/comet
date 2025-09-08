import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DVEIJfEP.js";import"./banner-L_qKzIPP.js";import"./button-DXVMCrjf.js";import"./button-group-CBvnVt9C.js";import"./checkbox-Ddfr57Uw.js";import"./combo-box-CI7x9s1w.js";import"./date-picker-CoWC-1CX.js";import"./error-messages-_lA7co94.js";import"./index-DMq29h7f.js";import"./form-group-DBfTQOoS.js";import"./helper-text-BRA2CuHl.js";import"./icon-CvlDciaN.js";import"./label-0qqEdO1f.js";import"./modal-ClEmu25p.js";import"./process-list--vnKh0Db.js";import"./radio-button-Cj0gMxsy.js";import"./range-slider-BjPol11t.js";import"./search-CNoK7X24.js";import"./select-Db4_XT5f.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dii6R-e4.js";import"./step-indicator-CM1to4bc.js";import"./summary-box-BX_zfgOi.js";import"./tag-D9XQSjDb.js";import"./text-area-BGtrx8-Q.js";import"./time-picker-CgWuxmNu.js";import"./tooltip-Cz_Zx_0T.js";import"./index-B4ubeI7x.js";import"./iframe-C4vNGh7L.js";import"./index-CRJmehm-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DZVpAW7Q.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
