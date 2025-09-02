import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-ZYripNYc.js";import{P as i}from"./table-DdVOCvYZ.js";import"./banner-DQMHi-aW.js";import"./button-DI5qMgFe.js";import"./button-group-CsmqFrP1.js";import"./checkbox-PjFvKvpp.js";import"./combo-box-B2haW5dU.js";import"./date-picker-BIPhfaAN.js";import"./error-messages-_lA7co94.js";import"./index-j0ODhhQa.js";import"./form-group-BqN9ZsX3.js";import"./helper-text-BRA2CuHl.js";import"./icon-CufaamKb.js";import"./label-0qqEdO1f.js";import"./modal-BZ7djAFQ.js";import"./process-list-DMfh53jt.js";import"./radio-button-BE7ko7w4.js";import"./range-slider-DHVUPffB.js";import"./search-CArZRBWZ.js";import"./select-6paA5eWu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-E2RY7NFc.js";import"./step-indicator-DmrnODcm.js";import"./summary-box-DYsEWNiy.js";import"./tag-C21wbAG6.js";import"./text-area-BloRP6vR.js";import"./time-picker-BCDXAFpJ.js";import"./tooltip-BfeS9RUy.js";import"./index-BwND8XNc.js";import"./index-C-nO5zU_.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BOTlr87W.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
