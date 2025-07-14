import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-C2QaQG_Z.js";import{P as i}from"./table-BQL0JfDZ.js";import"./banner-BOhAuR3U.js";import"./button-0lmkM3fD.js";import"./button-group-CZhUERTb.js";import"./checkbox-fT2FCOvu.js";import"./combo-box-CLCaBMvM.js";import"./date-picker-BL4r-SdH.js";import"./error-messages-pdO9TZPZ.js";import"./index-CwwaLKAA.js";import"./form-group-CL2GuKdf.js";import"./helper-text-BRA2CuHl.js";import"./icon-jurcj1Nf.js";import"./label-0qqEdO1f.js";import"./modal-CFm0QTZ1.js";import"./process-list-AE9dDrc7.js";import"./radio-button-DuKZRfEc.js";import"./range-slider-BJh14v4A.js";import"./search-DGzVu3E9.js";import"./select-C6KxA7eF.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-cjdRzAPZ.js";import"./step-indicator-C7ZPDABy.js";import"./summary-box-D0zDo-mv.js";import"./tag-CWTFBZDR.js";import"./text-area-C_SND7HQ.js";import"./time-picker-OgCg1Xfc.js";import"./tooltip-BxjZneBO.js";import"./index-BoQPokf7.js";import"./index-bqbLV7rw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CVA6Rm36.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
