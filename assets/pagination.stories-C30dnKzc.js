import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-D_HOsr8M.js";import{P as i}from"./table-K6yo3B_7.js";import"./banner-BhKBfDyZ.js";import"./button-CPwdRaPa.js";import"./button-group-BKcE8Oav.js";import"./checkbox-BcgY7deo.js";import"./combo-box-C5VUUqkJ.js";import"./date-picker-DZhlg54d.js";import"./error-messages-DQwxQ3pR.js";import"./index-BepEtKgH.js";import"./form-group-B4sEWzNu.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIiwfHXh.js";import"./label-Z58zP1tT.js";import"./modal-Dp7gLss_.js";import"./process-list-CiT4wtBa.js";import"./radio-button-DwmexyD_.js";import"./range-slider-CsIntVkP.js";import"./search-4f5hLwa7.js";import"./select-Btjfsvlm.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Drwiv-SO.js";import"./step-indicator-_HVgCI85.js";import"./summary-box-CjgDttnj.js";import"./tag-Dna-t53L.js";import"./text-area-IlAvfY_F.js";import"./time-picker-BwBoa6O0.js";import"./tooltip-CWCAZCBF.js";import"./index-ChQN9uke.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJAMUTJ6.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cybot9zD.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
