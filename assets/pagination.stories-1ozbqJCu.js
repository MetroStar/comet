import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BlRJQ1-Y.js";import{P as i}from"./table-BdXERNfX.js";import"./banner-CGSORo_u.js";import"./button-CPtR5gcQ.js";import"./button-group-DhFFAP-Y.js";import"./checkbox-DIPu4W-G.js";import"./combo-box-xrw4u4Io.js";import"./date-picker-DdAbCWL7.js";import"./error-messages-_lA7co94.js";import"./index-CKMVbOyC.js";import"./form-group-BeYI6hSE.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTh2LF1Z.js";import"./label-0qqEdO1f.js";import"./modal-BkSCj_pK.js";import"./process-list-GG4225wz.js";import"./radio-button-DB9WFX5r.js";import"./range-slider-CjiD_4se.js";import"./search-D9RuuV-W.js";import"./select-DGKF5XvH.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-r4FkvNy4.js";import"./step-indicator-C7lNI0IH.js";import"./summary-box-Kko0uUi9.js";import"./tag-swdBJkEH.js";import"./text-area-B21G4oD1.js";import"./time-picker-z2FyGRfL.js";import"./tooltip-BiO4j0Po.js";import"./index-BOcI9Sy8.js";import"./index-Croz4O4J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-lROLGhdI.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
