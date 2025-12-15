import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-B742Kdb9.js";import{P as i}from"./table-DcU0b4S9.js";import"./banner-Zhn659kb.js";import"./button-B_-ONNZl.js";import"./button-group-BKOewsSA.js";import"./checkbox-C3tZzpbU.js";import"./combo-box-Q1ShTlun.js";import"./date-picker-Wpd8_OKF.js";import"./error-messages-DQwxQ3pR.js";import"./index-B7AoSx0a.js";import"./form-group-CMLBbM3T.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DCURlvdx.js";import"./label-Z58zP1tT.js";import"./modal-BV7fkCww.js";import"./process-list-gyaY5MhK.js";import"./radio-button-idXHHZgI.js";import"./range-slider-DSlEtBnj.js";import"./search-DPGJ6RwK.js";import"./select-DccGlsGn.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BeC0GHZw.js";import"./step-indicator-CEe8z7Jq.js";import"./summary-box-Bw0p2-tj.js";import"./tag-BClIq1Bj.js";import"./text-area-B6LM3Fp9.js";import"./time-picker-BqOXWfTb.js";import"./tooltip-DrkxkMMW.js";import"./index-2ou9KEVW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_5Z-PB-3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bu9PEM7P.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
