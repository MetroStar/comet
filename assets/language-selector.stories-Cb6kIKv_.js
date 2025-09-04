import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CRIHftcn.js";import"./banner-tI4i3dHX.js";import"./button-CIuKbjxD.js";import"./button-group-gBk2q1RT.js";import"./checkbox-C0p4yiuP.js";import"./combo-box-C1ab52c3.js";import"./date-picker-yjT1zarg.js";import"./error-messages-_lA7co94.js";import"./index-CzGQz90s.js";import"./form-group-DRHOEtVf.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkCLabQh.js";import"./label-0qqEdO1f.js";import"./modal-x7UqWS9_.js";import"./process-list-DEWXnXmu.js";import"./radio-button-C1xT2Qy8.js";import"./range-slider--uBQoswA.js";import"./search-BCqjbBHN.js";import"./select-gcVG_7Gs.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOusDcvs.js";import"./step-indicator-DoMwYytm.js";import"./summary-box-BAt1BHtX.js";import"./tag-dpfiBseI.js";import"./text-area-C6LgDorB.js";import"./time-picker-Dwz4Iy3u.js";import"./tooltip-CSQbHOdo.js";import"./index-Dz-2O1NT.js";import"./iframe-BsmwYSRM.js";import"./index-BVkfGhKT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0eiXkeB.js";import"./active-element-BuxAly_Z.js";const J={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
