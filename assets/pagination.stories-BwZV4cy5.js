import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Sgzi56p1.js";import{P as i}from"./table-8pzfOB_A.js";import"./banner-807EuhAw.js";import"./button-BDmVrewr.js";import"./button-group-BpG60Bcj.js";import"./checkbox-CRo-bLYB.js";import"./combo-box-xOSHeDpi.js";import"./date-picker-iGTXRuob.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bo9BpfTX.js";import"./form-group--j3vJMLd.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CwZlaL-J.js";import"./label-Z58zP1tT.js";import"./modal-BYOriTvt.js";import"./process-list-Czejjo2U.js";import"./radio-button-DS7TYGvv.js";import"./range-slider-DftJyvpa.js";import"./search-BJc94_-5.js";import"./select-CopyUol0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-I6f_MaFE.js";import"./step-indicator-DWHprvTt.js";import"./summary-box-BchfMT9C.js";import"./tag-zxYU5urs.js";import"./text-area-Cfzus3my.js";import"./time-picker-zTLx_dm2.js";import"./tooltip-DfU1Hy0M.js";import"./index-BtRDYpIf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NOZ5o7zP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DS-Y6bb9.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
