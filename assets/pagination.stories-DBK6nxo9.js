import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BIOm41XL.js";import{P as i}from"./table-BMOYpecL.js";import"./banner-D6zqm2EW.js";import"./button-nrtU24eK.js";import"./button-group-ADlqfgna.js";import"./checkbox-BiXkhPCx.js";import"./combo-box-CMQMmbfR.js";import"./date-picker-CgPaXT8a.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ct-EIvox.js";import"./form-group-uDJS1lnL.js";import"./helper-text-C5i0f8Ge.js";import"./icon-F_cyGZg9.js";import"./label-Z58zP1tT.js";import"./modal-PoZR4k57.js";import"./process-list-BQJfcRpT.js";import"./radio-button-C1_K-gHx.js";import"./range-slider-1ZyOyWp9.js";import"./search-Szn_9PFD.js";import"./select-BJFWI1Li.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BpclcXMk.js";import"./step-indicator-BpRbZmmq.js";import"./summary-box-DXWDLu-K.js";import"./tag-DTac5_8O.js";import"./text-area-BL3P-fru.js";import"./time-picker-DhIe9BAg.js";import"./tooltip-Dygdw5v4.js";import"./index-VxPTfNJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6pxTQJ.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BdscNTfy.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Z=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Z as __namedExportsOrder,Y as default};
