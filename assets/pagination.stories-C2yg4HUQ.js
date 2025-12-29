import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BUmp4v9P.js";import{P as i}from"./table-DoweFw58.js";import"./banner-DCAwis5j.js";import"./button-7RovM-Qw.js";import"./button-group-kghJkCVA.js";import"./checkbox-CFTS5l4Y.js";import"./combo-box-CE7KR71Q.js";import"./date-picker-CcHVpChK.js";import"./error-messages-DQwxQ3pR.js";import"./index-C9NoWFmt.js";import"./form-group-Dbsx7Gzo.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cygb0suf.js";import"./label-Z58zP1tT.js";import"./modal-BLZk1Mde.js";import"./process-list-Bo_blzCt.js";import"./radio-button-BxTZPhjK.js";import"./range-slider-8FINxcyX.js";import"./search-BKhtnkhS.js";import"./select-BZa46iHj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-fOh-sxzm.js";import"./step-indicator-DhVcUGb2.js";import"./summary-box-Jxgcj2fM.js";import"./tag-BiIxnUsz.js";import"./text-area-B1NVmLHg.js";import"./time-picker-j2c1grgt.js";import"./tooltip-BBY_kcQ_.js";import"./index-BUrzLQmc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj6Y9BYB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYQJJsbO.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
