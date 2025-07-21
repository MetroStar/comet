import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-MPKe8Ila.js";import"./banner-DPBvQbSo.js";import"./button-Bf0VrC9L.js";import"./button-group-SzaEBtpA.js";import"./checkbox-_Wt8UjXW.js";import"./combo-box-B4psjhG_.js";import"./date-picker-DU9UqJRM.js";import"./error-messages-pdO9TZPZ.js";import"./index-rGsKvddx.js";import"./form-group-00NMt7vW.js";import"./helper-text-BRA2CuHl.js";import"./icon-D_ZN9vDs.js";import"./label-0qqEdO1f.js";import"./modal-BNbINjhK.js";import"./process-list-Cll0kTKP.js";import"./radio-button-CSPa9WI2.js";import"./range-slider-D_pBXwXC.js";import"./search-Bhw3b0NB.js";import"./select-BacdfqYt.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DSxMQNmj.js";import"./step-indicator-1zoU-WBF.js";import"./summary-box-CTYMzxjT.js";import"./tag-C9cxY06M.js";import"./text-area-hSK-s690.js";import"./time-picker-X_lbIc1r.js";import"./tooltip-DPiLySq6.js";import"./index-Bo3ISOMl.js";import"./iframe-BlSZsq3b.js";import"./index--9xU-wIR.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bfh4D05J.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
