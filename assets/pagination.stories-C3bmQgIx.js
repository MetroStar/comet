import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DksaedcG.js";import{P as i}from"./table-BNfe135G.js";import"./banner-DPjbFk6x.js";import"./button-C-D3Shbk.js";import"./button-group-BCoHKgA-.js";import"./checkbox-GPYpo4RE.js";import"./combo-box-DUwNofml.js";import"./date-picker-DfAmFoHa.js";import"./error-messages-_lA7co94.js";import"./index-ZT5FrD4g.js";import"./form-group-CiFlcqBa.js";import"./helper-text-BRA2CuHl.js";import"./icon-CbBiLLJ0.js";import"./label-0qqEdO1f.js";import"./modal-Dre79qFw.js";import"./process-list-DJDoVvk0.js";import"./radio-button-C9VBjnj1.js";import"./range-slider-7Gmc7fk2.js";import"./search-CGRST86R.js";import"./select-BP-JJAUc.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Dqf_N2g4.js";import"./step-indicator-CsJry-v3.js";import"./summary-box-1CmwUG7w.js";import"./tag-zmEcz-se.js";import"./text-area-C9pHn9jX.js";import"./time-picker-O_U2zYQF.js";import"./tooltip-cZpruF5b.js";import"./index-BECprJbH.js";import"./index-Bl_X5Dmy.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CmIK2Abd.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Y=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Y as __namedExportsOrder,X as default};
