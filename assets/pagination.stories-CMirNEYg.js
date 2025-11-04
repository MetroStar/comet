import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Df-qv7MF.js";import{P as i}from"./table-By7JvPdL.js";import"./banner-CrFijEhj.js";import"./button-EuharW3P.js";import"./button-group-Bghajen5.js";import"./checkbox-DD_ifgi5.js";import"./combo-box-BqqLAMBj.js";import"./date-picker-X2Em5qj8.js";import"./error-messages-_lA7co94.js";import"./index-DksUg_Pu.js";import"./form-group-7iDqG7wI.js";import"./helper-text-BRA2CuHl.js";import"./icon-CzosSpGO.js";import"./label-0qqEdO1f.js";import"./modal-CxKo2Lel.js";import"./process-list-CK3CD4P9.js";import"./radio-button-BuriEYG-.js";import"./range-slider-DtOWQc-J.js";import"./search-DGAjiiYe.js";import"./select-6Fbn24rS.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-uJ66I4dg.js";import"./step-indicator-CeJIv4ob.js";import"./summary-box-DN7XFtmt.js";import"./tag-BRPKOBzf.js";import"./text-area-ChEJ_jFf.js";import"./time-picker-H4II5i2g.js";import"./tooltip-jTh08c-G.js";import"./index-KAwCHCmc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzHzm4Sz.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BJq8K2Sb.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
