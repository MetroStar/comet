import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-D6g7oyBT.js";import{P as i}from"./table-B2o3L5ZV.js";import"./banner-T9UCSkUS.js";import"./button-CGO10ZW3.js";import"./button-group-CLEDvRIf.js";import"./checkbox-DjsJa_hv.js";import"./combo-box-BafjISi3.js";import"./date-picker-CBzsr4eS.js";import"./error-messages-DQwxQ3pR.js";import"./index-D15vhobV.js";import"./form-group-BobNIxMO.js";import"./helper-text-C5i0f8Ge.js";import"./icon-BhI-VD6M.js";import"./label-Z58zP1tT.js";import"./modal-Nt6vEbzp.js";import"./process-list-D4WiINi_.js";import"./radio-button-CaaqLWeq.js";import"./range-slider-Biv5tL1q.js";import"./search-i0MjTWlB.js";import"./select-DqWfVKLa.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-RxrWG83b.js";import"./step-indicator-B5xlPv5_.js";import"./summary-box-D6p7Ly2b.js";import"./tag-D_TXvely.js";import"./text-area-sCCd6OhD.js";import"./time-picker-NspqPdtx.js";import"./tooltip-DZqvoc_b.js";import"./index-CfGYGdnL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSW12edA.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CygnMxBv.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
