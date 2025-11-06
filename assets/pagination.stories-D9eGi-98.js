import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CBtXVCyf.js";import{P as i}from"./table-BMCWheN3.js";import"./banner-DXxf7j2A.js";import"./button-BG13cfhe.js";import"./button-group-DH510XBM.js";import"./checkbox-BIksfjMa.js";import"./combo-box-CmNtbie_.js";import"./date-picker-BqFBLI8_.js";import"./error-messages-_lA7co94.js";import"./index-DIfJFMD2.js";import"./form-group-DMa1BOSH.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkVszG8e.js";import"./label-0qqEdO1f.js";import"./modal-DFz5w_J3.js";import"./process-list-DWibcUhP.js";import"./radio-button-BxaYVlRc.js";import"./range-slider-DjynCvMR.js";import"./search-yWSQaSjk.js";import"./select-44mgK95P.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprjmmdW.js";import"./step-indicator-DRL7Hrms.js";import"./summary-box-AVnlpaHk.js";import"./tag-C903ahvi.js";import"./text-area-7d5d4_iK.js";import"./time-picker-ZCAyf2CU.js";import"./tooltip-zZvGvgsP.js";import"./index-4BetU0rA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGD1TKzu.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xNoA7Lun.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
