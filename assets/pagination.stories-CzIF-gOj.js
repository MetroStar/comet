import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CyoivpIQ.js";import{P as i}from"./table-C1p0Tl06.js";import"./banner-DoI9yGrg.js";import"./button-CzpSgtjY.js";import"./button-group-BfU8yjRw.js";import"./checkbox-DtOiFVfN.js";import"./combo-box-DogqRNR0.js";import"./date-picker-Dijhhk7v.js";import"./error-messages-DQwxQ3pR.js";import"./index-CtzF-D60.js";import"./form-group-Cai7TlWJ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Drjjlf9N.js";import"./label-Z58zP1tT.js";import"./modal-CehYCqMP.js";import"./process-list-CGZSrz7X.js";import"./radio-button-CfiXaEF6.js";import"./range-slider-6r50nwPO.js";import"./search-BjUh2JlI.js";import"./select-v7nb6AkK.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D8j5nbHS.js";import"./step-indicator-CcO3oml5.js";import"./summary-box-YvpXG5nZ.js";import"./tag-OTrlQ7_Y.js";import"./text-area-BMhIGIyW.js";import"./time-picker-DQcFw9pV.js";import"./tooltip-C8stFGcz.js";import"./index-8bL-dlWE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjtC_FDd.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-LC7cK7JR.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
