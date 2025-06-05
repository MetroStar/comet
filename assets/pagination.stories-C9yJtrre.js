import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-Blsptm9M.js";import{P as c}from"./table-fTenvi1n.js";import"./banner-B7Apwsuk.js";import"./button-C2kQbPIk.js";import"./button-group-D6SxZjVU.js";import"./checkbox-DQPYcpP8.js";import"./combo-box-F2PnqO_1.js";import"./date-picker-BmziOF2b.js";import"./error-messages-pdO9TZPZ.js";import"./index-B2ab-Ywl.js";import"./form-group-BaUR_0i1.js";import"./helper-text-BRA2CuHl.js";import"./icon-SBhAIKL8.js";import"./label-0qqEdO1f.js";import"./modal-GJNSD2-n.js";import"./process-list-BC0EMzAg.js";import"./radio-button-BcuJyogz.js";import"./range-slider-DDbzogCU.js";import"./search-wqOIJC1H.js";import"./select-b2X18XXl.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-C9ywfOHS.js";import"./step-indicator-CHiOK4-F.js";import"./summary-box-CCXrYgWm.js";import"./tag-CpTRhggk.js";import"./text-area-BMGWUP0L.js";import"./time-picker-BZrWXdtG.js";import"./tooltip-DEp1prqs.js";import"./index-B9SN90_d.js";import"./index-jkZDHRsK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-eO8zULeJ.js";import"./active-element-BuxAly_Z.js";const or={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
  const [currentPage1, setCurrentPage1] = useState(args.currentPage);
  const newProps = {
    ...args
  };
  newProps.currentPage = currentPage1;
  newProps.onPage = onPage(setCurrentPage1);
  return <Pagination {...newProps} />;
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,g,P;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(args: PaginationProps) => {
  const [currentPage1, setCurrentPage1] = useState(args.currentPage);
  const newProps = {
    ...args
  };
  newProps.currentPage = currentPage1;
  newProps.onPage = onPage(setCurrentPage1);
  return <Pagination {...newProps} />;
}`,...(P=(g=t.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const ar=["LargePagination","SmallPagination"];export{r as LargePagination,t as SmallPagination,ar as __namedExportsOrder,or as default};
