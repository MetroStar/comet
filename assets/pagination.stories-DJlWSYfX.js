import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BgblZ3Ci.js";import{P as i}from"./table-BWWVeaG9.js";import"./banner-BoULXacJ.js";import"./button-CQKw_ArU.js";import"./button-group-ewBVF2L4.js";import"./checkbox-BjvifG72.js";import"./combo-box-aN6JnhWz.js";import"./date-picker-C67rITtz.js";import"./error-messages-_lA7co94.js";import"./index-C2_xkeJc.js";import"./form-group-BkBVLNH5.js";import"./helper-text-BRA2CuHl.js";import"./icon-R8YJ2BOW.js";import"./label-0qqEdO1f.js";import"./modal-Bv-vzx9w.js";import"./process-list-BcXx8fgu.js";import"./radio-button-CTioDZzo.js";import"./range-slider-6N7k_X-x.js";import"./search-NPEc2I-5.js";import"./select-BXK56c5V.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DLvb7ydC.js";import"./step-indicator-BJVp4xKi.js";import"./summary-box-hknuY5Lx.js";import"./tag-D_domJr-.js";import"./text-area-BLWxRhg4.js";import"./time-picker-CBvJt52P.js";import"./tooltip-BhXbaBUJ.js";import"./index-Bqv6EQsX.js";import"./index-BJS_Wybf.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-zF2YK1WT.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
