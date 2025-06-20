import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BL1d4o72.js";import{P as i}from"./table-bxCjHSZx.js";import"./banner-CbwhXAQD.js";import"./button-BHx9nyYG.js";import"./button-group-MtHQpuzi.js";import"./checkbox-BVNyjVNb.js";import"./combo-box-D_jHPtwp.js";import"./date-picker-ZAEtRi5O.js";import"./error-messages-pdO9TZPZ.js";import"./index-P5_oBTHH.js";import"./form-group-DM5a2JI_.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaSe7YOL.js";import"./label-0qqEdO1f.js";import"./modal-JtIm4YZx.js";import"./process-list-D0IxfUgS.js";import"./radio-button-sJxkDbLi.js";import"./range-slider-BFpSZ3BL.js";import"./search-DxfwXxES.js";import"./select-DlOsvP9Z.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DQmRsO5O.js";import"./step-indicator-BR8HRLAn.js";import"./summary-box-BHHZZ0U4.js";import"./tag-ka64kxnh.js";import"./text-area-C9GAkIeF.js";import"./time-picker-w1tJYeqO.js";import"./tooltip-Dzefdd_l.js";import"./index-DgVe2x5k.js";import"./index-0XBQmG4p.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-d7_Brw8T.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,P,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(P=o.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};const tr=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,tr as __namedExportsOrder,nr as default};
