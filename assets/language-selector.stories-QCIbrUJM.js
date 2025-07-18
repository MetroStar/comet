import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-_x68NXdl.js";import"./banner-DisZyN2L.js";import"./button-BJzkurNR.js";import"./button-group-CPDfjD1b.js";import"./checkbox-BWQVeGWC.js";import"./combo-box-B9uGkKCb.js";import"./date-picker-BVz4_cxA.js";import"./error-messages-pdO9TZPZ.js";import"./index-NrSadys6.js";import"./form-group-DC2meTDh.js";import"./helper-text-BRA2CuHl.js";import"./icon-CCD1caj0.js";import"./label-0qqEdO1f.js";import"./modal-CkOMxCqe.js";import"./process-list-CBEO4rzu.js";import"./radio-button-D1gm8g9f.js";import"./range-slider-Bm3oZe_f.js";import"./search-p-MQvi-L.js";import"./select-DyNMgSah.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CSf6xXNf.js";import"./step-indicator-Bp9GrBXi.js";import"./summary-box-C8ApFQUM.js";import"./tag-CcnL7pMT.js";import"./text-area-BPWrS0ib.js";import"./time-picker-Dwcu8e4d.js";import"./tooltip-DwvsDy3r.js";import"./index-Cida3cFT.js";import"./iframe-Dn1ZsrJK.js";import"./index-C9lBdWCt.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-X80QhNLs.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
