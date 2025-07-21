import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DIbYc2YD.js";import{P as i}from"./table-CNabwFd0.js";import"./banner-CEBngVBm.js";import"./button-BwDKLya9.js";import"./button-group-BejYm1FH.js";import"./checkbox-CQDMIMXT.js";import"./combo-box-C55i6zvi.js";import"./date-picker-CCa4mAhu.js";import"./error-messages-pdO9TZPZ.js";import"./index-ClE7f3XS.js";import"./form-group-BfLWRLjx.js";import"./helper-text-BRA2CuHl.js";import"./icon-tSldNKzR.js";import"./label-0qqEdO1f.js";import"./modal-shQVnoNU.js";import"./process-list-B6SN6S6H.js";import"./radio-button-sUS7D1P8.js";import"./range-slider-BF8zD3pc.js";import"./search-bRN4-ja6.js";import"./select-BWdstRoK.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CKar7Nja.js";import"./step-indicator-BF0nJBUs.js";import"./summary-box-jrcClhIx.js";import"./tag-1P0fxoyb.js";import"./text-area-gQuZ9eqj.js";import"./time-picker-Wna0e8Fn.js";import"./tooltip-C2T8JWOX.js";import"./index-D8FXGwiB.js";import"./index-BGU-z_Jn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BK1LKP5m.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
