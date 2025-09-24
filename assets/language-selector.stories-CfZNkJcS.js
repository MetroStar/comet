import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-B2_7QTih.js";import"./banner-CB9iV2Es.js";import"./button-BbKRgqlt.js";import"./button-group-CakS15NU.js";import"./checkbox-jSUtNPxL.js";import"./combo-box-B2Abj-tx.js";import"./date-picker-3NLl3BU_.js";import"./error-messages-_lA7co94.js";import"./index-CD1vgVfL.js";import"./form-group-Df0vG0OS.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDRbc-Od.js";import"./label-0qqEdO1f.js";import"./modal-DZyUjUka.js";import"./process-list-DRc4oMF1.js";import"./radio-button-BzTiBx4p.js";import"./range-slider-ux1Bdl2a.js";import"./search-CENs0X1h.js";import"./select-DOrzXlhC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DeGKKjT7.js";import"./step-indicator-DhRqkIt4.js";import"./summary-box-C4Nw8Ivw.js";import"./tag--Mz2xj8r.js";import"./text-area-Dxh8xs4l.js";import"./time-picker-BZQdmWCi.js";import"./tooltip-CCdLEe-A.js";import"./index-fhRGG_ox.js";import"./iframe-CPcXRZAp.js";import"./index-CFllaHPr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYUEugg6.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
