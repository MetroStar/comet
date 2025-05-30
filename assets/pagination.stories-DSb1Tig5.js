import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-CNQjDBiW.js";import{P as c}from"./table-DZtP8PWu.js";import"./banner-Y7JJ7F_E.js";import"./button-DDDiAE0o.js";import"./button-group-Bx_yExq0.js";import"./checkbox-C3N8b2zz.js";import"./combo-box-DQNa3XQ5.js";import"./date-picker-D6Pu-Hnz.js";import"./error-messages-pdO9TZPZ.js";import"./index-Brx6gjw_.js";import"./form-group-GrStGolW.js";import"./helper-text-BRA2CuHl.js";import"./icon-CkhDFL3w.js";import"./label-0qqEdO1f.js";import"./modal-GIvoxKCk.js";import"./process-list-DHywp13W.js";import"./radio-button-BKDZ8P5Z.js";import"./range-slider-CWM1ZlGb.js";import"./search-r0Q9Qlq1.js";import"./select-fDINuUZh.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-joaYCMyf.js";import"./step-indicator-CU6AwB80.js";import"./summary-box-DXsc4lfT.js";import"./tag-CFMl3w4p.js";import"./text-area-CbszwPbS.js";import"./time-picker-BL7SagG9.js";import"./tooltip-ChqlAbbh.js";import"./index-Onnr2wha.js";import"./index-BRohADMv.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CQYQWriJ.js";import"./active-element-BuxAly_Z.js";const or={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
