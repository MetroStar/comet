import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DLFxhOfQ.js";import{P as i}from"./table-qipDyWWW.js";import"./banner-Dbu76H_h.js";import"./button-BMfJYqv5.js";import"./button-group-C2oE1fke.js";import"./checkbox-DV3FgYFD.js";import"./combo-box-DDkfMCEb.js";import"./date-picker-0NFNJK6U.js";import"./error-messages-pdO9TZPZ.js";import"./index-Uy9L_0xv.js";import"./form-group-B_64fuat.js";import"./helper-text-BRA2CuHl.js";import"./icon-BVVlaEti.js";import"./label-0qqEdO1f.js";import"./modal-CR3V5z44.js";import"./process-list-DIpvwoK3.js";import"./radio-button-C1yJv6Ul.js";import"./range-slider-DBEKSDkg.js";import"./search-V-FTtime.js";import"./select-B0FkRYsk.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-B2zEUvDJ.js";import"./step-indicator-CDE04cMN.js";import"./summary-box-BQOeikKb.js";import"./tag-Di9uSiTh.js";import"./text-area-qn4mo8GQ.js";import"./time-picker-C5iYe6-E.js";import"./tooltip-DkS2g9OU.js";import"./index-BLKK0fUp.js";import"./index-DbdQ-_yw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DnM5t5zf.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
