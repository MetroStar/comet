import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-vQD5sTXz.js";import{P as i}from"./table-EDJB2sTo.js";import"./banner-BOpU37qp.js";import"./button-DBKb0ewM.js";import"./button-group-Bh92E-bS.js";import"./checkbox-Dw6UHJ51.js";import"./combo-box-CSSj876a.js";import"./date-picker-CrF8QLeb.js";import"./error-messages-_lA7co94.js";import"./index-Dz3KGBJ1.js";import"./form-group-D61Ut1VC.js";import"./helper-text-BRA2CuHl.js";import"./icon-C2GMX_Yd.js";import"./label-0qqEdO1f.js";import"./modal-SzqUbwHE.js";import"./process-list-DWkHGGyu.js";import"./radio-button-CJrfb0RL.js";import"./range-slider-Dclr-Ayn.js";import"./search-D8XGy_cg.js";import"./select-Dp05dyOy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DrY8ZEeD.js";import"./step-indicator-QljTgDVY.js";import"./summary-box-ubPFwvIt.js";import"./tag-CTmDgqa8.js";import"./text-area-BF6Qq-LB.js";import"./time-picker-D2RHFb7y.js";import"./tooltip-CkbpW6i9.js";import"./index-CR8NEJay.js";import"./index-fgMZaG23.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CWfwrV3c.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
