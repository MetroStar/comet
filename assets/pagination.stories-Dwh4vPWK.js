import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BgIKpn1G.js";import{P as i}from"./table-DmnWc49K.js";import"./banner-BP3RSBZP.js";import"./button-DsiOr2cT.js";import"./button-group-DlwPHipu.js";import"./checkbox-CZe1xIAL.js";import"./combo-box-Cll_0ZQK.js";import"./date-picker-wskArRME.js";import"./error-messages-pdO9TZPZ.js";import"./index-D28TiiAF.js";import"./form-group-D7kfFAyU.js";import"./helper-text-BRA2CuHl.js";import"./icon-BRc0tjCA.js";import"./label-0qqEdO1f.js";import"./modal-MJ6CK7kF.js";import"./process-list-HxcLYqgQ.js";import"./radio-button-BE5o4tlm.js";import"./range-slider-Rbh1Ljww.js";import"./search-R6PZy4kO.js";import"./select-DZ1JcbOA.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CU9wbwsH.js";import"./step-indicator-DibkEOlM.js";import"./summary-box-BO38J_sj.js";import"./tag-OaQnEd8D.js";import"./text-area-DpJAHCY1.js";import"./time-picker-DxtrzA9L.js";import"./tooltip-D-S07_Hb.js";import"./index-7mWhv16U.js";import"./index-wzabiPIr.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cf0-XlqG.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
