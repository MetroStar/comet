import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BYBXzPRT.js";import{P as i}from"./table-BJgJ8SQm.js";import"./banner-f_2dKpl2.js";import"./button-Ci5bU_D2.js";import"./button-group-C-VsmNox.js";import"./checkbox-D-Jr5DDK.js";import"./combo-box-D6ANYorV.js";import"./date-picker-eXTqss-T.js";import"./error-messages-DQwxQ3pR.js";import"./index-Dc3JXLdD.js";import"./form-group-BvM4xclW.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZ9hB3Je.js";import"./label-Z58zP1tT.js";import"./modal-DJ68z5PD.js";import"./process-list-DncI_axu.js";import"./radio-button-CsGsBkgv.js";import"./range-slider-CBoMWbVu.js";import"./search-Bthciyit.js";import"./select-DU5PRhoL.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-Cv5cYq58.js";import"./step-indicator-DlpwlrCi.js";import"./summary-box-DzaoumiN.js";import"./tag-__NQPF_p.js";import"./text-area-BqQUXP0J.js";import"./time-picker-CgKK9R3m.js";import"./tooltip-Cjibbbpk.js";import"./index-BTjyQaL9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9bxhaY2I.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-U_wWHGJO.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
