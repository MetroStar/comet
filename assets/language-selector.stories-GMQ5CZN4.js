import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-DhmX7Z_S.js";import"./banner-xJkEB5hL.js";import"./button-CFEV8zQ6.js";import"./button-group-BdBThFRw.js";import"./checkbox-DhD3AoD9.js";import"./combo-box-CJ3FZO_F.js";import"./date-picker-CSS6a4-e.js";import"./error-messages-pdO9TZPZ.js";import"./index-aaz7Tl_2.js";import"./form-group-D--FW6C7.js";import"./helper-text-BRA2CuHl.js";import"./icon-8zzfAEs9.js";import"./label-0qqEdO1f.js";import"./modal-Dafr8mxd.js";import"./process-list-DP_n_abq.js";import"./radio-button-C5QvpKpy.js";import"./range-slider-DplOda1R.js";import"./search-C15Eta1b.js";import"./select-CVuqcUmD.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CrwNbb1H.js";import"./step-indicator-CXzzLe4G.js";import"./summary-box-DNG07pDu.js";import"./tag-CW4KaTzQ.js";import"./text-area-D1J510LF.js";import"./time-picker-BokxPoBe.js";import"./tooltip-D83AjoLs.js";import"./index-DUgY-iDN.js";import"./iframe-CDzpRssQ.js";import"./index-CmkFwe2W.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C73y17ap.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
