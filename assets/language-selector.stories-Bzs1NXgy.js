import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-Bj-ieh0N.js";import"./banner-DHXPmgHt.js";import"./button-WXiSigBI.js";import"./button-group-C3Md5rMb.js";import"./checkbox-v0CmJ0fV.js";import"./combo-box-D6E53Ltn.js";import"./date-picker-CjxICpbw.js";import"./error-messages-_lA7co94.js";import"./index-8sAm4bIA.js";import"./form-group-U4i5E8Pz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DLRFSs-D.js";import"./label-0qqEdO1f.js";import"./modal-DuZBzutb.js";import"./process-list-BZY3uAyG.js";import"./radio-button-e8GAg1jo.js";import"./range-slider-C2gAsZFm.js";import"./search-DtK5-wbC.js";import"./select-IwB_nyID.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprknOUj.js";import"./step-indicator-DOOfVLKw.js";import"./summary-box-Bv21eHgr.js";import"./tag-3iSrbP2k.js";import"./text-area-49zULSyA.js";import"./time-picker-Cw7BpC7A.js";import"./tooltip-BYVxI0PO.js";import"./index-tsUwO6kK.js";import"./iframe-TQQq_xwn.js";import"./index-qCMx_cnb.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xQGsZq0x.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
