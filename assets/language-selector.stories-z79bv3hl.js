import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-zTEB5Tk3.js";import"./banner-Ctu5Bn2a.js";import"./button-BbKCSq4F.js";import"./button-group-BqKMWMdE.js";import"./checkbox-DawAI24O.js";import"./combo-box-vu3uRnQB.js";import"./date-picker-CkW0AH-a.js";import"./error-messages-pdO9TZPZ.js";import"./index-BH2c9k8-.js";import"./form-group-CX-gEq_d.js";import"./helper-text-BRA2CuHl.js";import"./icon-BgNjQrB-.js";import"./label-0qqEdO1f.js";import"./modal-teqI2epy.js";import"./process-list-BLBcSx5I.js";import"./radio-button-vC6aP1To.js";import"./range-slider-Dg7Gc1px.js";import"./search-CSPK-G6V.js";import"./select-DMC-g43g.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CdVuIs4j.js";import"./step-indicator-CLNnw9VM.js";import"./summary-box-D_VnDwC5.js";import"./tag-DF5T__FD.js";import"./text-area-B3WR3qCO.js";import"./time-picker-8fFiPqiV.js";import"./tooltip-3hrG5ysG.js";import"./index-CbVBbDn6.js";import"./iframe-BUjXoUEM.js";import"./index-pcMLbDjW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BPObrEFB.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
