import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BXvGn3Ww.js";import{P as i}from"./table-DIHhYBqi.js";import"./banner-BYkWT2yo.js";import"./button-BM9ySSKU.js";import"./button-group-DU9juRoB.js";import"./checkbox-dNYLELqw.js";import"./combo-box-CHVKASnX.js";import"./date-picker-uce4V5Q-.js";import"./error-messages-_lA7co94.js";import"./index-0g5umDOB.js";import"./form-group-4Q-7eSNv.js";import"./helper-text-BRA2CuHl.js";import"./icon-CtIVt_oZ.js";import"./label-0qqEdO1f.js";import"./modal-DrcG8wOg.js";import"./process-list-EXQTzVQ3.js";import"./radio-button-BVtP_EQo.js";import"./range-slider-CTiTwWqV.js";import"./search-BwhliTvO.js";import"./select-DYcwYXed.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-WbV2iWNK.js";import"./step-indicator-D5cV-W6H.js";import"./summary-box-Bg6bY0XI.js";import"./tag-BPJ1eWEF.js";import"./text-area-Dy8zqNTA.js";import"./time-picker-DKBMRE3N.js";import"./tooltip-R4OwE2Lf.js";import"./index-Bd3YalL3.js";import"./index-hWEVF2Mq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DPJweXc7.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
