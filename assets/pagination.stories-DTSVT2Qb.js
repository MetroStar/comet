import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DmczAETD.js";import{P as i}from"./table-C1RLpG-G.js";import"./banner-DH6QgulV.js";import"./button-Db3wJyCy.js";import"./button-group-BulGe28K.js";import"./checkbox-BaI_YfOl.js";import"./combo-box-Dv1PMtXX.js";import"./date-picker-xedVW46W.js";import"./error-messages-DQwxQ3pR.js";import"./index-fFA3JtzK.js";import"./form-group-BJHd_lpP.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D0rONDc8.js";import"./label-Z58zP1tT.js";import"./modal-Dm0WuDuZ.js";import"./process-list-lqJb71JE.js";import"./radio-button-BpLLDlkk.js";import"./range-slider-BlBZgRTH.js";import"./search-CJ_zW23S.js";import"./select-_nNbbpjO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BtL5UUxM.js";import"./step-indicator-CLKds4-I.js";import"./summary-box-Crr76biK.js";import"./tag-CdXv5j6I.js";import"./text-area-CE2uSnwT.js";import"./time-picker-Dho_ucHb.js";import"./tooltip-Cy1CeqH9.js";import"./index-CDjQvKj7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Duk1BxEa.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C9EfC_2_.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
