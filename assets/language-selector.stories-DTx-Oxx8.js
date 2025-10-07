import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-B0ZfyW9e.js";import"./banner-CvO_kA9U.js";import"./button-D7jU-0wo.js";import"./button-group-Ck4w57sK.js";import"./checkbox-Rf_MEj7T.js";import"./combo-box-Bei1E7lW.js";import"./date-picker-BEGXPp7B.js";import"./error-messages-_lA7co94.js";import"./index-BUvbtEYw.js";import"./form-group-DDtB50L7.js";import"./helper-text-BRA2CuHl.js";import"./icon-DFGXQkrf.js";import"./label-0qqEdO1f.js";import"./modal-D9Aokmq8.js";import"./process-list-DMBWm_Vb.js";import"./radio-button-B7gLfpCg.js";import"./range-slider-CDYpIlxh.js";import"./search-7cG6apXU.js";import"./select-BvWJKS2s.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BNU5Kn0X.js";import"./step-indicator-D_mYB-E_.js";import"./summary-box-D0yEzeCv.js";import"./tag-BmGS_nkG.js";import"./text-area-CqKit1ly.js";import"./time-picker-_qB9ISkx.js";import"./tooltip-CWctn93i.js";import"./index-DuiSlnjk.js";import"./iframe-L8I4kFBs.js";import"./index-C7U72UuM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D-I1emzh.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
