import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./search-B5IuNjKS.js";import"./index-Ctl6FX5J.js";import"./iframe-DJ-niyiJ.js";const S={title:"USWDS/Search",component:t,argTypes:{id:{required:!0},type:{control:"select"}}},c=e=>e.preventDefault(),r={args:{id:"search-1",type:"default",onSearch:c},render:e=>n.jsx(t,{...e})},a={args:{id:"search-2",type:"small",onSearch:c},render:e=>n.jsx(t,{...e})},s={args:{id:"search-3",type:"big",onSearch:c},render:e=>n.jsx(t,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'search-1',
    type: 'default',
    onSearch: preventDefault
  },
  render: (args: SearchProps) => <Search {...args} />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'search-2',
    type: 'small',
    onSearch: preventDefault
  },
  render: (args: SearchProps) => <Search {...args} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'search-3',
    type: 'big',
    onSearch: preventDefault
  },
  render: (args: SearchProps) => <Search {...args} />
}`,...s.parameters?.docs?.source}}};const h=["Default","SmallSearch","BigSearch"];export{s as BigSearch,r as Default,a as SmallSearch,h as __namedExportsOrder,S as default};
