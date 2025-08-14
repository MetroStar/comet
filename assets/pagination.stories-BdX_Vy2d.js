import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-9tQC-4Xm.js";import{P as i}from"./table-Sd8cxFUx.js";import"./banner-upozFeST.js";import"./button-DeQuXKOz.js";import"./button-group-n1LE8F7m.js";import"./checkbox-DAwvlk7m.js";import"./combo-box-DTj_V3yZ.js";import"./date-picker-m9zUkIvb.js";import"./error-messages-_lA7co94.js";import"./index-Bm7npR7P.js";import"./form-group-ODM8qnlA.js";import"./helper-text-BRA2CuHl.js";import"./icon-C4QULdnD.js";import"./label-0qqEdO1f.js";import"./modal-CVqJuv9Y.js";import"./process-list-CYa6MbFC.js";import"./radio-button-DreS4VKm.js";import"./range-slider-BWH65D0M.js";import"./search-MvPWk77I.js";import"./select-BUVP5uNL.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Bo3xCnGW.js";import"./step-indicator-DzN4kYk1.js";import"./summary-box-DYGCR5mO.js";import"./tag-Ce7eHv1o.js";import"./text-area-BjhcLw6Y.js";import"./time-picker-DG6m1DpN.js";import"./tooltip-DHiDK0fF.js";import"./index-BNTQFOaE.js";import"./index-CasUqPWH.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAbhvx1n.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
