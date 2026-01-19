import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-E8fts5wg.js";import{P as i}from"./table-Bl7Y-jHs.js";import"./banner-ByijTyXR.js";import"./button-BvDTT6fN.js";import"./button-group-DawoTUXk.js";import"./checkbox-DGKA9YCH.js";import"./combo-box-BxSvOq4M.js";import"./date-picker-hbP6XtI6.js";import"./error-messages-DQwxQ3pR.js";import"./index-awo_DVbo.js";import"./form-group-DxuCwoil.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DzaDF0tY.js";import"./label-Z58zP1tT.js";import"./modal-CdiObuoV.js";import"./process-list-CEfxPAJX.js";import"./radio-button-CQhC1dHP.js";import"./range-slider-CqCUYOdR.js";import"./search-DxnADgBP.js";import"./select-CzSkEtcT.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-xyfAWu0c.js";import"./step-indicator-CpGNsveB.js";import"./summary-box-BGlLSB41.js";import"./tag-BdHPqSov.js";import"./text-area-55osgg6i.js";import"./time-picker-Dw7X9sI8.js";import"./tooltip-D6haW_oM.js";import"./index-DieJCJBc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmTx8Cep.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSicFjZZ.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
