import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-C-4Tka3L.js";import{P as i}from"./table-CZhgR457.js";import"./banner-DIEW8n6B.js";import"./button-DGvenM4j.js";import"./button-group-BV1Ytlrk.js";import"./checkbox-DzLYMhp5.js";import"./combo-box-kKNgi2y1.js";import"./date-picker-BI-4-5Ws.js";import"./error-messages-DQwxQ3pR.js";import"./index-B2SZ3QXI.js";import"./form-group-CdcOJC88.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CsGs4XnL.js";import"./label-Z58zP1tT.js";import"./modal-BZVpKvbi.js";import"./process-list-Bs__pWGn.js";import"./radio-button-B2-5RiLD.js";import"./range-slider-B_aFnZC_.js";import"./search-CMPDoc5B.js";import"./select-CT7NorQw.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BNiS1_pH.js";import"./step-indicator-DQxEqhPc.js";import"./summary-box-B-Tr6alV.js";import"./tag-BkiTKNVF.js";import"./text-area-Bo3yVAyW.js";import"./time-picker-B0q7-5Ml.js";import"./tooltip-DtEVUKwV.js";import"./index-CE8u-YIp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClkTyj86.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-COT3FEAd.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
