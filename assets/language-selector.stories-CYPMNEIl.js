import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CX0XI8OP.js";import"./banner-DEXFXyXy.js";import"./button-DsOsdPlp.js";import"./button-group-BUxuG7xu.js";import"./checkbox-YRmx3rM5.js";import"./combo-box-CYgYLg0C.js";import"./date-picker-Cp0WWYQM.js";import"./error-messages-_lA7co94.js";import"./index-DL-q9Ufj.js";import"./form-group-BHvzNZeJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8k-UgI4.js";import"./label-0qqEdO1f.js";import"./modal-6QWAZApx.js";import"./process-list--7pp4Vnj.js";import"./radio-button-DJCCmwa0.js";import"./range-slider-CH4q_Tvm.js";import"./search-C3wHYxvz.js";import"./select-Cn70ITUD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BmH2JWD9.js";import"./step-indicator-BLP1zC9c.js";import"./summary-box-CMVNsm3a.js";import"./tag-DwdL9XNw.js";import"./text-area-8qpd2dPf.js";import"./time-picker-aLWkqh-Q.js";import"./tooltip-CMK8D5V9.js";import"./index-CkzdCw0y.js";import"./iframe-CdEyIkyY.js";import"./index-DnqtVlz1.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dy2RdQ8t.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
