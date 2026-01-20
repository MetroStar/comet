import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BVPKJM18.js";import{P as i}from"./table-MLSJ1qAa.js";import"./banner-CZ791pMQ.js";import"./button-CF9efJMC.js";import"./button-group-CyNdtrB1.js";import"./checkbox-CnbmgKsJ.js";import"./combo-box-BfjGAN3U.js";import"./date-picker-VEt5vO7h.js";import"./error-messages-DQwxQ3pR.js";import"./index-NijndOXy.js";import"./form-group-BczgvB8Y.js";import"./helper-text-C5i0f8Ge.js";import"./icon-w-WB5_9_.js";import"./label-Z58zP1tT.js";import"./modal-sHxpdT3B.js";import"./process-list-BYnHW8RD.js";import"./radio-button-DitFf2If.js";import"./range-slider-Cy-87WO9.js";import"./search-VnOoVJQO.js";import"./select-BzPUx0jF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BRdvMZGO.js";import"./step-indicator-DV3EBP1L.js";import"./summary-box-BkFoCo6H.js";import"./tag-CWjkauZ_.js";import"./text-area-DQz5z8KE.js";import"./time-picker-aqy_O4vE.js";import"./tooltip-CckFkPTI.js";import"./index-BfAW8-H0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7O_8YBX.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwz56cnG.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
