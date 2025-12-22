import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BZXS5M1A.js";import{P as i}from"./table-CXEDt_IX.js";import"./banner-DD5k-zia.js";import"./button-iFbrQHz5.js";import"./button-group-DmlLR6Ch.js";import"./checkbox-D5awqogb.js";import"./combo-box-faxTxgNA.js";import"./date-picker-e0prf2AC.js";import"./error-messages-DQwxQ3pR.js";import"./index-BFbCUD2X.js";import"./form-group-WXs29FIM.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BHDT1NP-.js";import"./label-Z58zP1tT.js";import"./modal-D14ptv-N.js";import"./process-list-2VbCpAnh.js";import"./radio-button-Dk8Mk2UZ.js";import"./range-slider-cFlpjLRU.js";import"./search-CP0HC-Ul.js";import"./select-CMdnoFND.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BARPFDdc.js";import"./step-indicator-3EBTDo0B.js";import"./summary-box-DAOtTa8X.js";import"./tag-C8SuK6DB.js";import"./text-area-CTybm8Is.js";import"./time-picker-CcsjNbhV.js";import"./tooltip-bk-dUcpD.js";import"./index-BMYzY_Pu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWwuGuar.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxdN8t19.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
