import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DY9HBLoi.js";import{P as i}from"./table-CYmhWNEm.js";import"./banner-D2I3LpOl.js";import"./button-DfWJO5NC.js";import"./button-group-DekWdHfJ.js";import"./checkbox-Bm3o4vL2.js";import"./combo-box-BHD_tO2S.js";import"./date-picker-DdcJA1Y7.js";import"./error-messages-pdO9TZPZ.js";import"./index-BpWRmvKG.js";import"./form-group-wfwX5Iyy.js";import"./helper-text-BRA2CuHl.js";import"./icon-D_78rZ8u.js";import"./label-0qqEdO1f.js";import"./modal-iTvJGglD.js";import"./process-list-DVFfdVOe.js";import"./radio-button-BP_-j6a8.js";import"./range-slider-Lw04wRca.js";import"./search-DIBGS6Yh.js";import"./select-BOY6QlqM.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-OB1OtwWB.js";import"./step-indicator-QWvk8Pwa.js";import"./summary-box-CE8DF4gV.js";import"./tag-CTPMiUx4.js";import"./text-area-C0d-1XAJ.js";import"./time-picker-BbmV3cSI.js";import"./tooltip-DSLaw7yL.js";import"./index-rTA6sVZJ.js";import"./index-BDMt5_-6.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Bwk6v0GG.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
