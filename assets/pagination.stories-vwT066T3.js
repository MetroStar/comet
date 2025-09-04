import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BsmwYSRM.js";import{P as i}from"./table-CRIHftcn.js";import"./banner-tI4i3dHX.js";import"./button-CIuKbjxD.js";import"./button-group-gBk2q1RT.js";import"./checkbox-C0p4yiuP.js";import"./combo-box-C1ab52c3.js";import"./date-picker-yjT1zarg.js";import"./error-messages-_lA7co94.js";import"./index-CzGQz90s.js";import"./form-group-DRHOEtVf.js";import"./helper-text-BRA2CuHl.js";import"./icon-BkCLabQh.js";import"./label-0qqEdO1f.js";import"./modal-x7UqWS9_.js";import"./process-list-DEWXnXmu.js";import"./radio-button-C1xT2Qy8.js";import"./range-slider--uBQoswA.js";import"./search-BCqjbBHN.js";import"./select-gcVG_7Gs.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOusDcvs.js";import"./step-indicator-DoMwYytm.js";import"./summary-box-BAt1BHtX.js";import"./tag-dpfiBseI.js";import"./text-area-C6LgDorB.js";import"./time-picker-Dwz4Iy3u.js";import"./tooltip-CSQbHOdo.js";import"./index-Dz-2O1NT.js";import"./index-BVkfGhKT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0eiXkeB.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
