import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Dos1JflN.js";import{P as i}from"./table-_ySZ1kIM.js";import"./banner-DDXVgGyN.js";import"./button-BTS2x0Pt.js";import"./button-group-_vnsl2F_.js";import"./checkbox-DJRaGhmt.js";import"./combo-box-70sdfL1_.js";import"./date-picker-eKStoA0t.js";import"./error-messages-DQwxQ3pR.js";import"./index-80aeHvEm.js";import"./form-group-CWgS9-1Q.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BFPF_o-y.js";import"./label-Z58zP1tT.js";import"./modal-BNXAw0Vh.js";import"./process-list-BbE7PYOl.js";import"./radio-button-DTxW2Np9.js";import"./range-slider-CtaOGn7K.js";import"./search-J78xjvHz.js";import"./select-C7SsP2-G.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-s9UKtouU.js";import"./step-indicator-DdT1SOvY.js";import"./summary-box-D49JJTOM.js";import"./tag-BwLKNIcJ.js";import"./text-area-BH5aI-nX.js";import"./time-picker-BV7NhZs-.js";import"./tooltip-Dw1tkfBR.js";import"./index-DfNGQrnd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JGxDgrpx.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BqRRjYiV.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
