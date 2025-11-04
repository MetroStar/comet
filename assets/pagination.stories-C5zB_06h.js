import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CUeiGFJS.js";import{P as i}from"./table-sgBBeN_3.js";import"./banner-BlKhwcl-.js";import"./button-s6X5UBaR.js";import"./button-group-B1aWv9gb.js";import"./checkbox-cnQ_-peT.js";import"./combo-box-ByFKHUsq.js";import"./date-picker-CdtWHcRU.js";import"./error-messages-_lA7co94.js";import"./index-CRpSyyh9.js";import"./form-group-B-Pr4jGu.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDcUgKz8.js";import"./label-0qqEdO1f.js";import"./modal-B-Ar_YiJ.js";import"./process-list-B1j8-mm9.js";import"./radio-button-B5LIr0wS.js";import"./range-slider-CCd_gb87.js";import"./search-B2v06REB.js";import"./select-CFmg9oUl.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-T3keRwyR.js";import"./step-indicator-BjOG0FUs.js";import"./summary-box-Dep7O2aS.js";import"./tag-CvARMcmu.js";import"./text-area-ktJJJxPq.js";import"./time-picker-Dpbrbtdg.js";import"./tooltip-Ce_IMZUp.js";import"./index-BrPJmFEP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hkmjj3pC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUB1n4uP.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
