import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Ca0L-wZx.js";import{P as i}from"./table-BClhlT0z.js";import"./banner-CzkaGaVP.js";import"./button-DU2pOzuh.js";import"./button-group-CnynISiL.js";import"./checkbox-Cb6FxYwq.js";import"./combo-box-qh64P4iq.js";import"./date-picker-DHhq89_1.js";import"./error-messages-_lA7co94.js";import"./index-BlvOJwI9.js";import"./form-group-B80SdfXj.js";import"./helper-text-BRA2CuHl.js";import"./icon-CF9rid26.js";import"./label-0qqEdO1f.js";import"./modal-BguBK0_s.js";import"./process-list-BuGmR-8F.js";import"./radio-button-ON0RGceu.js";import"./range-slider-BoVWNUy0.js";import"./search-ClnHZvP6.js";import"./select-C4g0Dhmi.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEXzN5iU.js";import"./step-indicator-h0VWgyZg.js";import"./summary-box-Hwd2puDo.js";import"./tag-BMw6NXFS.js";import"./text-area-Ltx5Xw97.js";import"./time-picker-4nej8pOD.js";import"./tooltip-B9Y8zZao.js";import"./index-0XD21YYW.js";import"./index-NMaxshBa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-D0mqKmh-.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
