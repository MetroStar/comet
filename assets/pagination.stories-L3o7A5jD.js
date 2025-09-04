import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BecLNQGy.js";import{P as i}from"./table-4gBBYbnv.js";import"./banner-di6yW5Uz.js";import"./button-DDnj8xdT.js";import"./button-group-DooJ8EU4.js";import"./checkbox-DIKveoyj.js";import"./combo-box-D9fuo9i4.js";import"./date-picker-DHGVSwyc.js";import"./error-messages-_lA7co94.js";import"./index-V3eZre_f.js";import"./form-group-tvOP8ASP.js";import"./helper-text-BRA2CuHl.js";import"./icon-JLyd65NR.js";import"./label-0qqEdO1f.js";import"./modal-BwfPqh08.js";import"./process-list-D_yB08p6.js";import"./radio-button-Prxo-dtn.js";import"./range-slider-QOEJ62F2.js";import"./search-CcFFi-oo.js";import"./select-DR1IqUls.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BRpmzYGQ.js";import"./step-indicator-C-Qfgoa0.js";import"./summary-box-D8962nN0.js";import"./tag-C9O5PIcN.js";import"./text-area-8F6leHVG.js";import"./time-picker-BnnSU-Lp.js";import"./tooltip-C6Xayu_D.js";import"./index-BZNHB8GM.js";import"./index-BFAkROmT.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-hvX-s2ru.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
