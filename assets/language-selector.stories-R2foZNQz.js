import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CaCsRVn_.js";import"./banner-CYLYqKyn.js";import"./button-DQSjfVkv.js";import"./button-group-C0hUUhBY.js";import"./checkbox-96zxDzbZ.js";import"./combo-box-P6h0I6tr.js";import"./date-picker-B8kkk9N-.js";import"./error-messages-pdO9TZPZ.js";import"./index-DURXZQ9o.js";import"./form-group-CPqPXC7s.js";import"./helper-text-BRA2CuHl.js";import"./icon-CiOXX4sf.js";import"./label-0qqEdO1f.js";import"./modal-BzDYk1C8.js";import"./process-list-CQAoxI10.js";import"./radio-button-D35MaHG6.js";import"./range-slider-COBoKlwU.js";import"./search-D97SSICW.js";import"./select-BPldmASG.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-WDGMggSx.js";import"./step-indicator-CumMREST.js";import"./summary-box-DKn-YCjw.js";import"./tag-DsFVYETT.js";import"./text-area-D52SOLIR.js";import"./time-picker-sWktdUEe.js";import"./tooltip-C4EFWcxR.js";import"./index-EB_GCKWz.js";import"./iframe-Dp8b9fRy.js";import"./index-C9qFoPjr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CXDBfroo.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
