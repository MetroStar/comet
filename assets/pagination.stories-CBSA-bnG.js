import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DaQn1dS-.js";import{P as i}from"./table-BWv9IJKq.js";import"./banner-DsPBt72z.js";import"./button-lJR5aED-.js";import"./button-group-Bxj5iVgy.js";import"./checkbox-In1TWY_E.js";import"./combo-box-DAWbcX4M.js";import"./date-picker-BkdMrxwm.js";import"./error-messages-_lA7co94.js";import"./index-Br_kK07F.js";import"./form-group-B9NArTvQ.js";import"./helper-text-BRA2CuHl.js";import"./icon-C9u35B_b.js";import"./label-0qqEdO1f.js";import"./modal-Cd9YNYuZ.js";import"./process-list-CD-g_9tc.js";import"./radio-button-DZ8kb-LA.js";import"./range-slider--TFS-Shg.js";import"./search-Cl8_qv-_.js";import"./select-BfCAPZTm.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DkgoCb6C.js";import"./step-indicator-RQudhJU8.js";import"./summary-box-CiJRHcX-.js";import"./tag-DWDu_7xe.js";import"./text-area-DsNcsWGK.js";import"./time-picker-BQQSmGq0.js";import"./tooltip-CpcUUJ4i.js";import"./index-CdLIUrq1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUGDvriB.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-86W0yJob.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
