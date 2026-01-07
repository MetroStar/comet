import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DAElSkcd.js";import{P as i}from"./table-D8h51JS1.js";import"./banner-DCDmr0G8.js";import"./button-ijgBrMFA.js";import"./button-group-B0UmdrOD.js";import"./checkbox-C11XdatN.js";import"./combo-box-ByBwJrwY.js";import"./date-picker-yq7UOVP1.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW_M1et5.js";import"./form-group-D1HeFVB2.js";import"./helper-text-C5i0f8Ge.js";import"./icon-D34rc_xL.js";import"./label-Z58zP1tT.js";import"./modal-QVZYOgd8.js";import"./process-list-BuU7wWlY.js";import"./radio-button-DyalhMhA.js";import"./range-slider-C1FbPf95.js";import"./search-D1Ve7K6E.js";import"./select-D496jgZF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CHUyH9R-.js";import"./step-indicator-A5ivSDeW.js";import"./summary-box-CXscmp-j.js";import"./tag-BqbH648p.js";import"./text-area-CsLFuSaj.js";import"./time-picker-CpqDNJ7b.js";import"./tooltip-DPDnsQ2S.js";import"./index-Bb_jRSga.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpyczfRn.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CD1kXvG_.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
