import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CPcXRZAp.js";import{P as i}from"./table-B2_7QTih.js";import"./banner-CB9iV2Es.js";import"./button-BbKRgqlt.js";import"./button-group-CakS15NU.js";import"./checkbox-jSUtNPxL.js";import"./combo-box-B2Abj-tx.js";import"./date-picker-3NLl3BU_.js";import"./error-messages-_lA7co94.js";import"./index-CD1vgVfL.js";import"./form-group-Df0vG0OS.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDRbc-Od.js";import"./label-0qqEdO1f.js";import"./modal-DZyUjUka.js";import"./process-list-DRc4oMF1.js";import"./radio-button-BzTiBx4p.js";import"./range-slider-ux1Bdl2a.js";import"./search-CENs0X1h.js";import"./select-DOrzXlhC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DeGKKjT7.js";import"./step-indicator-DhRqkIt4.js";import"./summary-box-C4Nw8Ivw.js";import"./tag--Mz2xj8r.js";import"./text-area-Dxh8xs4l.js";import"./time-picker-BZQdmWCi.js";import"./tooltip-CCdLEe-A.js";import"./index-fhRGG_ox.js";import"./index-CFllaHPr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BYUEugg6.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
