import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-B06jSXrt.js";import{P as c}from"./table-CPLQIJoY.js";import"./banner-B4nKV3Ll.js";import"./button-BBvAJSMO.js";import"./button-group-DDJb27zj.js";import"./checkbox-O17lJUmj.js";import"./combo-box-nFgl5F-w.js";import"./date-picker-CU--G-rO.js";import"./error-messages-pdO9TZPZ.js";import"./index-9T3wglVZ.js";import"./form-group-KsPcPJ-m.js";import"./helper-text-BRA2CuHl.js";import"./icon-COhij1E4.js";import"./label-0qqEdO1f.js";import"./modal-Dz5BLLC5.js";import"./process-list-u1iPgytg.js";import"./radio-button-EaNfFk2s.js";import"./range-slider-Dg-hbCJI.js";import"./search-1NRC2m8S.js";import"./select-ihMLNsZY.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-B8_-X_8l.js";import"./step-indicator-D_NBEYws.js";import"./summary-box-B-5O_Dyk.js";import"./tag-CgP5Nd3K.js";import"./text-area-FB8jgPVl.js";import"./time-picker-Cj01wUAV.js";import"./tooltip-Db4olyCS.js";import"./index-UDWavsCa.js";import"./index-CsQ3J-J0.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Defkf7p8.js";import"./active-element-BuxAly_Z.js";const or={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
