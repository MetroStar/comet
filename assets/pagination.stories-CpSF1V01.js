import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Bvnd1wKQ.js";import{P as i}from"./table-BPs16-FG.js";import"./banner-LwyMWt_f.js";import"./button-DzOuhbyX.js";import"./button-group-DYkrmCJV.js";import"./checkbox-DXuqZY3J.js";import"./combo-box-C7iC2mHN.js";import"./date-picker-DVrnKbmB.js";import"./error-messages-DQwxQ3pR.js";import"./index-BqWP0DP-.js";import"./form-group-CqavwUjT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZJuTWWU.js";import"./label-Z58zP1tT.js";import"./modal-Be2O8iTh.js";import"./process-list-COVkMve9.js";import"./radio-button-CTxx2WwS.js";import"./range-slider-D1_yv7oc.js";import"./search-DypyX-qM.js";import"./select-Cp8HWSd0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CmhnIneU.js";import"./step-indicator-BqqEEUy_.js";import"./summary-box-vGIC5NTA.js";import"./tag-CB3TBIup.js";import"./text-area--8jwfK7F.js";import"./time-picker-BxfpYFKH.js";import"./tooltip-DcEE479F.js";import"./index-ByS0UJ_H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tyhn6axX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DBgtOXSw.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
