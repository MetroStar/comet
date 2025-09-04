import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DJ-niyiJ.js";import{P as i}from"./table-BlnceWZT.js";import"./banner-DdYHPnzv.js";import"./button-M0p4z2np.js";import"./button-group-CTzsh1Qs.js";import"./checkbox-BLWy1ewy.js";import"./combo-box-DAnMy2Zd.js";import"./date-picker-BinjPKZk.js";import"./error-messages-_lA7co94.js";import"./index-DHy8gSfp.js";import"./form-group-DN1OID7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-ooEVvdPp.js";import"./label-0qqEdO1f.js";import"./modal-JsDx-7FJ.js";import"./process-list-eg8YhyYR.js";import"./radio-button-CXGOkgST.js";import"./range-slider-BXGET5_y.js";import"./search-B5IuNjKS.js";import"./select-DY3XXkwD.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-De5kiDiV.js";import"./step-indicator-lKJzCiiT.js";import"./summary-box-C_2Rbq_I.js";import"./tag-DCGDkX5e.js";import"./text-area-BGhE39VC.js";import"./time-picker-DT7HzhKL.js";import"./tooltip-CLhFKuL2.js";import"./index-DDrUjC2G.js";import"./index-Ctl6FX5J.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-tJEc6IQE.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
