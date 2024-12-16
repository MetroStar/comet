import{j as d}from"./jsx-runtime-BjgbQsUx.js";import{r as l}from"./index-DDT2H6na.js";import{P as c}from"./table-6l5YBCtH.js";import"./banner-Dheu0Y1C.js";import"./button-Dc9m3WUq.js";import"./button-group-BmlUvBcA.js";import"./checkbox-p9BQCb34.js";import"./combo-box-BN6vvru3.js";import"./date-picker-Cer0hSHi.js";import"./error-messages-9EHEOSno.js";import"./index-BllMWJqc.js";import"./form-group-CsH8EhgF.js";import"./helper-text-CvsfwBJV.js";import"./icon-BHWurEyT.js";import"./label-Cm37mQmh.js";import"./modal-BsyfNARE.js";import"./process-list-Djj0IDFY.js";import"./radio-button-BFoI3scR.js";import"./range-slider-x_RP9ET-.js";import"./search-C8b_qcG2.js";import"./select-Dj6TyvHu.js";import"./side-navigation-BOOTbG8P.js";import"./site-alert-BSE1Mwml.js";import"./step-indicator-D9rdBPax.js";import"./summary-box-lJlgPCIg.js";import"./tag-CeVjYVBv.js";import"./text-area-CKO3fHqq.js";import"./time-picker-rf2kBXRQ.js";import"./tooltip-eIpy4DRV.js";import"./index-B10PtKfh.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DFtWylL1.js";import"./config-jVN7-cmM.js";import"./select-or-matches-Ry_FXvm3.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-ULqyV3G8.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BKt2X7Zg.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
}`,...(P=(g=t.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const ir=["LargePagination","SmallPagination"];export{r as LargePagination,t as SmallPagination,ir as __namedExportsOrder,nr as default};
