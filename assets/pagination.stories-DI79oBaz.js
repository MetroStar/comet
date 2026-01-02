import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BpOry1Kh.js";import{P as i}from"./table-luUx04bm.js";import"./banner-D4Eit51W.js";import"./button-DNdCgeu5.js";import"./button-group-BD0JEpF_.js";import"./checkbox-BJ-xYc0N.js";import"./combo-box-DXcbu5I5.js";import"./date-picker-8WhXjeat.js";import"./error-messages-DQwxQ3pR.js";import"./index-D86_PsyH.js";import"./form-group-CX0LVAtq.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DUaH-WVT.js";import"./label-Z58zP1tT.js";import"./modal-B0m6buq3.js";import"./process-list-DpHne8bX.js";import"./radio-button-CWbykzPm.js";import"./range-slider-CT2-RIUa.js";import"./search-D2qakHU1.js";import"./select-CIPD7EMl.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CJCZeBC9.js";import"./step-indicator-yM6dTqmK.js";import"./summary-box-Cp1bfIsu.js";import"./tag-RKDNbzYK.js";import"./text-area-AMxLhMtc.js";import"./time-picker-D42idwCe.js";import"./tooltip-BPlFa0e3.js";import"./index-8gstkWMy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7DyRbAp.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bqk60UQq.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
