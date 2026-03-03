import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CBTPnINx.js";import{P as i}from"./table-DJk-XhMn.js";import"./banner-753k4wS4.js";import"./button-Zp2H4Y6h.js";import"./button-group-C2O7PpJm.js";import"./checkbox-BgWuR-IY.js";import"./combo-box-CihLQ5-J.js";import"./date-picker-tZBs_O5G.js";import"./error-messages-DQwxQ3pR.js";import"./index-CUBRylId.js";import"./form-group-BhQwpRkB.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C7X0n4qy.js";import"./label-Z58zP1tT.js";import"./modal-BJk45PfD.js";import"./process-list-DZl8MoFR.js";import"./radio-button-CbVGWSxw.js";import"./range-slider-CuyjuimZ.js";import"./search-CxOU0G1I.js";import"./select-dXE1vA8A.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CgJkBig9.js";import"./step-indicator-CMG5DhXp.js";import"./summary-box-BIDD5Ly5.js";import"./tag-DG7R--Z-.js";import"./text-area-DopYU4uh.js";import"./time-picker-C_yvhzgf.js";import"./tooltip-DCRG7Dm3.js";import"./index-Cthlo8g0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmdtenRm.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BTJpA1Cv.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
