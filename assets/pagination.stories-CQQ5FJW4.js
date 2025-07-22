import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DoOtH7e2.js";import{P as i}from"./table-CyrrKNI3.js";import"./banner-BW73H41s.js";import"./button-CPceKQnT.js";import"./button-group-CAnn0_Ku.js";import"./checkbox-BRuIli36.js";import"./combo-box-Bo5WGBqQ.js";import"./date-picker-pMJfSnii.js";import"./error-messages-_lA7co94.js";import"./index-Al5h7hI8.js";import"./form-group-RW_L-8wz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DSHcO3IW.js";import"./label-0qqEdO1f.js";import"./modal-D5wIiW8J.js";import"./process-list-BwBgnQYa.js";import"./radio-button-CUShxS_O.js";import"./range-slider-DyoEvVCi.js";import"./search-BLE9gsW5.js";import"./select-BxQ7zMlw.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BfblnkNp.js";import"./step-indicator--sKB1jWz.js";import"./summary-box-B4zWynWF.js";import"./tag-Dhnnd0L-.js";import"./text-area-D5CJVc_V.js";import"./time-picker-YAfelJ_H.js";import"./tooltip-DNj1ozNN.js";import"./index-DUFx5r_F.js";import"./index-Da_auYbC.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Ds-rJRIb.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
