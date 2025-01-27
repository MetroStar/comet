import{j as d}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-D7xSkP6m.js";import{P as c}from"./table-DyCHxz1V.js";import"./banner-C4UUz6yC.js";import"./button-lXZ9EEgl.js";import"./button-group-DfEF9I7-.js";import"./checkbox-C_UJYIYS.js";import"./combo-box-BJIAMHTU.js";import"./date-picker-DgOn0wN-.js";import"./error-messages-BWeax-Kj.js";import"./index-CNmeIYsO.js";import"./form-group-Bu8kLN8Y.js";import"./helper-text-BmhHZMwR.js";import"./icon-CI_QTC7o.js";import"./label-BvRQRArz.js";import"./modal-BmJpwfRh.js";import"./process-list-C40Zpa_8.js";import"./radio-button-kqPTm1v1.js";import"./range-slider-CcnhuTdI.js";import"./search-DElZUyW_.js";import"./select-BU_Z1_VN.js";import"./side-navigation-DinQtbKC.js";import"./site-alert-2OQ5RSaS.js";import"./step-indicator-Dugk_wpx.js";import"./summary-box-BjmG18Sb.js";import"./tag-QqKs67IJ.js";import"./text-area-BjhCSdHX.js";import"./time-picker-X66lcLNk.js";import"./tooltip-ee6nW_ea.js";import"./index-B10PtKfh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DFtWylL1.js";import"./config-jVN7-cmM.js";import"./select-or-matches-Ry_FXvm3.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-ULqyV3G8.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BKt2X7Zg.js";import"./active-element-BuxAly_Z.js";const ar={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
