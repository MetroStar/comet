import{j as d}from"./jsx-runtime-Bxcv0yjW.js";import{r as l}from"./index-mfbfsM12.js";import{P as c}from"./index-BCQaWVi3.js";import"./banner-BJhXbo0G.js";import"./button-Dij490EH.js";import"./button-group-Jm6xw3dW.js";import"./checkbox-BRLoFrPj.js";import"./combo-box-Cs1_GVyP.js";import"./date-picker-rpMrcJii.js";import"./error-messages-B09LlTSG.js";import"./file-input-B2bc0OZ7.js";import"./form-group-BYOOw0zj.js";import"./helper-text-BGGx8P4c.js";import"./icon-DWyr-zyo.js";import"./label-aifmuN2d.js";import"./modal-OPWcKFuw.js";import"./process-list-CA9hh0io.js";import"./radio-button-CDY2eEGq.js";import"./range-slider-BZcG2zVs.js";import"./search-DIodcva8.js";import"./select-CoQFGJXr.js";import"./side-navigation-C1wTXBlT.js";import"./site-alert-BiYBHMCS.js";import"./step-indicator-DL-d1Rw4.js";import"./summary-box-BROm9rVe.js";import"./tag-Dg5v4hiQ.js";import"./text-area-BhYGyMaq.js";import"./time-picker-CsCiJDbW.js";import"./tooltip-DTI4gMmd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./config-BXli1stc.js";import"./select-or-matches-Bu-g4rUn.js";import"./sprite-Cw9lcZJJ.js";import"./events-C6LRLXdn.js";import"./sanitizer-BtXph-xc.js";import"./index-D6IA0wpC.js";import"./is-in-viewport-B5ZZJcwh.js";import"./index-kNK2ZonT.js";import"./active-element-CTMAq7ve.js";const or={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
