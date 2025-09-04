import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BlnceWZT.js";import"./banner-DdYHPnzv.js";import"./button-M0p4z2np.js";import"./button-group-CTzsh1Qs.js";import"./checkbox-BLWy1ewy.js";import"./combo-box-DAnMy2Zd.js";import"./date-picker-BinjPKZk.js";import"./error-messages-_lA7co94.js";import"./index-DHy8gSfp.js";import"./form-group-DN1OID7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-ooEVvdPp.js";import"./label-0qqEdO1f.js";import"./modal-JsDx-7FJ.js";import"./process-list-eg8YhyYR.js";import"./radio-button-CXGOkgST.js";import"./range-slider-BXGET5_y.js";import"./search-B5IuNjKS.js";import"./select-DY3XXkwD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-De5kiDiV.js";import"./step-indicator-lKJzCiiT.js";import"./summary-box-C_2Rbq_I.js";import"./tag-DCGDkX5e.js";import"./text-area-BGhE39VC.js";import"./time-picker-DT7HzhKL.js";import"./tooltip-CLhFKuL2.js";import"./index-DDrUjC2G.js";import"./iframe-DJ-niyiJ.js";import"./index-Ctl6FX5J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-tJEc6IQE.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
