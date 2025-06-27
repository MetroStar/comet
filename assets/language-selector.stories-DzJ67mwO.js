import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./table-CwM-e1Ld.js";import"./banner-CghSNQac.js";import"./button-DmQlEe5k.js";import"./button-group-CzHupFz8.js";import"./checkbox-B4ogPmPY.js";import"./combo-box-DTr5hLrb.js";import"./date-picker-BAjdwWxm.js";import"./error-messages-pdO9TZPZ.js";import"./index-B9xeDuGV.js";import"./form-group-Dpd_9Ciz.js";import"./helper-text-BRA2CuHl.js";import"./icon-HidOGawT.js";import"./label-0qqEdO1f.js";import"./modal-BjsfUY3z.js";import"./process-list-CCzppcJI.js";import"./radio-button-B0rdgAKy.js";import"./range-slider-DebgFVuZ.js";import"./search-DBBsVxls.js";import"./select-4SSRmt_-.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BABO9nkk.js";import"./step-indicator-D6Dm9Ncv.js";import"./summary-box-C4ax1MQo.js";import"./tag-B0oWdQ5d.js";import"./text-area-BhfI6C58.js";import"./time-picker-Brz1130R.js";import"./tooltip-mjUvhVd0.js";import"./index-DEcbbbY2.js";import"./iframe-BTDZFy0C.js";import"./index-BejGjDqK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C4w5M_iJ.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>g.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>g.jsx(n,{...e})};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
