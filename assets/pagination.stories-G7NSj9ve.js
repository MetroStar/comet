import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-06KVgpNd.js";import{P as i}from"./table-CCNOA2Tt.js";import"./banner-TnjcYjBW.js";import"./button-DwHw6MmX.js";import"./button-group-BsGuBAvu.js";import"./checkbox-D1-xw26W.js";import"./combo-box-BW_ELrKu.js";import"./date-picker-u_PmbiS3.js";import"./error-messages-_lA7co94.js";import"./index-CK6kpZ6D.js";import"./form-group-2abxc0CZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CA8rOCQY.js";import"./label-0qqEdO1f.js";import"./modal-COg9AbFD.js";import"./process-list-Bf0Q9txv.js";import"./radio-button-C1_K-Rqt.js";import"./range-slider-DZSXjHWc.js";import"./search-DFQDI6Z7.js";import"./select-DRe3cYfn.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B6vEvGsX.js";import"./step-indicator-hmRZqG9G.js";import"./summary-box-BdfEVXxD.js";import"./tag-6m6BCwW9.js";import"./text-area-vDjx9bIg.js";import"./time-picker-BK8RVqUd.js";import"./tooltip-CCefTJZZ.js";import"./index-BnOVKaQE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BuGsqDMl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-McuMDvj6.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
