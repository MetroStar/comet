import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BZfy-MOI.js";import{P as i}from"./table-CzoVEYc_.js";import"./banner-DW0yElUw.js";import"./button-bZ5Mp_AU.js";import"./button-group-D0lWyXML.js";import"./checkbox-3CDfTcVY.js";import"./combo-box-AJ0FExB2.js";import"./date-picker-DKItmH8g.js";import"./error-messages-DQwxQ3pR.js";import"./index-DHHCfnS1.js";import"./form-group-B8g8yeM1.js";import"./helper-text-C5i0f8Ge.js";import"./icon-C3FchpV-.js";import"./label-Z58zP1tT.js";import"./modal-Brj4-T_g.js";import"./process-list-Cc3I22IW.js";import"./radio-button-5YXeP0HL.js";import"./range-slider-DIrxMbkG.js";import"./search-ePFsEUvt.js";import"./select-DJU_fcta.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-0hF62P37.js";import"./step-indicator-Bk8eT84t.js";import"./summary-box-B38BLNY4.js";import"./tag-CLDP7JT-.js";import"./text-area-C2UJ0jwX.js";import"./time-picker-CotNdUu4.js";import"./tooltip-BVlyVB0A.js";import"./index-BBTpoaCK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHvMlG60.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4iV9IVu.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
