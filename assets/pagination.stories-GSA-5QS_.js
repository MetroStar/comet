import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-YKUTTlTG.js";import{P as i}from"./table-PiQKqWot.js";import"./banner-BIUhIOGt.js";import"./button-4POMs2EY.js";import"./button-group-CL3mf8vR.js";import"./checkbox-B5Gt84Lz.js";import"./combo-box-Bct81XLK.js";import"./date-picker-DS9Gxvt9.js";import"./error-messages-pdO9TZPZ.js";import"./index-b9o7Vjy2.js";import"./form-group-D1BkIUNZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-DEIpQ_jd.js";import"./label-0qqEdO1f.js";import"./modal-DZZ04_D2.js";import"./process-list-DJo8omkl.js";import"./radio-button-8NO9pNju.js";import"./range-slider-0gKY5Srp.js";import"./search-FlA3WQtB.js";import"./select-3USV_5y9.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-D7BEF8Gj.js";import"./step-indicator-CeIMTuFn.js";import"./summary-box-CbWSBrtA.js";import"./tag-Cfs8zox1.js";import"./text-area-CJSx7yip.js";import"./time-picker-DI32aVe8.js";import"./tooltip-Fgr-n6X3.js";import"./index-BAkss3hx.js";import"./index-Do0kNAB-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSFFTE0I.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
