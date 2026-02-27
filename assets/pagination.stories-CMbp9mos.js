import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BTdRfY9k.js";import{P as i}from"./table-JRy8o7uW.js";import"./banner-CQ3xCBuG.js";import"./button-Ba7xgwez.js";import"./button-group-B3gTHZWA.js";import"./checkbox-CLvsLWaM.js";import"./combo-box-Co7v8Gdu.js";import"./date-picker-mWD4hatY.js";import"./error-messages-DQwxQ3pR.js";import"./index-Ba-_iRH5.js";import"./form-group-DaNJz7RT.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZ8toPDV.js";import"./label-Z58zP1tT.js";import"./modal-u2tm0lfe.js";import"./process-list-nskObF0o.js";import"./radio-button-BqGmz9gl.js";import"./range-slider-zqNchBAK.js";import"./search-DMPs4SjR.js";import"./select-Cd16SEf0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B22i4OXT.js";import"./step-indicator-DQdWZbZs.js";import"./summary-box-BQaBbU0N.js";import"./tag-CRQC5syz.js";import"./text-area-jBrudwtx.js";import"./time-picker-Bt-xFGpB.js";import"./tooltip-CJQbMQMO.js";import"./index-BNIzpdMi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGx-jJq7.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cz8WPAN8.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
