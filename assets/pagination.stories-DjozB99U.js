import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Qm5GmbtS.js";import{P as i}from"./table-Cof7Ljxw.js";import"./banner-DZ0ebqlp.js";import"./button-mFolkgwz.js";import"./button-group-CsdMoKMD.js";import"./checkbox-BQ-bjBr7.js";import"./combo-box-QWTBgS1h.js";import"./date-picker-CEhy0WXY.js";import"./error-messages-DQwxQ3pR.js";import"./index-C5OTqaeq.js";import"./form-group-ioiVrL2h.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DN8sM9dv.js";import"./label-Z58zP1tT.js";import"./modal-eBwykmDT.js";import"./process-list-Dusstfuy.js";import"./radio-button-CAASPgna.js";import"./range-slider-CL6e4st8.js";import"./search-CK-e7ALh.js";import"./select-hgIVHsJi.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B4EcsSpo.js";import"./step-indicator-BeUZnxYe.js";import"./summary-box-DvvAlmYA.js";import"./tag-BHLVfqLG.js";import"./text-area-oJoyGoaw.js";import"./time-picker-t8bSILu6.js";import"./tooltip-CCcZSQT3.js";import"./index-CcYm8E6G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF68Yrx3.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-c7glwd7z.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
