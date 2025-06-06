import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BUjXoUEM.js";import{P as i}from"./table-zTEB5Tk3.js";import"./banner-Ctu5Bn2a.js";import"./button-BbKCSq4F.js";import"./button-group-BqKMWMdE.js";import"./checkbox-DawAI24O.js";import"./combo-box-vu3uRnQB.js";import"./date-picker-CkW0AH-a.js";import"./error-messages-pdO9TZPZ.js";import"./index-BH2c9k8-.js";import"./form-group-CX-gEq_d.js";import"./helper-text-BRA2CuHl.js";import"./icon-BgNjQrB-.js";import"./label-0qqEdO1f.js";import"./modal-teqI2epy.js";import"./process-list-BLBcSx5I.js";import"./radio-button-vC6aP1To.js";import"./range-slider-Dg7Gc1px.js";import"./search-CSPK-G6V.js";import"./select-DMC-g43g.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CdVuIs4j.js";import"./step-indicator-CLNnw9VM.js";import"./summary-box-D_VnDwC5.js";import"./tag-DF5T__FD.js";import"./text-area-B3WR3qCO.js";import"./time-picker-8fFiPqiV.js";import"./tooltip-3hrG5ysG.js";import"./index-CbVBbDn6.js";import"./index-pcMLbDjW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BPObrEFB.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
