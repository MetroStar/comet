import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CMDmZj7c.js";import"./banner-BAz2G--5.js";import"./button-B9OaNNhT.js";import"./button-group-DlaVFbxh.js";import"./checkbox-C28N4a1k.js";import"./combo-box-BvakVT0f.js";import"./date-picker-UsI544BE.js";import"./error-messages-_lA7co94.js";import"./index-Bkp4uBDp.js";import"./form-group-Bpk2fpaH.js";import"./helper-text-BRA2CuHl.js";import"./icon-cxkbKgKE.js";import"./label-0qqEdO1f.js";import"./modal-BQkULiVL.js";import"./process-list-Bss4hcvS.js";import"./radio-button-CEz13IeH.js";import"./range-slider-BpGVvSsE.js";import"./search-Cin5Af7e.js";import"./select-BlI-nL0Q.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-LVKe454Y.js";import"./step-indicator-C4JBCoYw.js";import"./summary-box-DnFH13SG.js";import"./tag-CneVrYpY.js";import"./text-area-D_fB21ck.js";import"./time-picker-CSKB0_Nb.js";import"./tooltip-Y544ZiXZ.js";import"./index-o8AzxdkW.js";import"./iframe-CeHEORJQ.js";import"./index-Da7q7RYZ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-4Bao6GuI.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
