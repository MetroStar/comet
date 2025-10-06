import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-jnbR5XB0.js";import{P as i}from"./table-do3Wtiuz.js";import"./banner-C69xj6up.js";import"./button-BjwnDlUa.js";import"./button-group-DaZ29ND5.js";import"./checkbox-OyR24-QB.js";import"./combo-box-D4Ec50_t.js";import"./date-picker-C24u14Kt.js";import"./error-messages-_lA7co94.js";import"./index-DB5TIisB.js";import"./form-group-CWTBhvs3.js";import"./helper-text-BRA2CuHl.js";import"./icon-Ds9U5QK2.js";import"./label-0qqEdO1f.js";import"./modal-BdgCaLBt.js";import"./process-list-C_Gbba5Q.js";import"./radio-button-BNUbyZkN.js";import"./range-slider-dvvIi5fH.js";import"./search-Ca-ELIx0.js";import"./select-nGKBp-EG.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BWuugDej.js";import"./step-indicator-ClF7nu7D.js";import"./summary-box-CQ7ma9q9.js";import"./tag-C7eGu5si.js";import"./text-area-DldIq14N.js";import"./time-picker-BTP0M3i1.js";import"./tooltip-0tlrOCcc.js";import"./index-CsUVYJI9.js";import"./index-yAIAkIfa.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-KEPVNFbW.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
