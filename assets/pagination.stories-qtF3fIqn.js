import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-y5ok3I9y.js";import{P as i}from"./table-Hzj3yCl4.js";import"./banner-BM68dEEY.js";import"./button-CAdIHhr5.js";import"./button-group-B9dZJN23.js";import"./checkbox-CyHFcZFX.js";import"./combo-box-CtcodrSH.js";import"./date-picker-D-9P-Y26.js";import"./error-messages-DQwxQ3pR.js";import"./index-CVEhI-RK.js";import"./form-group-xZ43lr12.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CIOfJG2o.js";import"./label-Z58zP1tT.js";import"./modal-DmgRvfLd.js";import"./process-list-B5mxUUsY.js";import"./radio-button-BjMGGsE7.js";import"./range-slider-DC0X_owM.js";import"./search-BGfPHDPn.js";import"./select-DkyaY8B2.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DVYJRvZP.js";import"./step-indicator-DBhmaTHM.js";import"./summary-box-Bfah1ntm.js";import"./tag-BfPPkP3z.js";import"./text-area-DGQ6Eimz.js";import"./time-picker-DDH8YCye.js";import"./tooltip-BgKzB3lI.js";import"./index-B1cA9pBl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhulT-dX.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DMAFzJVB.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
