import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CUCs5BC9.js";import{P as i}from"./table-DSl4auMC.js";import"./banner-CEZKUkbF.js";import"./button-B7gNPYIL.js";import"./button-group-Brorikwu.js";import"./checkbox-eWG9SJdV.js";import"./combo-box-BsFocY2f.js";import"./date-picker-DZDMadHV.js";import"./error-messages-DQwxQ3pR.js";import"./index-CYtU26vE.js";import"./form-group-DXXdEMrs.js";import"./helper-text-C5i0f8Ge.js";import"./icon-uymm9zyE.js";import"./label-Z58zP1tT.js";import"./modal-D8oOiZoK.js";import"./process-list-CUm5Q4da.js";import"./radio-button-ClH9r-YV.js";import"./range-slider-DXbD-WkO.js";import"./search-CVMveQck.js";import"./select-Dm9gk4f-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DNWbVdiF.js";import"./step-indicator-BVn4ZNzg.js";import"./summary-box-D7Fun5SH.js";import"./tag-BNT1hXJ0.js";import"./text-area-DLgrCPMA.js";import"./time-picker-BBv860sW.js";import"./tooltip-Bg5a6Fm-.js";import"./index-cRcqcJEf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLD1Bu8G.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C2r2cwpe.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
