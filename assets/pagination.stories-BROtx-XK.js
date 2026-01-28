import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Cn7wZz7_.js";import{P as i}from"./table-Bq6GEKwN.js";import"./banner-DK3VBm5U.js";import"./button-D8zIbCge.js";import"./button-group-CuPgHglY.js";import"./checkbox-CzQYJoKR.js";import"./combo-box-CJkqnDV4.js";import"./date-picker-CYzZbYRN.js";import"./error-messages-DQwxQ3pR.js";import"./index-BR9Kz18I.js";import"./form-group-DgFamHKx.js";import"./helper-text-C5i0f8Ge.js";import"./icon-B8KreRvd.js";import"./label-Z58zP1tT.js";import"./modal-BDwXsif8.js";import"./process-list-Cz-W6YwX.js";import"./radio-button-BocApSzk.js";import"./range-slider-faOPHNJW.js";import"./search-DL3oXpp6.js";import"./select-_A3e-4TS.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Ddk_Hcer.js";import"./step-indicator-AWmi0NuP.js";import"./summary-box-Du5uqv8U.js";import"./tag-Byr-lYbf.js";import"./text-area-CXRY8a5j.js";import"./time-picker-BXGxN0EV.js";import"./tooltip-Z2bNLvCP.js";import"./index-16IRk5e0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_I8d7DW.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-pA1eNxZY.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
