import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-ChG3UuR9.js";import{P as i}from"./table-BQeTkK1M.js";import"./banner-BZszu9Hy.js";import"./button-C1_RgaQE.js";import"./button-group-B14JmUJ1.js";import"./checkbox-D3z24Vel.js";import"./combo-box-DbeRSt4E.js";import"./date-picker-CnIzSQKS.js";import"./error-messages-_lA7co94.js";import"./index-BKjg4RhJ.js";import"./form-group-8TLLYdhI.js";import"./helper-text-BRA2CuHl.js";import"./icon-BJTLgqOL.js";import"./label-0qqEdO1f.js";import"./modal-9N1QXayz.js";import"./process-list-DJRNsDCz.js";import"./radio-button-D9V3ZUqb.js";import"./range-slider-BNntapAU.js";import"./search-i8PX9Grh.js";import"./select-Dk-O5ttt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B1Xc6g-U.js";import"./step-indicator-DUKM1WXK.js";import"./summary-box-B7jql9xw.js";import"./tag-DW9bMkE3.js";import"./text-area-MPsxISJ-.js";import"./time-picker-DAIr41Lx.js";import"./tooltip-DdBtyx6p.js";import"./index-DU2c9KRp.js";import"./index-BlziFMf9.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7_Jpop9.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
