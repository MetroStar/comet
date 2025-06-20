import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-bxCjHSZx.js";import"./banner-CbwhXAQD.js";import"./button-BHx9nyYG.js";import"./button-group-MtHQpuzi.js";import"./checkbox-BVNyjVNb.js";import"./combo-box-D_jHPtwp.js";import"./date-picker-ZAEtRi5O.js";import"./error-messages-pdO9TZPZ.js";import"./index-P5_oBTHH.js";import"./form-group-DM5a2JI_.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaSe7YOL.js";import"./label-0qqEdO1f.js";import"./modal-JtIm4YZx.js";import"./process-list-D0IxfUgS.js";import"./radio-button-sJxkDbLi.js";import"./range-slider-BFpSZ3BL.js";import"./search-DxfwXxES.js";import"./select-DlOsvP9Z.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DQmRsO5O.js";import"./step-indicator-BR8HRLAn.js";import"./summary-box-BHHZZ0U4.js";import"./tag-ka64kxnh.js";import"./text-area-C9GAkIeF.js";import"./time-picker-w1tJYeqO.js";import"./tooltip-Dzefdd_l.js";import"./index-DgVe2x5k.js";import"./iframe-BL1d4o72.js";import"./index-0XBQmG4p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-d7_Brw8T.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
