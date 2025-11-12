import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DLzeRc9X.js";import{P as i}from"./table--dTJ_LlN.js";import"./banner-DdeTFA5m.js";import"./button-DZcatjI3.js";import"./button-group-CIDeXJwb.js";import"./checkbox-CPEjjsvs.js";import"./combo-box-CuLm5IF7.js";import"./date-picker-due9hnL1.js";import"./error-messages-DQwxQ3pR.js";import"./index-0pD0Rfof.js";import"./form-group-B_GsfbZZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-Cwt70qU2.js";import"./label-Z58zP1tT.js";import"./modal-CR2VGK_Z.js";import"./process-list-Hq8KfT0t.js";import"./radio-button-QrmP5zSj.js";import"./range-slider-B7ThKR_I.js";import"./search-iaPpQ-jF.js";import"./select-DouUKTqO.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BFT9GY45.js";import"./step-indicator-IM_qMCyO.js";import"./summary-box-DfJ7OwM5.js";import"./tag-BpxbKPsG.js";import"./text-area-Dh5yMKcm.js";import"./time-picker-B_vT5Vzq.js";import"./tooltip-yNuiRydh.js";import"./index-BWc2KjT0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNkV8ViH.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CvKfrh-m.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
