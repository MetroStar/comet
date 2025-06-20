import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-VoNP95Pm.js";import"./banner-BFmuQa3J.js";import"./button-FnxbOIxl.js";import"./button-group-DxG_vAvL.js";import"./checkbox-CuAyvt5h.js";import"./combo-box-JFA8x0Aa.js";import"./date-picker-C4oDLK0L.js";import"./error-messages-pdO9TZPZ.js";import"./index-CeA95act.js";import"./form-group-Do7MeC9T.js";import"./helper-text-BRA2CuHl.js";import"./icon-jiCUmSt2.js";import"./label-0qqEdO1f.js";import"./modal-L23pjG0L.js";import"./process-list-CPI_j1f2.js";import"./radio-button-BmatpBi8.js";import"./range-slider-TWCCNmlo.js";import"./search-BIBuwPJv.js";import"./select-70hwWT5q.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CP4XAApo.js";import"./step-indicator-DGuG5_ox.js";import"./summary-box-FZot6Pmt.js";import"./tag-DNHETpWl.js";import"./text-area-AOWVCR8A.js";import"./time-picker-D_uQCAwz.js";import"./tooltip-DD5ba1Vg.js";import"./index-3Z-K7Yvk.js";import"./iframe-B7ivaCGP.js";import"./index-B_PTpnfo.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-LKY76-uE.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
