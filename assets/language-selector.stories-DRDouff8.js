import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DmnWc49K.js";import"./banner-BP3RSBZP.js";import"./button-DsiOr2cT.js";import"./button-group-DlwPHipu.js";import"./checkbox-CZe1xIAL.js";import"./combo-box-Cll_0ZQK.js";import"./date-picker-wskArRME.js";import"./error-messages-pdO9TZPZ.js";import"./index-D28TiiAF.js";import"./form-group-D7kfFAyU.js";import"./helper-text-BRA2CuHl.js";import"./icon-BRc0tjCA.js";import"./label-0qqEdO1f.js";import"./modal-MJ6CK7kF.js";import"./process-list-HxcLYqgQ.js";import"./radio-button-BE5o4tlm.js";import"./range-slider-Rbh1Ljww.js";import"./search-R6PZy4kO.js";import"./select-DZ1JcbOA.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CU9wbwsH.js";import"./step-indicator-DibkEOlM.js";import"./summary-box-BO38J_sj.js";import"./tag-OaQnEd8D.js";import"./text-area-DpJAHCY1.js";import"./time-picker-DxtrzA9L.js";import"./tooltip-D-S07_Hb.js";import"./index-7mWhv16U.js";import"./iframe-BgIKpn1G.js";import"./index-wzabiPIr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cf0-XlqG.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Z=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,Z as __namedExportsOrder,Y as default};
