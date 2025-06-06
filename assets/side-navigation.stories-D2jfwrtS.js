import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as i,a as c}from"./side-navigation-DDx8EY_w.js";const I={title:"USWDS/Side Navigation",component:i,argTypes:{id:{required:!0}}},d="Secondary navigation",a=(r=!1)=>e.jsx("a",{className:r?"usa-current":"",href:"/",onClick:x=>x.preventDefault(),children:"Navigation Link"}),y=[{anchor:a(!0)},...[...Array(4)].map(()=>({anchor:a()}))],n={args:{id:"side-navigation-1",items:y,ariaLabel:d},render:r=>e.jsx(i,{...r})},j=[{anchor:a(!0),items:[...[...Array(3)].map(()=>({anchor:a()})),{anchor:a(!0)}]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))],t={args:{id:"side-navigation-2",items:j,ariaLabel:d},render:r=>e.jsx(i,{...r})},T=[{anchor:a(!0),items:[{anchor:a(!0),items:[...[...Array(3)].map(()=>({anchor:a()})),{anchor:a(!0)}]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))}))],o={args:{id:"side-navigation-3",items:T,ariaLabel:d},render:r=>e.jsx(i,{...r})},s={args:{id:"side-navigation-4"},render:r=>e.jsxs(i,{...r,children:[e.jsx(c,{anchor:a(!0)}),e.jsx(c,{anchor:a(!1)}),e.jsx(c,{anchor:a(!1)})]})};var g,m,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-1',
    items: flatNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,h,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-2',
    items: twoLevelNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var l,N,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-3',
    items: threeLevelNavigation,
    ariaLabel
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var A,L,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'side-navigation-4'
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args}>
      <SideNavigationItem anchor={createAnchor(true)} />
      <SideNavigationItem anchor={createAnchor(false)} />
      <SideNavigationItem anchor={createAnchor(false)} />
    </SideNavigation>
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const P=["FlatSideNavigation","TwoLevelSideNavigation","ThreeLevelSideNavigation","WithChildren"];export{n as FlatSideNavigation,o as ThreeLevelSideNavigation,t as TwoLevelSideNavigation,s as WithChildren,P as __namedExportsOrder,I as default};
