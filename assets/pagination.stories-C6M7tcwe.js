import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-B0z_kBLT.js";import{P as c}from"./table-CCNQrNdW.js";import"./banner-TjY8ShwP.js";import"./button-DVNmTKt5.js";import"./button-group-CoIT59LX.js";import"./checkbox-E0ffnxV4.js";import"./combo-box-Ts3cyv4v.js";import"./date-picker-C4oHuyQp.js";import"./error-messages-pdO9TZPZ.js";import"./index-Du-4ew-N.js";import"./form-group-C28HIUm2.js";import"./helper-text-BRA2CuHl.js";import"./icon-7NiBfmOX.js";import"./label-0qqEdO1f.js";import"./modal-BPJigrVB.js";import"./process-list-B2zDoYTh.js";import"./radio-button-CwRM9fPx.js";import"./range-slider-BVWVbF-Y.js";import"./search-DQj-05zt.js";import"./select-BS8RArAf.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-LR6-TaNs.js";import"./step-indicator-BgCx9Ug1.js";import"./summary-box-DLDVA-7L.js";import"./tag-BMVn5z01.js";import"./text-area-DHJ4Ix-m.js";import"./time-picker-D_rmmC6_.js";import"./tooltip-Lq5j4ayc.js";import"./index-CcYHq6-n.js";import"./index-B2Mt268E.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BlYASoiO.js";import"./active-element-BuxAly_Z.js";const or={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
