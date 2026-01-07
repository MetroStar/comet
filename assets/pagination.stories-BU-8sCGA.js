import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BhXn9yy1.js";import{P as i}from"./table-BE7P90A5.js";import"./banner-CdKUtT4Q.js";import"./button-BuClEYRA.js";import"./button-group-3NzQO1eL.js";import"./checkbox-B_FgE5YG.js";import"./combo-box-BwDn4-7X.js";import"./date-picker-DtP7l5jL.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bni-B5ok.js";import"./form-group-BZBdvamC.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CdkrdHks.js";import"./label-Z58zP1tT.js";import"./modal-xumiYz7t.js";import"./process-list-CcAX-yjy.js";import"./radio-button-Bd2bWT8y.js";import"./range-slider-Be1UaCg9.js";import"./search-P4kxlHtr.js";import"./select-vPNxENBR.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CPGEl31o.js";import"./step-indicator-DJJpD3pM.js";import"./summary-box-0wY2PkS2.js";import"./tag-DkogBOJ7.js";import"./text-area-1c32Owjo.js";import"./time-picker-DmCzu4M3.js";import"./tooltip-CnpPKDFp.js";import"./index-Bj4XtJnt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt53Fj7x.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4TSTOiY.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
