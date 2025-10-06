import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-C7-W_WM8.js";import{P as i}from"./table-Cq069oLF.js";import"./banner-DMVz3e1o.js";import"./button-nB4XvN_t.js";import"./button-group-amVFX9Mw.js";import"./checkbox-BMD3BsjL.js";import"./combo-box-D-sS-4M1.js";import"./date-picker-BUAVuSMI.js";import"./error-messages-_lA7co94.js";import"./index-BOCy3pWu.js";import"./form-group-BDbcoRKO.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bualwomm.js";import"./label-0qqEdO1f.js";import"./modal-C3INcVR_.js";import"./process-list-DTHC9t3-.js";import"./radio-button-Bf8IedV0.js";import"./range-slider-k8KNCxBU.js";import"./search-DufGuPvN.js";import"./select-B3bCYLzV.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-D7ynWOIW.js";import"./step-indicator-CncyS3oC.js";import"./summary-box-BeKVa36t.js";import"./tag-UEZmNv5X.js";import"./text-area-B42-Clzm.js";import"./time-picker-BlirOEuF.js";import"./tooltip-47OA24e-.js";import"./index-CPNdnnmO.js";import"./index-BcIHhRzX.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-rh0G5RG1.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
