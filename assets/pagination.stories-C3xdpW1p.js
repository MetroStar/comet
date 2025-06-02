import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-DGHArgJO.js";import{P as c}from"./table-BgJRHwgd.js";import"./banner-D44RDCa6.js";import"./button-CmQiXBCL.js";import"./button-group-CcJGRXhz.js";import"./checkbox-D2z6ybSw.js";import"./combo-box-C6y_HcZ0.js";import"./date-picker-B1XY3L9C.js";import"./error-messages-pdO9TZPZ.js";import"./index-DecsTZxz.js";import"./form-group-B8SfswI0.js";import"./helper-text-BRA2CuHl.js";import"./icon-BbMv88DW.js";import"./label-0qqEdO1f.js";import"./modal-DKP8gnHv.js";import"./process-list-2bfgjVe7.js";import"./radio-button-aIa52GO8.js";import"./range-slider-gJJjeEhr.js";import"./search-BJT-p6La.js";import"./select-ekXRPwHS.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DzeFepEJ.js";import"./step-indicator-Dd0Qvd0h.js";import"./summary-box-BaVZEZND.js";import"./tag-D3FfIG8L.js";import"./text-area-BX3MCFwo.js";import"./time-picker-OJP_-aQf.js";import"./tooltip-tfodXPAG.js";import"./index-BCLu61py.js";import"./index-CiJQEFXw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4TndA0W.js";import"./active-element-BuxAly_Z.js";const or={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
