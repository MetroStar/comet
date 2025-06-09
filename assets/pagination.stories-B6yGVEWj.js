import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-D0wlIprT.js";import{P as i}from"./table-BlI47a42.js";import"./banner-CmzRFqpO.js";import"./button-D9Wdx50N.js";import"./button-group-BtL05JZx.js";import"./checkbox-CYDcYypr.js";import"./combo-box-4UaID54b.js";import"./date-picker-DhNdhWoz.js";import"./error-messages-pdO9TZPZ.js";import"./index-jGmS5lj0.js";import"./form-group-KdJstwiz.js";import"./helper-text-BRA2CuHl.js";import"./icon-B8I8DfLA.js";import"./label-0qqEdO1f.js";import"./modal-dSr-m1nB.js";import"./process-list-wWdVkJAE.js";import"./radio-button-DFlR5LhN.js";import"./range-slider-ByuSUVCH.js";import"./search-CSHRDgKS.js";import"./select-DVb__2mq.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiwGmtXm.js";import"./step-indicator-Dur3iiBJ.js";import"./summary-box-DeBRERe2.js";import"./tag-BkaVgh7n.js";import"./text-area-CtxSlzmP.js";import"./time-picker-BNt0A-Or.js";import"./tooltip-D22GfTlD.js";import"./index-B9tBr0ep.js";import"./index-DqlK7rFw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C1TKt0S7.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
