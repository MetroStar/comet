import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Cu46YZU-.js";import{P as i}from"./table-Bse5DExo.js";import"./banner-BwO0HiA4.js";import"./button-DiHoCjUb.js";import"./button-group-CsEIu6gv.js";import"./checkbox-DC3XQgFH.js";import"./combo-box-CrVnplkd.js";import"./date-picker-ao6BA4Jq.js";import"./error-messages-DQwxQ3pR.js";import"./index-BfIDrPCA.js";import"./form-group-BYOZKLJh.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DPOheGDS.js";import"./label-Z58zP1tT.js";import"./modal-D-P-giTm.js";import"./process-list-BYk2qEP5.js";import"./radio-button-D6dovua3.js";import"./range-slider-BM6BzcML.js";import"./search-O5uHTu-n.js";import"./select-BUCNjJ4o.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DZJPNjAO.js";import"./step-indicator-7qKQZOBY.js";import"./summary-box-D5bHgkv8.js";import"./tag-DXQHCdsJ.js";import"./text-area-DqvxoD8F.js";import"./time-picker-DJ8eVvNZ.js";import"./tooltip-CkP7cUnO.js";import"./index-C0ruH5vH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt3gd5Dn.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dj0TSj9e.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
