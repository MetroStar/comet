import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Bb0DG7Iv.js";import{P as i}from"./table-Jdby6yUG.js";import"./banner-BWHtyq-w.js";import"./button-3Al1XHOg.js";import"./button-group-9moZSAQG.js";import"./checkbox-CpUjSfgW.js";import"./combo-box-Dl-TrNTV.js";import"./date-picker-DIlX87w0.js";import"./error-messages-DQwxQ3pR.js";import"./index-4FKgb1wG.js";import"./form-group-C4y5ugcY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DuR14fzr.js";import"./label-Z58zP1tT.js";import"./modal-CMUN3kDG.js";import"./process-list-gG9x1FSY.js";import"./radio-button-DnNdSXMm.js";import"./range-slider-CqSUwkjq.js";import"./search-CN34ZjJJ.js";import"./select-BmtDcZqa.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-6l3hPaFo.js";import"./step-indicator-DfMXXaOj.js";import"./summary-box-Bclcf1zh.js";import"./tag-CehJoHB5.js";import"./text-area-C0-8g27p.js";import"./time-picker-DkLiDCm7.js";import"./tooltip-DdWABcOa.js";import"./index-BaVG5ZPW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4l6e6Qu.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJAnig9h.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
