import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{n as r,r as i,t as a}from"./side-navigation-Dm6jLNme.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{t(),i(),o=n(),s={title:`USWDS/Side Navigation`,component:a,argTypes:{id:{required:!0}}},c=`Secondary navigation`,l=(e=!1)=>(0,o.jsx)(`a`,{className:e?`usa-current`:``,href:`/`,onClick:e=>e.preventDefault(),children:`Navigation Link`}),u=[{anchor:l(!0)},...[...[,,,,]].map(()=>({anchor:l()}))],d={args:{id:`side-navigation-1`,items:u,ariaLabel:c},render:e=>(0,o.jsx)(a,{...e})},f=[{anchor:l(!0),items:[...[...[,,,]].map(()=>({anchor:l()})),{anchor:l(!0)}]},...[...[,,,]].map(()=>({anchor:l(),items:[...[,,,]].map(()=>({anchor:l()}))}))],p={args:{id:`side-navigation-2`,items:f,ariaLabel:c},render:e=>(0,o.jsx)(a,{...e})},m=[{anchor:l(!0),items:[{anchor:l(!0),items:[...[...[,,,]].map(()=>({anchor:l()})),{anchor:l(!0)}]},...[...[,,,]].map(()=>({anchor:l(),items:[...[,,,]].map(()=>({anchor:l()}))}))]},...[...[,,,]].map(()=>({anchor:l(),items:[...[,,,]].map(()=>({anchor:l(),items:[...[,,,]].map(()=>({anchor:l()}))}))}))],h={args:{id:`side-navigation-3`,items:m,ariaLabel:c},render:e=>(0,o.jsx)(a,{...e})},g={args:{id:`side-navigation-4`},render:e=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(r,{anchor:l(!0)}),(0,o.jsx)(r,{anchor:l(!1)}),(0,o.jsx)(r,{anchor:l(!1)})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-1',
    items: flatNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-2',
    items: twoLevelNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-3',
    items: threeLevelNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-4'
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args}>
      <SideNavigationItem anchor={createAnchor(true)} />
      <SideNavigationItem anchor={createAnchor(false)} />
      <SideNavigationItem anchor={createAnchor(false)} />
    </SideNavigation>
}`,...g.parameters?.docs?.source}}},_=[`FlatSideNavigation`,`TwoLevelSideNavigation`,`ThreeLevelSideNavigation`,`WithChildren`]}))();export{d as FlatSideNavigation,h as ThreeLevelSideNavigation,p as TwoLevelSideNavigation,g as WithChildren,_ as __namedExportsOrder,s as default};