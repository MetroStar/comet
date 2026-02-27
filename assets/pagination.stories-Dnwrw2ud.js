import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-D2HmkBK5.js";import{P as i}from"./table-CfPzz4nf.js";import"./banner-BH6B8BCY.js";import"./button-CLevJzxR.js";import"./button-group-D3Ocr3Rb.js";import"./checkbox-Cc0V9sR6.js";import"./combo-box-TU4qt16Y.js";import"./date-picker-DSHGeHYl.js";import"./error-messages-DQwxQ3pR.js";import"./index-BsEblj0h.js";import"./form-group-BzmrJy3n.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D2Nqola7.js";import"./label-Z58zP1tT.js";import"./modal-DfDUd-Mt.js";import"./process-list-UharPk4r.js";import"./radio-button-D4Pk_Rgl.js";import"./range-slider-sQ5Tj5dy.js";import"./search-CFh4K7A8.js";import"./select-Kk8L1GnB.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D0bVirTZ.js";import"./step-indicator-z7wQapN2.js";import"./summary-box-BkJ1H1hK.js";import"./tag-ZOpGD9hG.js";import"./text-area-ynEclwl4.js";import"./time-picker-Bb-pazU6.js";import"./tooltip-Cg_p7vCm.js";import"./index-BdG5vuSr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dyunygu1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CucFHm0F.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
