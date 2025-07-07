import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-D9Bj4LF8.js";import{P as i}from"./table-Hs4VCtc9.js";import"./banner-nM2nGO0J.js";import"./button-C-o4OEAH.js";import"./button-group-CTngshXJ.js";import"./checkbox-BViJbhRi.js";import"./combo-box-CuwRJQAf.js";import"./date-picker-D6J3TZ8g.js";import"./error-messages-pdO9TZPZ.js";import"./index-DU_4dbC6.js";import"./form-group-Bdsh5mGJ.js";import"./helper-text-BRA2CuHl.js";import"./icon-CW17oGSm.js";import"./label-0qqEdO1f.js";import"./modal-7rUH1YJR.js";import"./process-list-CY8fUDPl.js";import"./radio-button-BXVR-eS5.js";import"./range-slider-BWitLn27.js";import"./search-CLsFZHno.js";import"./select-ChyTk__I.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CPChkUBO.js";import"./step-indicator-Djr7F7jZ.js";import"./summary-box-Dmvss6bn.js";import"./tag-CoHDO4Xv.js";import"./text-area-TjsQH2pL.js";import"./time-picker-Dv1ePHYY.js";import"./tooltip-Dr1Y0apo.js";import"./index-BuhywQhW.js";import"./index-Y4NXysNt.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DcNgODFG.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
