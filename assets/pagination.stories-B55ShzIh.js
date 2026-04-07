import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CWd_O5TO.js";import{P as i}from"./table-C5ecXiWl.js";import"./banner-CpscEPZS.js";import"./button-CCplqAD4.js";import"./button-group-CBD_PpwK.js";import"./checkbox-DgCQLK4R.js";import"./combo-box-xLPTFQHE.js";import"./date-picker-CVz009oa.js";import"./error-messages-DQwxQ3pR.js";import"./index-BLpbz4XI.js";import"./form-group-DXfMq-IB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DR4j0tBc.js";import"./label-Z58zP1tT.js";import"./modal-DOzHsvEh.js";import"./process-list-CLXtVEns.js";import"./radio-button-DDYqB7cN.js";import"./range-slider-CqZElCAA.js";import"./search-BCF1VKn-.js";import"./select-CEldNHvj.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B33QLFtI.js";import"./step-indicator-D6s8wIN1.js";import"./summary-box-DdTvFNeq.js";import"./tag-CawMR5EG.js";import"./text-area-Ccz3oOr5.js";import"./time-picker-BmAckJCq.js";import"./tooltip-CbRrGeME.js";import"./index-D1vcuhlz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BragvABs.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BjWNQafm.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
