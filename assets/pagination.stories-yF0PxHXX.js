import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DkQxi855.js";import{P as i}from"./table-Ch-sZdwv.js";import"./banner-XLvXtSqA.js";import"./button-BsC6LYen.js";import"./button-group-C-mMKkOx.js";import"./checkbox-BrkCm2o9.js";import"./combo-box-Cas2il9B.js";import"./date-picker-Bqh6GVSb.js";import"./error-messages-DQwxQ3pR.js";import"./index-CkKdknOi.js";import"./form-group-bMnI7vyb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7ZI2_WA.js";import"./label-Z58zP1tT.js";import"./modal-BnlhklE2.js";import"./process-list-DG1jhLut.js";import"./radio-button-BK2GU6Ug.js";import"./range-slider-CcpPZara.js";import"./search-BD8ryVTf.js";import"./select-BAp0tBXJ.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BDPCZz7C.js";import"./step-indicator-BoU6H3fm.js";import"./summary-box-CUyYbWXy.js";import"./tag-Dd3nNNr4.js";import"./text-area-DvYQT1M1.js";import"./time-picker-DPoYf0Ep.js";import"./tooltip-gTCSVkqI.js";import"./index-Bv8IALZP.js";import"./preload-helper-PPVm8Dsz.js";import"./index--78zLXpN.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BekW2GCl.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
