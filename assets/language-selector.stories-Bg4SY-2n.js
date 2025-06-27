import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-qipDyWWW.js";import"./banner-Dbu76H_h.js";import"./button-BMfJYqv5.js";import"./button-group-C2oE1fke.js";import"./checkbox-DV3FgYFD.js";import"./combo-box-DDkfMCEb.js";import"./date-picker-0NFNJK6U.js";import"./error-messages-pdO9TZPZ.js";import"./index-Uy9L_0xv.js";import"./form-group-B_64fuat.js";import"./helper-text-BRA2CuHl.js";import"./icon-BVVlaEti.js";import"./label-0qqEdO1f.js";import"./modal-CR3V5z44.js";import"./process-list-DIpvwoK3.js";import"./radio-button-C1yJv6Ul.js";import"./range-slider-DBEKSDkg.js";import"./search-V-FTtime.js";import"./select-B0FkRYsk.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-B2zEUvDJ.js";import"./step-indicator-CDE04cMN.js";import"./summary-box-BQOeikKb.js";import"./tag-Di9uSiTh.js";import"./text-area-qn4mo8GQ.js";import"./time-picker-C5iYe6-E.js";import"./tooltip-DkS2g9OU.js";import"./index-BLKK0fUp.js";import"./iframe-DLFxhOfQ.js";import"./index-DbdQ-_yw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DnM5t5zf.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
