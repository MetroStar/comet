import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-OQEP8bq4.js";import{P as i}from"./table-Dmb-ffh0.js";import"./banner-DZNvfklf.js";import"./button-DzGNrXYT.js";import"./button-group-Zzh5VRIu.js";import"./checkbox-LlIZ6WAZ.js";import"./combo-box-Bv6VcdXU.js";import"./date-picker-CqoH8LeI.js";import"./error-messages-DQwxQ3pR.js";import"./index-52vSm_bk.js";import"./form-group-DhnpQ1gO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-4RfGqqIJ.js";import"./label-Z58zP1tT.js";import"./modal-DwhLWDUa.js";import"./process-list-DGxHCMjD.js";import"./radio-button-gMU8aMNI.js";import"./range-slider-Dq4GAh67.js";import"./search-B2MV1myA.js";import"./select-BjUKF4It.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-DV2fzf3r.js";import"./step-indicator-DdaAIm1x.js";import"./summary-box-CoPcq3HL.js";import"./tag-B4n4yz8K.js";import"./text-area-ClvojZeY.js";import"./time-picker-G362YD_L.js";import"./tooltip-Dq6tjxuf.js";import"./index-oUbQcmvJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYS2UhCj.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DC7B1Qf2.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
