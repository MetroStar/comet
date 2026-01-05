import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BWsQfN69.js";import{P as i}from"./table-CSaK-x_V.js";import"./banner-BxYGXyna.js";import"./button-GJ2BfbS-.js";import"./button-group-LFVyA_Fj.js";import"./checkbox-CdQ19bvs.js";import"./combo-box-CR-5V3Ia.js";import"./date-picker-DkK0_rB_.js";import"./error-messages-DQwxQ3pR.js";import"./index-oYevnVru.js";import"./form-group-ij1d4Lar.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DgbwmsD7.js";import"./label-Z58zP1tT.js";import"./modal-CgDi7N4S.js";import"./process-list-CodrIgEm.js";import"./radio-button-CX8ESqGR.js";import"./range-slider-fSM1VMq-.js";import"./search-Cojt-1JY.js";import"./select-B2E_eMP0.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-D6b4wbVc.js";import"./step-indicator-BF9Xj5dC.js";import"./summary-box-DopPB8AA.js";import"./tag-CaZv0Xjc.js";import"./text-area-BDP9Xbyw.js";import"./time-picker-Qm8rb22s.js";import"./tooltip-Zvlq8EIV.js";import"./index-q8yHh5aR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfnSD9B1.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-o16bkFsK.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
