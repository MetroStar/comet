import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DRiTG7GW.js";import{P as i}from"./table-BEKSweh_.js";import"./banner-DyAyilqF.js";import"./button-VNXf3ISx.js";import"./button-group-xmotaBdt.js";import"./checkbox-BweNvPRE.js";import"./combo-box-ClEp36RC.js";import"./date-picker-BqoWjb8c.js";import"./error-messages-DQwxQ3pR.js";import"./index-BZ1H5p7K.js";import"./form-group-BFEWiwy1.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C75CzOhg.js";import"./label-Z58zP1tT.js";import"./modal-CEGm1Rs3.js";import"./process-list-D0GJ3lSG.js";import"./radio-button-tlBbfaT6.js";import"./range-slider-D-cIFdgq.js";import"./search-DCoJlB32.js";import"./select-CYSnMBtu.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-3WD2CfWL.js";import"./step-indicator-rn6oeVSC.js";import"./summary-box-Bs9YqzRK.js";import"./tag-CBCRz6dN.js";import"./text-area-BSZLkY_3.js";import"./time-picker-C9u4OHrU.js";import"./tooltip-w2oQOtQH.js";import"./index-DAhVAgpx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgyOCjq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DSAWNYRB.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
