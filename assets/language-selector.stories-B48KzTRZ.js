import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CEC6VR9e.js";import"./banner-BkIJS_6z.js";import"./button-Cz7RgtoX.js";import"./button-group-Bv-TDQ2J.js";import"./checkbox-Bb6cbyCa.js";import"./combo-box-QTBgiBcd.js";import"./date-picker-k5bZck_k.js";import"./error-messages-_lA7co94.js";import"./index-DHOAzmtN.js";import"./form-group-BWHxpag0.js";import"./helper-text-BRA2CuHl.js";import"./icon-CltekIt2.js";import"./label-0qqEdO1f.js";import"./modal-CDqm1nCU.js";import"./process-list-DEBo6nte.js";import"./radio-button-CKLsf2Y8.js";import"./range-slider-BVh0FSE4.js";import"./search-SVFGc8u5.js";import"./select-VUMvBmOF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BFo_LLtW.js";import"./step-indicator-DhkvXvbl.js";import"./summary-box-BDJ68lGd.js";import"./tag-BwQanvXK.js";import"./text-area-Ce8nxo5M.js";import"./time-picker-C8zu-Q1o.js";import"./tooltip-DeexD_cA.js";import"./index-D82vRiCQ.js";import"./iframe-B2NCm2Rb.js";import"./index-C-iG_L9p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Mg8z5oX4.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
