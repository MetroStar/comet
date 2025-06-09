import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-BlI47a42.js";import"./banner-CmzRFqpO.js";import"./button-D9Wdx50N.js";import"./button-group-BtL05JZx.js";import"./checkbox-CYDcYypr.js";import"./combo-box-4UaID54b.js";import"./date-picker-DhNdhWoz.js";import"./error-messages-pdO9TZPZ.js";import"./index-jGmS5lj0.js";import"./form-group-KdJstwiz.js";import"./helper-text-BRA2CuHl.js";import"./icon-B8I8DfLA.js";import"./label-0qqEdO1f.js";import"./modal-dSr-m1nB.js";import"./process-list-wWdVkJAE.js";import"./radio-button-DFlR5LhN.js";import"./range-slider-ByuSUVCH.js";import"./search-CSHRDgKS.js";import"./select-DVb__2mq.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiwGmtXm.js";import"./step-indicator-Dur3iiBJ.js";import"./summary-box-DeBRERe2.js";import"./tag-BkaVgh7n.js";import"./text-area-CtxSlzmP.js";import"./time-picker-BNt0A-Or.js";import"./tooltip-D22GfTlD.js";import"./index-B9tBr0ep.js";import"./iframe-D0wlIprT.js";import"./index-DqlK7rFw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C1TKt0S7.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
