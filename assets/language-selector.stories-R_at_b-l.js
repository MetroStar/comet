import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CKPPHEB2.js";import"./banner-_ZbGEhIg.js";import"./button-wiBUw2ln.js";import"./button-group-DejK9lhd.js";import"./checkbox-_aoh7e0v.js";import"./combo-box-DYIP3xuD.js";import"./date-picker-B3ZMxbLu.js";import"./error-messages-_lA7co94.js";import"./index-BOGvIYqa.js";import"./form-group-BMhe2Iop.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8n28FoH.js";import"./label-0qqEdO1f.js";import"./modal-CvmAaDMV.js";import"./process-list-y5z1Z_ew.js";import"./radio-button-vMb-nHfq.js";import"./range-slider-H8-mu3pO.js";import"./search-CZaE40pE.js";import"./select-BmIio9K1.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DyJn8dTy.js";import"./step-indicator-LRxRKaHE.js";import"./summary-box-CpUaTIGj.js";import"./tag-BAxMA63-.js";import"./text-area-CCqQJwr3.js";import"./time-picker-Dl6GpAlx.js";import"./tooltip-fJCS9TPh.js";import"./index-BSbYLGkZ.js";import"./iframe-gQpfMxwu.js";import"./index-Dl7XZhpl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C-jQrruZ.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
