import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-feKrdQjw.js";import{P as i}from"./table-2NAaAm4f.js";import"./banner-DmWNFVX0.js";import"./button-DMGkmuRe.js";import"./button-group-BpVsvt9f.js";import"./checkbox-QXWsWq5b.js";import"./combo-box-D7opi152.js";import"./date-picker-osE87iLd.js";import"./error-messages-_lA7co94.js";import"./index-CuYmxFJ7.js";import"./form-group-DW4A1vPS.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bne4nQ7L.js";import"./label-0qqEdO1f.js";import"./modal-v_LYecBD.js";import"./process-list-DPSQSkDw.js";import"./radio-button-hq8NkZqJ.js";import"./range-slider-C33b7wPA.js";import"./search-CC-BpXF1.js";import"./select-XWhpf6Eu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-ArWdNQH1.js";import"./step-indicator-BvTe9s74.js";import"./summary-box-D0YY31pd.js";import"./tag-CkMOhSU3.js";import"./text-area-C1M1QosD.js";import"./time-picker-DufTLboP.js";import"./tooltip-Cm8FGCCc.js";import"./index-D_G_8yR1.js";import"./index-Bq7ANQAG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BSKCmYzr.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
