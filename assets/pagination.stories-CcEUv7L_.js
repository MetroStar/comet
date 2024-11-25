import{j as d}from"./jsx-runtime-DPda6Ybg.js";import{r as l}from"./index-DhrokLn_.js";import{P as c}from"./table-D5S4RZU6.js";import"./banner-DCaJRUn6.js";import"./button-BF8YY7tL.js";import"./button-group-COrkmNtR.js";import"./checkbox-Cd8NtStn.js";import"./combo-box-D1gd0ZTz.js";import"./date-picker-DuzZabgW.js";import"./error-messages-BtGU3DT8.js";import"./index-CzvC9lYh.js";import"./form-group-xsfonisk.js";import"./helper-text-B_e6CW13.js";import"./icon-IJEJKwh6.js";import"./label-BcV181Ee.js";import"./modal-Db4067mq.js";import"./process-list-Bt090oHO.js";import"./radio-button-BGLOFIKA.js";import"./range-slider-CBdcLky-.js";import"./search-BX_NGFF2.js";import"./select-BSDXGm39.js";import"./side-navigation-Bhmmua-H.js";import"./site-alert-CL7H2pqO.js";import"./step-indicator-Qd_G2ZNa.js";import"./summary-box-05qKTCUx.js";import"./tag-Bwb1sPu4.js";import"./text-area-Bj6JkRlB.js";import"./time-picker-BWR9YJ20.js";import"./tooltip-CPbj5umw.js";import"./index-DTujk8nr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-a0hvGR0d.js";import"./config-BpWtFwiV.js";import"./is-in-viewport-B5ZZJcwh.js";import"./events-C6LRLXdn.js";import"./select-or-matches-C9E_1WAJ.js";import"./sanitizer-BtXph-xc.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7_m26zB.js";import"./active-element-CTMAq7ve.js";const ar={title:"USWDS/Pagination",component:c,argTypes:{id:{required:!0}}},f=e=>(o,a)=>{o.preventDefault(),e(a)},u=e=>{const[o,a]=l.useState(e.currentPage),n={...e};return n.currentPage=o,n.onPage=f(a),d.jsx(c,{...n})},r=u.bind({});r.args={id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3};const t=u.bind({});t.args={id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: PaginationProps) => {
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
