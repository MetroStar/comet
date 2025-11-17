import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CWUXl1bG.js";import{P as i}from"./table-BR6WrhPV.js";import"./banner-CoXnAOGv.js";import"./button-Ba5SFYSH.js";import"./button-group-DrJ3dmmp.js";import"./checkbox-DRvVfAOf.js";import"./combo-box-JZtkTgBa.js";import"./date-picker-Dy-u9WJo.js";import"./error-messages-DQwxQ3pR.js";import"./index-_5yDmTtM.js";import"./form-group-DrxAuQof.js";import"./helper-text-C5i0f8Ge.js";import"./icon-R3TMqi9y.js";import"./label-Z58zP1tT.js";import"./modal-Db2SLur8.js";import"./process-list-9EdF__SY.js";import"./radio-button-B6VJ3ZlF.js";import"./range-slider-By0228wn.js";import"./search-DS8MfivK.js";import"./select-nQ058r9b.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Camo7QDz.js";import"./step-indicator-YT2NG5oe.js";import"./summary-box-DmkJ-lJj.js";import"./tag-2Y2MkQKt.js";import"./text-area-abDgHBzS.js";import"./time-picker-B5HPf1ng.js";import"./tooltip-DzHss-R_.js";import"./index-C60PpZKO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-9RNkUL.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EOzoFPlY.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Z=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Z as __namedExportsOrder,Y as default};
