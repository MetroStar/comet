import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DrYRFDkq.js";import{P as i}from"./table-CX_3fU8G.js";import"./banner-BX1AEE79.js";import"./button-BRZIQbIO.js";import"./button-group-DhizJLA4.js";import"./checkbox-DIx_kXh1.js";import"./combo-box-DC_XAVf9.js";import"./date-picker-BgdkMevD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BEJPuihF.js";import"./form-group-1FQ6ZL-b.js";import"./helper-text-C5i0f8Ge.js";import"./icon-IlFqEd48.js";import"./label-Z58zP1tT.js";import"./modal-aFbxMgIk.js";import"./process-list-CQ1coxJ7.js";import"./radio-button-GUxkA6VJ.js";import"./range-slider-BXYo9qBg.js";import"./search-BDj3JnRH.js";import"./select-B3omePZx.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-B_dSrAsx.js";import"./step-indicator-BD3Ashid.js";import"./summary-box-Dcai1aDP.js";import"./tag-CAOLYjFJ.js";import"./text-area-jjmMtOfo.js";import"./time-picker-BooG6I3G.js";import"./tooltip-DqvkubAg.js";import"./index-Dt1OuEIl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BktZxXXP.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJeDAx_i.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
