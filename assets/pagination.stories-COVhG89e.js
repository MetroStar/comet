import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BTUuw-2g.js";import{P as i}from"./table-C_C78in7.js";import"./banner-BgiZqRlo.js";import"./button-tylLr4j2.js";import"./button-group-D6cjC1Vo.js";import"./checkbox-B6VyoAKp.js";import"./combo-box-CDNvDZLL.js";import"./date-picker-DgQlJTCw.js";import"./error-messages-DQwxQ3pR.js";import"./index-CdaV37ys.js";import"./form-group-DoY8VT3L.js";import"./helper-text-C5i0f8Ge.js";import"./icon-hzBFwrUe.js";import"./label-Z58zP1tT.js";import"./modal-DLp_famE.js";import"./process-list-DQ8FW98J.js";import"./radio-button-C3p27onq.js";import"./range-slider-Cluh4832.js";import"./search-BMB22s0V.js";import"./select-Dff7ZjSm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DtkG30B7.js";import"./step-indicator-CDua6ht5.js";import"./summary-box-CvRPeRE0.js";import"./tag-AOv4Bgzm.js";import"./text-area-BKiL77Z2.js";import"./time-picker-CernixGi.js";import"./tooltip-KHEIxHIJ.js";import"./index-91E-2JV-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrsoTcc4.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CgEYPfm3.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
