import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as i,a as c}from"./side-navigation-BnGWXKbX.js";const l={title:"USWDS/Side Navigation",component:i,argTypes:{id:{required:!0}}},d="Secondary navigation",a=(r=!1)=>e.jsx("a",{className:r?"usa-current":"",href:"/",onClick:g=>g.preventDefault(),children:"Navigation Link"}),m=[{anchor:a(!0)},...[...Array(4)].map(()=>({anchor:a()}))],n={args:{id:"side-navigation-1",items:m,ariaLabel:d},render:r=>e.jsx(i,{...r})},v=[{anchor:a(!0),items:[...[...Array(3)].map(()=>({anchor:a()})),{anchor:a(!0)}]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))],t={args:{id:"side-navigation-2",items:v,ariaLabel:d},render:r=>e.jsx(i,{...r})},p=[{anchor:a(!0),items:[{anchor:a(!0),items:[...[...Array(3)].map(()=>({anchor:a()})),{anchor:a(!0)}]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))}))],o={args:{id:"side-navigation-3",items:p,ariaLabel:d},render:r=>e.jsx(i,{...r})},s={args:{id:"side-navigation-4"},render:r=>e.jsxs(i,{...r,children:[e.jsx(c,{anchor:a(!0)}),e.jsx(c,{anchor:a(!1)}),e.jsx(c,{anchor:a(!1)})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-1',
    items: flatNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-2',
    items: twoLevelNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-3',
    items: threeLevelNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-4'
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args}>
      <SideNavigationItem anchor={createAnchor(true)} />
      <SideNavigationItem anchor={createAnchor(false)} />
      <SideNavigationItem anchor={createAnchor(false)} />
    </SideNavigation>
}`,...s.parameters?.docs?.source}}};const N=["FlatSideNavigation","TwoLevelSideNavigation","ThreeLevelSideNavigation","WithChildren"];export{n as FlatSideNavigation,o as ThreeLevelSideNavigation,t as TwoLevelSideNavigation,s as WithChildren,N as __namedExportsOrder,l as default};
