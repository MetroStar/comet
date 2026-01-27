import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Ct8SnmH1.js";import{P as i}from"./table-DJmLJWvg.js";import"./banner-BUZwlTq1.js";import"./button-C4QfSxW0.js";import"./button-group-ieTsNMrX.js";import"./checkbox-BTlZxQ4F.js";import"./combo-box-DU30cfkl.js";import"./date-picker-CpHMGSi4.js";import"./error-messages-DQwxQ3pR.js";import"./index-B00UuIqu.js";import"./form-group-VLBEVhA0.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CTFc-y2-.js";import"./label-Z58zP1tT.js";import"./modal-B9LiO5_D.js";import"./process-list-xhix8Wuu.js";import"./radio-button-BhXyRUXt.js";import"./range-slider-DrXaDfu4.js";import"./search-C0nIEegv.js";import"./select-BMaCLBfp.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DjdkxkUE.js";import"./step-indicator-BaunrL7u.js";import"./summary-box-DOA8Q_xK.js";import"./tag-0raYCf6x.js";import"./text-area-O1BkgWFk.js";import"./time-picker-ZOMr_7mu.js";import"./tooltip-ajWB9iB8.js";import"./index-x-BpOtc8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWUUcN-5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B89yV2G1.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
