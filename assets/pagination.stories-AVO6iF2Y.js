import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Bj_WYFuV.js";import{P as i}from"./table-CFZe1oZk.js";import"./banner-C0iRi7lY.js";import"./button-EjrCymmn.js";import"./button-group-B45KQgZo.js";import"./checkbox-BTDbXMs9.js";import"./combo-box-PCieNkZt.js";import"./date-picker-DD5vN0l4.js";import"./error-messages-_lA7co94.js";import"./index-DXpWHD9X.js";import"./form-group-DXBWy_5J.js";import"./helper-text-BRA2CuHl.js";import"./icon-BAmAFE3F.js";import"./label-0qqEdO1f.js";import"./modal-BaXUXORU.js";import"./process-list-Bes59W1_.js";import"./radio-button-Cg7so58a.js";import"./range-slider-DMLTBef-.js";import"./search-CemhTU5F.js";import"./select-DONnmCi2.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ChVoEick.js";import"./step-indicator-BtFe2dBb.js";import"./summary-box-DtlSzkaU.js";import"./tag-DmV8dUk0.js";import"./text-area-z3x7pbPL.js";import"./time-picker-BiDHUfm5.js";import"./tooltip-C3AqG2BR.js";import"./index-DF9socu3.js";import"./index-zqKFCB0Q.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-FZjDNhBr.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
