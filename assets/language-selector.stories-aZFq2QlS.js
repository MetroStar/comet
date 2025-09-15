import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CJqRdRnA.js";import"./banner-CDze5A-o.js";import"./button-Cfsih1JM.js";import"./button-group-C7oR13Zx.js";import"./checkbox-DdvE8Qv0.js";import"./combo-box-MLHL-BJJ.js";import"./date-picker-CzeDYvZ6.js";import"./error-messages-_lA7co94.js";import"./index-Cd6JFthD.js";import"./form-group-B0crHuAm.js";import"./helper-text-BRA2CuHl.js";import"./icon-_aWJ0mlv.js";import"./label-0qqEdO1f.js";import"./modal-0FNrf6C-.js";import"./process-list-BXqeNRaz.js";import"./radio-button-Nt_CKpgW.js";import"./range-slider-C7Ny-QWb.js";import"./search-KLEJmmQN.js";import"./select-CAlDhwkC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-C3x03OFs.js";import"./step-indicator-CDd_u7Xd.js";import"./summary-box-Bu6NGAGG.js";import"./tag-LtQ0fvOs.js";import"./text-area-DnBgkfMa.js";import"./time-picker-ByDgOAtB.js";import"./tooltip-CA57b6l2.js";import"./index-Sl1xyaxe.js";import"./iframe-B7oP2X8t.js";import"./index-BmmP-Ded.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EhFKVBHe.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
