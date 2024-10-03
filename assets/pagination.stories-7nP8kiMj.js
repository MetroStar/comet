import{j as d}from"./jsx-runtime-Bxcv0yjW.js";import{r as l}from"./index-mfbfsM12.js";import{P as c}from"./table-DcV1Ge7v.js";import"./banner-C3OBBKoY.js";import"./button-Dij490EH.js";import"./button-group-Jm6xw3dW.js";import"./checkbox-BRLoFrPj.js";import"./combo-box-CaHJcC0K.js";import"./date-picker-5JzpPrul.js";import"./error-messages-B09LlTSG.js";import"./index-BuiJXcB1.js";import"./form-group-BYOOw0zj.js";import"./helper-text-BGGx8P4c.js";import"./icon-DFsnYnhx.js";import"./label-aifmuN2d.js";import"./modal-CVE53OII.js";import"./process-list-CA9hh0io.js";import"./radio-button-CDY2eEGq.js";import"./range-slider-BZcG2zVs.js";import"./search-DIodcva8.js";import"./select-CoQFGJXr.js";import"./side-navigation-C1wTXBlT.js";import"./site-alert-BiYBHMCS.js";import"./step-indicator-D90w7VfJ.js";import"./summary-box-BROm9rVe.js";import"./tag-Dg5v4hiQ.js";import"./text-area-BhYGyMaq.js";import"./time-picker-C62R3ZiQ.js";import"./tooltip-aEOz7tM1.js";import"./index-CVDpGf7L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./index-BPeBj1-_.js";import"./config-BXli1stc.js";import"./is-in-viewport-B5ZZJcwh.js";import"./events-C6LRLXdn.js";import"./select-or-matches-BLLALKpn.js";import"./sprite-Cw9lcZJJ.js";import"./sanitizer-BtXph-xc.js";import"./index-7bNEBEAI.js";import"./active-element-CTMAq7ve.js";const ar={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
}`,...(P=(g=t.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const nr=["LargePagination","SmallPagination"];export{r as LargePagination,t as SmallPagination,nr as __namedExportsOrder,ar as default};
