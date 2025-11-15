import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CnqCO9iU.js";import{P as i}from"./table-DW_bMWHL.js";import"./banner-BuudoFOQ.js";import"./button-B4wDKhOD.js";import"./button-group-DozuKPpf.js";import"./checkbox-ZHZjr4cn.js";import"./combo-box-CsP_B6Zh.js";import"./date-picker-CqC6lTbh.js";import"./error-messages-DQwxQ3pR.js";import"./index-DD-f6anU.js";import"./form-group-ZBJWDz0G.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BH5NOiaC.js";import"./label-Z58zP1tT.js";import"./modal-CLdCh8BH.js";import"./process-list-CZ6SCh55.js";import"./radio-button-8ffYBqhl.js";import"./range-slider-D2vE_SJf.js";import"./search-ojO1ONPP.js";import"./select-_crQ4lid.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Dbb_hWNu.js";import"./step-indicator-DuHvjJSx.js";import"./summary-box-DBxxh4rZ.js";import"./tag-CwSNC5bx.js";import"./text-area-Bop2UMwn.js";import"./time-picker-DYqV8tkF.js";import"./tooltip-Ch_NwA79.js";import"./index-DRC3u4o-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dzl_5l3M.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CT5x6rTX.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
