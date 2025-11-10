import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Bwmg5-4I.js";import{P as i}from"./table-DBM-rGfp.js";import"./banner-DIDB5AZZ.js";import"./button-CuJ08vmO.js";import"./button-group-D-MjqxLe.js";import"./checkbox-BxmFBsme.js";import"./combo-box-DUHBtXaj.js";import"./date-picker-BCezd6Bu.js";import"./error-messages-DQwxQ3pR.js";import"./index-aT39rhBA.js";import"./form-group-CvVwrbvR.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CB1t2izj.js";import"./label-Z58zP1tT.js";import"./modal-D_ak00hh.js";import"./process-list-CjLrlXdK.js";import"./radio-button-Dk1l3M4e.js";import"./range-slider-ud6TP_Wq.js";import"./search-Bo9VOzvv.js";import"./select-YaEncsiE.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-C1_MfARb.js";import"./step-indicator-BLKVxSQA.js";import"./summary-box-fglBdzAE.js";import"./tag-B1iarCZg.js";import"./text-area-SV8dYrCz.js";import"./time-picker-D6V8Wd0x.js";import"./tooltip-d8p4Ljze.js";import"./index-DO_WIL-g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsph7FLZ.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-XxeCWWQm.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
