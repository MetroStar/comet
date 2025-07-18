import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BFMRay5H.js";import{P as i}from"./table-Blb5rANT.js";import"./banner-BmlVZfk-.js";import"./button-BlUJB2sM.js";import"./button-group-BHc2I0ck.js";import"./checkbox-BQcjfNYw.js";import"./combo-box-gL_IiNty.js";import"./date-picker-BwTl6U0J.js";import"./error-messages-pdO9TZPZ.js";import"./index-D74N8FgS.js";import"./form-group-CD5U6nVC.js";import"./helper-text-BRA2CuHl.js";import"./icon-DOsYgSUJ.js";import"./label-0qqEdO1f.js";import"./modal-BRGNl0UW.js";import"./process-list-DGj5Msej.js";import"./radio-button-BrM805MA.js";import"./range-slider-DQzdPj_1.js";import"./search-C2kLE4Gz.js";import"./select-R1OqwzSb.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BiAvvMNa.js";import"./step-indicator-BXmtocNy.js";import"./summary-box--HKkVsMN.js";import"./tag-NNoaLxc4.js";import"./text-area-BOazg4ul.js";import"./time-picker-TSzaulpH.js";import"./tooltip-CtABBABA.js";import"./index-C_wObpry.js";import"./index-DDDrMwO6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bm14qNHe.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,P,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(P=o.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};const tr=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,tr as __namedExportsOrder,nr as default};
