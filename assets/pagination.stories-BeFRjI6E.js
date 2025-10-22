import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BDLZuKeY.js";import{P as i}from"./table-lkz4hOMD.js";import"./banner-Ig5f_ff_.js";import"./button-ByaPeP45.js";import"./button-group-BYLDb9dK.js";import"./checkbox-Bx0i06cV.js";import"./combo-box-CYlMeI46.js";import"./date-picker-Bfyv2fVt.js";import"./error-messages-_lA7co94.js";import"./index-Bj3PxKMc.js";import"./form-group-CZMC42k8.js";import"./helper-text-BRA2CuHl.js";import"./icon-qxS9RIgY.js";import"./label-0qqEdO1f.js";import"./modal-DHbPHUzb.js";import"./process-list-CdCHmAIf.js";import"./radio-button-BCFO0GZX.js";import"./range-slider-CLdCU-10.js";import"./search-DxDEgAvO.js";import"./select-BgcnNTUP.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-6hTBLbFk.js";import"./step-indicator-DVqdwgVq.js";import"./summary-box-C1sGnI8z.js";import"./tag-BtjAR3XH.js";import"./text-area-CY6IMMmT.js";import"./time-picker-CDjYCY_5.js";import"./tooltip-BpJC97gU.js";import"./index-BgC3XmV1.js";import"./index-BC9Je7_j.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BY9Gf3eC.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
