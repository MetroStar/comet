import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CDzpRssQ.js";import{P as i}from"./table-DhmX7Z_S.js";import"./banner-xJkEB5hL.js";import"./button-CFEV8zQ6.js";import"./button-group-BdBThFRw.js";import"./checkbox-DhD3AoD9.js";import"./combo-box-CJ3FZO_F.js";import"./date-picker-CSS6a4-e.js";import"./error-messages-pdO9TZPZ.js";import"./index-aaz7Tl_2.js";import"./form-group-D--FW6C7.js";import"./helper-text-BRA2CuHl.js";import"./icon-8zzfAEs9.js";import"./label-0qqEdO1f.js";import"./modal-Dafr8mxd.js";import"./process-list-DP_n_abq.js";import"./radio-button-C5QvpKpy.js";import"./range-slider-DplOda1R.js";import"./search-C15Eta1b.js";import"./select-CVuqcUmD.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CrwNbb1H.js";import"./step-indicator-CXzzLe4G.js";import"./summary-box-DNG07pDu.js";import"./tag-CW4KaTzQ.js";import"./text-area-D1J510LF.js";import"./time-picker-BokxPoBe.js";import"./tooltip-D83AjoLs.js";import"./index-DUgY-iDN.js";import"./index-CmkFwe2W.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C73y17ap.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
