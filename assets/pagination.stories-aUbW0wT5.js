import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-B7ivaCGP.js";import{P as i}from"./table-VoNP95Pm.js";import"./banner-BFmuQa3J.js";import"./button-FnxbOIxl.js";import"./button-group-DxG_vAvL.js";import"./checkbox-CuAyvt5h.js";import"./combo-box-JFA8x0Aa.js";import"./date-picker-C4oDLK0L.js";import"./error-messages-pdO9TZPZ.js";import"./index-CeA95act.js";import"./form-group-Do7MeC9T.js";import"./helper-text-BRA2CuHl.js";import"./icon-jiCUmSt2.js";import"./label-0qqEdO1f.js";import"./modal-L23pjG0L.js";import"./process-list-CPI_j1f2.js";import"./radio-button-BmatpBi8.js";import"./range-slider-TWCCNmlo.js";import"./search-BIBuwPJv.js";import"./select-70hwWT5q.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CP4XAApo.js";import"./step-indicator-DGuG5_ox.js";import"./summary-box-FZot6Pmt.js";import"./tag-DNHETpWl.js";import"./text-area-AOWVCR8A.js";import"./time-picker-D_uQCAwz.js";import"./tooltip-DD5ba1Vg.js";import"./index-3Z-K7Yvk.js";import"./index-B_PTpnfo.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-LKY76-uE.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
