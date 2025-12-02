import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-B0hIjtUu.js";import{P as i}from"./table-BVE92j7Y.js";import"./banner-DzZkBSl7.js";import"./button-CE7abiYA.js";import"./button-group-BrbB8tWM.js";import"./checkbox-BO3qrbWe.js";import"./combo-box-DSpel1I0.js";import"./date-picker-DnfiAagl.js";import"./error-messages-DQwxQ3pR.js";import"./index-DFLXBMl_.js";import"./form-group-BG3QBWOY.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BNRbLw1d.js";import"./label-Z58zP1tT.js";import"./modal-CTkWVRbb.js";import"./process-list-nPCUeE35.js";import"./radio-button-CfNv50JC.js";import"./range-slider-Dv7KAwgE.js";import"./search-BxPVF8-1.js";import"./select-ClGZrASO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DSCRVd9o.js";import"./step-indicator-OiSvWuYN.js";import"./summary-box-DfkEA6A5.js";import"./tag-gzpwfcFc.js";import"./text-area-GvWAvMOP.js";import"./time-picker-CNu7S1ey.js";import"./tooltip-wvfn-vUQ.js";import"./index-Ce1QA_hM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiDsKGxm.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DAMhbk1n.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'pagination-1',
    currentPage: 9,
    amountOfPages: 24,
    ariaLabel: 'Pagination 1',
    amountOfVisiblePageItems: 3
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const newProps = {
      ...args
    };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);
    return <Pagination {...newProps} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'pagination-2',
    currentPage: 2,
    amountOfPages: 5,
    ariaLabel: 'Pagination 2',
    amountOfVisiblePageItems: 1
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const newProps = {
      ...args
    };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);
    return <Pagination {...newProps} />;
  }
}`,...o.parameters?.docs?.source}}};const Z=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Z as __namedExportsOrder,Y as default};
