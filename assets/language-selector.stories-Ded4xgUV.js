import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DqHQ9AC6.js";import"./banner-CKUJPF1-.js";import"./button-ByK7N37x.js";import"./button-group-DisPr8Ll.js";import"./checkbox-ZBX-3sk9.js";import"./combo-box-D1B40_Ed.js";import"./date-picker-Dk0zHLIH.js";import"./error-messages-_lA7co94.js";import"./index-eGJhptUH.js";import"./form-group-DYKjDP8T.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bs7luVDn.js";import"./label-0qqEdO1f.js";import"./modal-C_aHr31j.js";import"./process-list-BrnP9Mlx.js";import"./radio-button-C4ZsFajo.js";import"./range-slider-CRQ9fPP5.js";import"./search-DzgeHfgH.js";import"./select-DJpgwHeu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DBdkujVI.js";import"./step-indicator-Bwjm-2R5.js";import"./summary-box-BaPYr4D4.js";import"./tag-DDOzNfXQ.js";import"./text-area-1YDixWzp.js";import"./time-picker-DgYDaV_B.js";import"./tooltip-BzHK-RTl.js";import"./index-Bk9_ws4F.js";import"./iframe-7518lDOu.js";import"./index-DENiOEZQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dz9jb3-2.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
