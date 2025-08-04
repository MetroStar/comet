import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-C9HOtrxI.js";import"./banner-DFuFeIia.js";import"./button-IPy9jbLs.js";import"./button-group-DXolzND2.js";import"./checkbox-BQkuhU1G.js";import"./combo-box-CWBhLbX6.js";import"./date-picker-ufywb9kd.js";import"./error-messages-_lA7co94.js";import"./index-BDHufz-7.js";import"./form-group-DRm-Z0uU.js";import"./helper-text-BRA2CuHl.js";import"./icon-USpDURA8.js";import"./label-0qqEdO1f.js";import"./modal-35WI-peH.js";import"./process-list-Cw48gBrz.js";import"./radio-button-C3KSXNgA.js";import"./range-slider-Bw0Kc7v6.js";import"./search-CzhcTNXV.js";import"./select-BpTAUJhf.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B5IEr7J2.js";import"./step-indicator-CR0utXOF.js";import"./summary-box-B7sxQFWe.js";import"./tag-DvWwyFUj.js";import"./text-area-CxcDxdlk.js";import"./time-picker-B98iZ5IH.js";import"./tooltip-tb7otWC0.js";import"./index-C_W0PhG5.js";import"./iframe-DKa0YoIq.js";import"./index-Bac-0u3O.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxY-v_t6.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
