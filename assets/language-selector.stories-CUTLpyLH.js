import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BcAjHaPe.js";import"./banner-Bb9tgDMu.js";import"./button-DHPf3ZSy.js";import"./button-group-DXkD3Odw.js";import"./checkbox-CWxi48TQ.js";import"./combo-box-BgWuh_WY.js";import"./date-picker-CY9wn-JD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BeU7Me-t.js";import"./form-group-030VDF0V.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CtOfy-k_.js";import"./label-Z58zP1tT.js";import"./modal-D415_Ju7.js";import"./process-list-B5_A_qL3.js";import"./radio-button-iLLUIu9s.js";import"./range-slider-B-Hf8WYx.js";import"./search-297e9Y7D.js";import"./select-P2zO11OG.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BBLMX3ph.js";import"./step-indicator-VzIYVCPL.js";import"./summary-box-i_aO1v2Q.js";import"./tag-BURryAb1.js";import"./text-area-CrhVCt3o.js";import"./time-picker-CvagkXJf.js";import"./tooltip-BhAJp-EY.js";import"./index-BdXVIPuw.js";import"./iframe-B31pvYvh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCMedrEY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-A9mp8xSv.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,N as __namedExportsOrder,K as default};
