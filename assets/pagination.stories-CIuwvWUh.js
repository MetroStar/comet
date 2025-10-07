import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-L8I4kFBs.js";import{P as i}from"./table-B0ZfyW9e.js";import"./banner-CvO_kA9U.js";import"./button-D7jU-0wo.js";import"./button-group-Ck4w57sK.js";import"./checkbox-Rf_MEj7T.js";import"./combo-box-Bei1E7lW.js";import"./date-picker-BEGXPp7B.js";import"./error-messages-_lA7co94.js";import"./index-BUvbtEYw.js";import"./form-group-DDtB50L7.js";import"./helper-text-BRA2CuHl.js";import"./icon-DFGXQkrf.js";import"./label-0qqEdO1f.js";import"./modal-D9Aokmq8.js";import"./process-list-DMBWm_Vb.js";import"./radio-button-B7gLfpCg.js";import"./range-slider-CDYpIlxh.js";import"./search-7cG6apXU.js";import"./select-BvWJKS2s.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BNU5Kn0X.js";import"./step-indicator-D_mYB-E_.js";import"./summary-box-D0yEzeCv.js";import"./tag-BmGS_nkG.js";import"./text-area-CqKit1ly.js";import"./time-picker-_qB9ISkx.js";import"./tooltip-CWctn93i.js";import"./index-DuiSlnjk.js";import"./index-C7U72UuM.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D-I1emzh.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
