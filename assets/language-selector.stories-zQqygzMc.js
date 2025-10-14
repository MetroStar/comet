import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-C8360qz1.js";import"./banner-0cQ1VwYA.js";import"./button-BKWxX-Da.js";import"./button-group-0Qrdnekb.js";import"./checkbox-V_TbU8x_.js";import"./combo-box-CWkgIpCj.js";import"./date-picker-OWJbCQWY.js";import"./error-messages-_lA7co94.js";import"./index-BJ28ckkj.js";import"./form-group-ccVGZY8n.js";import"./helper-text-BRA2CuHl.js";import"./icon-BvgBwPFf.js";import"./label-0qqEdO1f.js";import"./modal-Cy6gDfT6.js";import"./process-list-D0b4fxYS.js";import"./radio-button-Debg-0BK.js";import"./range-slider-fW4YPf0L.js";import"./search-DcpVRyol.js";import"./select-BVMgADpF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOYv-Ov_.js";import"./step-indicator-DjwAnxsg.js";import"./summary-box-BPTqOlAt.js";import"./tag-BPwouCyO.js";import"./text-area-mLO4G3tx.js";import"./time-picker-BVLec-T2.js";import"./tooltip-BGDht52a.js";import"./index-DwWsIt9I.js";import"./iframe-DuCqQX56.js";import"./index-CyGskYRl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DuoJpcJJ.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
