import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DKZDQxow.js";import{P as i}from"./table-SJRpy6TF.js";import"./banner-DKvHUpFc.js";import"./button-Co8dLuMH.js";import"./button-group-CsV4n4S0.js";import"./checkbox-BgEEI_GS.js";import"./combo-box-CkAo5f6g.js";import"./date-picker-ChpWtyOR.js";import"./error-messages-_lA7co94.js";import"./index-tY_h3Y9E.js";import"./form-group-DLQEuROg.js";import"./helper-text-BRA2CuHl.js";import"./icon-CQoY4QYS.js";import"./label-0qqEdO1f.js";import"./modal-COkJuVMB.js";import"./process-list-DF-yjf2Q.js";import"./radio-button-BKRS0NMa.js";import"./range-slider-7S54eZrE.js";import"./search-Cnde9Nqy.js";import"./select-byDVf-8O.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Baj4Nh5d.js";import"./step-indicator-yzWIyMqI.js";import"./summary-box-CWWkQxQT.js";import"./tag-B7uUqTnf.js";import"./text-area-DFlZYgWg.js";import"./time-picker-XAcq8nAQ.js";import"./tooltip-CRmdnTdO.js";import"./index-l37dtnHA.js";import"./index-Df-QuvC-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxjvmrCa.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Y=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Y as __namedExportsOrder,X as default};
