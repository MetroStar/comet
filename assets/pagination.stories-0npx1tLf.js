import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-gQpfMxwu.js";import{P as i}from"./table-CKPPHEB2.js";import"./banner-_ZbGEhIg.js";import"./button-wiBUw2ln.js";import"./button-group-DejK9lhd.js";import"./checkbox-_aoh7e0v.js";import"./combo-box-DYIP3xuD.js";import"./date-picker-B3ZMxbLu.js";import"./error-messages-_lA7co94.js";import"./index-BOGvIYqa.js";import"./form-group-BMhe2Iop.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8n28FoH.js";import"./label-0qqEdO1f.js";import"./modal-CvmAaDMV.js";import"./process-list-y5z1Z_ew.js";import"./radio-button-vMb-nHfq.js";import"./range-slider-H8-mu3pO.js";import"./search-CZaE40pE.js";import"./select-BmIio9K1.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DyJn8dTy.js";import"./step-indicator-LRxRKaHE.js";import"./summary-box-CpUaTIGj.js";import"./tag-BAxMA63-.js";import"./text-area-CCqQJwr3.js";import"./time-picker-Dl6GpAlx.js";import"./tooltip-fJCS9TPh.js";import"./index-BSbYLGkZ.js";import"./index-Dl7XZhpl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C-jQrruZ.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
