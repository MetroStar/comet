import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-Cq069oLF.js";import"./banner-DMVz3e1o.js";import"./button-nB4XvN_t.js";import"./button-group-amVFX9Mw.js";import"./checkbox-BMD3BsjL.js";import"./combo-box-D-sS-4M1.js";import"./date-picker-BUAVuSMI.js";import"./error-messages-_lA7co94.js";import"./index-BOCy3pWu.js";import"./form-group-BDbcoRKO.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bualwomm.js";import"./label-0qqEdO1f.js";import"./modal-C3INcVR_.js";import"./process-list-DTHC9t3-.js";import"./radio-button-Bf8IedV0.js";import"./range-slider-k8KNCxBU.js";import"./search-DufGuPvN.js";import"./select-B3bCYLzV.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-D7ynWOIW.js";import"./step-indicator-CncyS3oC.js";import"./summary-box-BeKVa36t.js";import"./tag-UEZmNv5X.js";import"./text-area-B42-Clzm.js";import"./time-picker-BlirOEuF.js";import"./tooltip-47OA24e-.js";import"./index-CPNdnnmO.js";import"./iframe-C7-W_WM8.js";import"./index-BcIHhRzX.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-rh0G5RG1.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
