import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-Blb5rANT.js";import"./banner-BmlVZfk-.js";import"./button-BlUJB2sM.js";import"./button-group-BHc2I0ck.js";import"./checkbox-BQcjfNYw.js";import"./combo-box-gL_IiNty.js";import"./date-picker-BwTl6U0J.js";import"./error-messages-pdO9TZPZ.js";import"./index-D74N8FgS.js";import"./form-group-CD5U6nVC.js";import"./helper-text-BRA2CuHl.js";import"./icon-DOsYgSUJ.js";import"./label-0qqEdO1f.js";import"./modal-BRGNl0UW.js";import"./process-list-DGj5Msej.js";import"./radio-button-BrM805MA.js";import"./range-slider-DQzdPj_1.js";import"./search-C2kLE4Gz.js";import"./select-R1OqwzSb.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiAvvMNa.js";import"./step-indicator-BXmtocNy.js";import"./summary-box--HKkVsMN.js";import"./tag-NNoaLxc4.js";import"./text-area-BOazg4ul.js";import"./time-picker-TSzaulpH.js";import"./tooltip-CtABBABA.js";import"./index-C_wObpry.js";import"./iframe-BFMRay5H.js";import"./index-DDDrMwO6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bm14qNHe.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
