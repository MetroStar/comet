import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CYmhWNEm.js";import"./banner-D2I3LpOl.js";import"./button-DfWJO5NC.js";import"./button-group-DekWdHfJ.js";import"./checkbox-Bm3o4vL2.js";import"./combo-box-BHD_tO2S.js";import"./date-picker-DdcJA1Y7.js";import"./error-messages-pdO9TZPZ.js";import"./index-BpWRmvKG.js";import"./form-group-wfwX5Iyy.js";import"./helper-text-BRA2CuHl.js";import"./icon-D_78rZ8u.js";import"./label-0qqEdO1f.js";import"./modal-iTvJGglD.js";import"./process-list-DVFfdVOe.js";import"./radio-button-BP_-j6a8.js";import"./range-slider-Lw04wRca.js";import"./search-DIBGS6Yh.js";import"./select-BOY6QlqM.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-OB1OtwWB.js";import"./step-indicator-QWvk8Pwa.js";import"./summary-box-CE8DF4gV.js";import"./tag-CTPMiUx4.js";import"./text-area-C0d-1XAJ.js";import"./time-picker-BbmV3cSI.js";import"./tooltip-DSLaw7yL.js";import"./index-rTA6sVZJ.js";import"./iframe-DY9HBLoi.js";import"./index-BDMt5_-6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwk6v0GG.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
