import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DPE7MYZp.js";import{P as i}from"./table-B6OBZokY.js";import"./banner-Cp6CDsju.js";import"./button-CvBQ6Viu.js";import"./button-group-DT0MZYrc.js";import"./checkbox-BBNcEMVN.js";import"./combo-box-CPB8WVB1.js";import"./date-picker-CrR9zuUM.js";import"./error-messages-DQwxQ3pR.js";import"./index-S1EC9aY5.js";import"./form-group-C7OpfHVI.js";import"./helper-text-C5i0f8Ge.js";import"./icon-n5MNutTh.js";import"./label-Z58zP1tT.js";import"./modal-qxex8s-5.js";import"./process-list-_br4BDud.js";import"./radio-button-Bl1ELBoa.js";import"./range-slider-VCYG_aBg.js";import"./search-D3zv8uYS.js";import"./select-3ZPcC7oD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-MPwN2Qjg.js";import"./step-indicator-C-aqlDqc.js";import"./summary-box-D-cFSNJC.js";import"./tag-ChjVmO5T.js";import"./text-area-DXK22P_c.js";import"./time-picker-BqCyy_JL.js";import"./tooltip-obxolWCE.js";import"./index-SCBz9OJi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQggcgWB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B0FZfZup.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
