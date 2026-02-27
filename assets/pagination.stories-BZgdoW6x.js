import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BHrdwcbC.js";import{P as i}from"./table-BDQM1Mh-.js";import"./banner-LSfpRy_K.js";import"./button-DJ5nAEG1.js";import"./button-group-Dcen566A.js";import"./checkbox-D0U7RwWN.js";import"./combo-box-BfgX98SM.js";import"./date-picker-Du1p9VUj.js";import"./error-messages-DQwxQ3pR.js";import"./index-BW9Wuonm.js";import"./form-group-HfvnDvlG.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DZo7BvZV.js";import"./label-Z58zP1tT.js";import"./modal-DYIQgugP.js";import"./process-list-ga9XxOBq.js";import"./radio-button-BGGtbapx.js";import"./range-slider-BFrngnN-.js";import"./search-on2kCCM2.js";import"./select-hFENQz29.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-H-QvbnQk.js";import"./step-indicator-HXg70ZdV.js";import"./summary-box-Dg97T2F4.js";import"./tag-z2XKQvMC.js";import"./text-area-Bmocz1Tg.js";import"./time-picker-jKhXTcgJ.js";import"./tooltip-BvAtgz7H.js";import"./index-BwwyfavA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DW3xBdI_.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BBlPgDhR.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
