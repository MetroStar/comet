import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DI97NYzA.js";import{P as i}from"./table-DoPD4hfz.js";import"./banner-CO-rJZEh.js";import"./button-s3f33iqR.js";import"./button-group-yvOjzuR7.js";import"./checkbox-CtRvH166.js";import"./combo-box-BjQtQyeK.js";import"./date-picker-BXS9EJIo.js";import"./error-messages-DQwxQ3pR.js";import"./index-Y6j-vL1X.js";import"./form-group-C2eezSoD.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BvEpj7o9.js";import"./label-Z58zP1tT.js";import"./modal-C3ovDbUu.js";import"./process-list-CtF8XHOe.js";import"./radio-button-5J3HPOi8.js";import"./range-slider-BmvWjfhG.js";import"./search-DXUrmg5z.js";import"./select-BFVUdGDr.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DrN3KhjE.js";import"./step-indicator-Dmo_bZM0.js";import"./summary-box-2eCbppDZ.js";import"./tag-C3E-r3xI.js";import"./text-area-BRG0rnJp.js";import"./time-picker-eDTugkBF.js";import"./tooltip-CyHsxTd4.js";import"./index-CajJ0eJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXqkfQZm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN4bhDLR.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
