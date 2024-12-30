import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CtQTiInQ.js";import{P as c}from"./table-BoEcTNev.js";import"./banner-Cuy6noJA.js";import"./button-Dm1_l2A6.js";import"./button-group-DOZ7UenR.js";import"./checkbox-BLEQDmtl.js";import"./combo-box-5Rx_uymY.js";import"./date-picker-ZXow5Mfh.js";import"./error-messages-pdO9TZPZ.js";import"./index-BmurJjsg.js";import"./form-group-UbmrzRll.js";import"./helper-text-BRA2CuHl.js";import"./icon-pvaEpIlu.js";import"./label-0qqEdO1f.js";import"./modal-LRZ-UrIF.js";import"./process-list-Pz6IPbuU.js";import"./radio-button-CUJwNgMg.js";import"./range-slider-Bbbvn1wX.js";import"./search-CE52QaNp.js";import"./select-CVn8tXr4.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-CCZ1TQ-s.js";import"./step-indicator-DPFyZAVU.js";import"./summary-box-BkOMGyh9.js";import"./tag-BL9-siXW.js";import"./text-area-BGyTDX6p.js";import"./time-picker-DwO2ANI-.js";import"./tooltip-Cos_tUrW.js";import"./index-B10PtKfh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DFtWylL1.js";import"./config-jVN7-cmM.js";import"./select-or-matches-Ry_FXvm3.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-ULqyV3G8.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BKt2X7Zg.js";import"./active-element-BuxAly_Z.js";const ar={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
