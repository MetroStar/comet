import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CBeyx4WF.js";import{P as i}from"./table-Bar13plf.js";import"./banner-DbFUAhNG.js";import"./button-ffGbt_Ww.js";import"./button-group-BaU0kfnO.js";import"./checkbox-BZKoH8WH.js";import"./combo-box-DN8WGebT.js";import"./date-picker-UahoSx6W.js";import"./error-messages-DQwxQ3pR.js";import"./index-CcVn3sHa.js";import"./form-group-CS7jclOy.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CSGERsm9.js";import"./label-Z58zP1tT.js";import"./modal-B6MEUZgO.js";import"./process-list-C1-6C-U2.js";import"./radio-button-D0M8jQtJ.js";import"./range-slider-CzZDIB_7.js";import"./search-BYXCCPZR.js";import"./select-DhAAD6zD.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CjKb598A.js";import"./step-indicator-BLj_ZoPZ.js";import"./summary-box-CKMaVeZ4.js";import"./tag-BOa7e9QQ.js";import"./text-area-Bl1HSWIL.js";import"./time-picker-BROe3EpJ.js";import"./tooltip-ZrQjdNc3.js";import"./index-CiqF2SW8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uAYjUUGB.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-aiAaYu5C.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
