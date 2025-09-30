import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Bzkq98Jv.js";import{P as i}from"./table-B8FMHg_J.js";import"./banner-BHD4a-YF.js";import"./button-CZnSuiSG.js";import"./button-group-D_3I6eIv.js";import"./checkbox-BlfnrhUV.js";import"./combo-box-CH8ob2Tb.js";import"./date-picker-BRoY0Im-.js";import"./error-messages-_lA7co94.js";import"./index-CJ4Rmd2u.js";import"./form-group-Db87imG5.js";import"./helper-text-BRA2CuHl.js";import"./icon-CjZN-pZP.js";import"./label-0qqEdO1f.js";import"./modal-nc01-4DT.js";import"./process-list-BShwkqsW.js";import"./radio-button-BZ8kNZ3P.js";import"./range-slider-C0Al_MLK.js";import"./search-BuJgjO8M.js";import"./select-PK_HMEM4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B7eMpm6t.js";import"./step-indicator-BTtpkGV8.js";import"./summary-box-CHjfH4Zj.js";import"./tag-Dr4ongqQ.js";import"./text-area-CoOy6seG.js";import"./time-picker-CxHuHVd3.js";import"./tooltip-DF1b6R82.js";import"./index-QkTpvnaW.js";import"./index-BJjidRwi.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CevKQl2c.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
