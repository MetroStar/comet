import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-Hs4VCtc9.js";import"./banner-nM2nGO0J.js";import"./button-C-o4OEAH.js";import"./button-group-CTngshXJ.js";import"./checkbox-BViJbhRi.js";import"./combo-box-CuwRJQAf.js";import"./date-picker-D6J3TZ8g.js";import"./error-messages-pdO9TZPZ.js";import"./index-DU_4dbC6.js";import"./form-group-Bdsh5mGJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CW17oGSm.js";import"./label-0qqEdO1f.js";import"./modal-7rUH1YJR.js";import"./process-list-CY8fUDPl.js";import"./radio-button-BXVR-eS5.js";import"./range-slider-BWitLn27.js";import"./search-CLsFZHno.js";import"./select-ChyTk__I.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CPChkUBO.js";import"./step-indicator-Djr7F7jZ.js";import"./summary-box-Dmvss6bn.js";import"./tag-CoHDO4Xv.js";import"./text-area-TjsQH2pL.js";import"./time-picker-Dv1ePHYY.js";import"./tooltip-Dr1Y0apo.js";import"./index-BuhywQhW.js";import"./iframe-D9Bj4LF8.js";import"./index-Y4NXysNt.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DcNgODFG.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
