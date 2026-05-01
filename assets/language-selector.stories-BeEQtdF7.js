import{n as e}from"./chunk-DnJy8xQt.js";import{L as t}from"./iframe-pVO7hzh_.js";import{t as n}from"./jsx-runtime-BpX3lQ6F.js";import{s as r,t as i}from"./src-BgwO9hwX.js";var a,o,s,c,l,u;e((()=>{t(),i(),a=n(),o={title:`USWDS/Language Selector`,component:r,argTypes:{id:{required:!0},variant:{control:{type:`select`,options:[`default`,`unstyled`]}},size:{control:{type:`select`,options:[`default`,`small`]}}}},s=e=>{console.log(`${e} selected`)},c={args:{id:`selector-1`,items:[{label:`English`,attr:`en`,onChange:()=>s(`en`)},{label:`Español`,attr:`es`,onChange:()=>s(`es`)}],variant:`default`,size:`default`},render:e=>(0,a.jsx)(r,{...e})},l={args:{id:`selector-2`,items:[{label:`English`,attr:`en`,onChange:()=>s(`en`)},{label:`Español`,localLabel:`Spanish`,attr:`es`,onChange:()=>s(`es`)},{label:`Français`,localLabel:`French`,attr:`fr`,onChange:()=>s(`fr`)}],variant:`default`,size:`small`},render:e=>(0,a.jsx)(r,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`ThreeOrMore`]}))();export{c as Default,l as ThreeOrMore,u as __namedExportsOrder,o as default};