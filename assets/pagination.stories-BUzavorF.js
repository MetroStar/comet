import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-ct7Z8PCe.js";import{P as i}from"./table-Blnrq8SI.js";import"./banner-CjNoLs0R.js";import"./button-DrgNhKm4.js";import"./button-group-CTbARXCs.js";import"./checkbox-DfewhHQd.js";import"./combo-box-CDnqIYLk.js";import"./date-picker-BLAKa2RD.js";import"./error-messages-pdO9TZPZ.js";import"./index-DN5oEqfs.js";import"./form-group-CSzCYO5N.js";import"./helper-text-BRA2CuHl.js";import"./icon-TU9J43dq.js";import"./label-0qqEdO1f.js";import"./modal-DfZY7RtB.js";import"./process-list-CgGIe7FW.js";import"./radio-button-D71PyLY4.js";import"./range-slider-CStsFj4a.js";import"./search-hEBxe0Q0.js";import"./select-CUUaESWi.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-D_l-mChA.js";import"./step-indicator-k7qhB1Ng.js";import"./summary-box-CYdpdM1t.js";import"./tag-B_lpaQT1.js";import"./text-area-DPOep4SW.js";import"./time-picker-cU7Ch4VH.js";import"./tooltip-CoD1TqJC.js";import"./index-DkTiWbdt.js";import"./index-B5MGvWjW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DUFxWabi.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
