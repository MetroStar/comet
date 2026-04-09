import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CsouTy85.js";import{t as r}from"./jsx-runtime-MmJhrRyC.js";import{i,t as a}from"./src-BZKMcYWZ.js";var o,s,c,l,u,d,f;t((()=>{o=e(n()),a(),s=r(),c={title:`USWDS/Pagination`,component:i,argTypes:{id:{required:!0}}},l=e=>(t,n)=>{t.preventDefault(),e(n)},u={args:{id:`pagination-1`,currentPage:9,amountOfPages:24,ariaLabel:`Pagination 1`,amountOfVisiblePageItems:3},render:e=>{let[t,n]=(0,o.useState)(e.currentPage),r={...e};return r.currentPage=t,r.onPage=l(n),(0,s.jsx)(i,{...r})}},d={args:{id:`pagination-2`,currentPage:2,amountOfPages:5,ariaLabel:`Pagination 2`,amountOfVisiblePageItems:1},render:e=>{let[t,n]=(0,o.useState)(e.currentPage),r={...e};return r.currentPage=t,r.onPage=l(n),(0,s.jsx)(i,{...r})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'pagination-1',
    currentPage: 9,
    amountOfPages: 24,
    ariaLabel: 'Pagination 1',
    amountOfVisiblePageItems: 3
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const newProps = {
      ...args
    };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);
    return <Pagination {...newProps} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'pagination-2',
    currentPage: 2,
    amountOfPages: 5,
    ariaLabel: 'Pagination 2',
    amountOfVisiblePageItems: 1
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const newProps = {
      ...args
    };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);
    return <Pagination {...newProps} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`LargePagination`,`SmallPagination`]}))();export{u as LargePagination,d as SmallPagination,f as __namedExportsOrder,c as default};