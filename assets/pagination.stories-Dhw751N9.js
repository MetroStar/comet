import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-3nCC7gWt.js";import{P as i}from"./table-etSpiK93.js";import"./banner-CWfSVMcQ.js";import"./button-B7pFt37z.js";import"./button-group-BRc77wHK.js";import"./checkbox-CUU9R15H.js";import"./combo-box-BPfnr8Rw.js";import"./date-picker-BMJNX18e.js";import"./error-messages-_lA7co94.js";import"./index-DSCzkK-X.js";import"./form-group-DkPWxlhw.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTBvyvH7.js";import"./label-0qqEdO1f.js";import"./modal-CKRHOoEv.js";import"./process-list-BZIxW3s3.js";import"./radio-button-Buv9cRjs.js";import"./range-slider-CxFZvE3_.js";import"./search-cT6P9tE4.js";import"./select-BNqncbBi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ovEs71ou.js";import"./step-indicator-CW9DACn5.js";import"./summary-box-DHtf9G_9.js";import"./tag-d3bWREuo.js";import"./text-area-CYy6almf.js";import"./time-picker-CEE4fWkk.js";import"./tooltip-DzncSK4y.js";import"./index-BAh54tqx.js";import"./index-C-EJdkFK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-l_I2nizS.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
