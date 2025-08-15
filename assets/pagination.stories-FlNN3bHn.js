import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Bh4Kgv9z.js";import{P as i}from"./table-BYtm8aWr.js";import"./banner-BOsb6-5M.js";import"./button-kvp-3bRO.js";import"./button-group-Bz8x7RTE.js";import"./checkbox-U1-aMXP1.js";import"./combo-box-C41SXqKd.js";import"./date-picker-CZxAjDjb.js";import"./error-messages-_lA7co94.js";import"./index-B-rCaw0b.js";import"./form-group-C7WDyZYd.js";import"./helper-text-BRA2CuHl.js";import"./icon-CepZwO60.js";import"./label-0qqEdO1f.js";import"./modal-AEuqzuY7.js";import"./process-list-SwSDrK6Y.js";import"./radio-button-BTfMv-fS.js";import"./range-slider-CP1tnxY0.js";import"./search-7C4hTjQi.js";import"./select-DwRGmsQU.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BIGnOVGL.js";import"./step-indicator-C7aYC1tN.js";import"./summary-box-CO5CN3ne.js";import"./tag-CjzNHQU6.js";import"./text-area-nycWrcG_.js";import"./time-picker-BXCuHpEP.js";import"./tooltip-2q8JeVRJ.js";import"./index-CKsPUyOS.js";import"./index-Bj0UJ-Ok.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-GgdPq9z-.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
