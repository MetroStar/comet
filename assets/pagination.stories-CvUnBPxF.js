import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-u1rK465H.js";import{P as i}from"./table-DLVQfNEK.js";import"./banner-DyQAgApN.js";import"./button-BXqyO3L3.js";import"./button-group-ksHkBbPj.js";import"./checkbox-CG93fIg_.js";import"./combo-box-Dw716zwh.js";import"./date-picker-Cbrlz2N3.js";import"./error-messages-DQwxQ3pR.js";import"./index-cm5JWLhR.js";import"./form-group-wymoTdrb.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CHlGeBd8.js";import"./label-Z58zP1tT.js";import"./modal-nbn3cjTG.js";import"./process-list-DDsIXP2y.js";import"./radio-button-D3C-_jtH.js";import"./range-slider-CX1O6KiW.js";import"./search-0vzl5eJD.js";import"./select-DwK2wipF.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CkTX5cWS.js";import"./step-indicator-PHVEZmUf.js";import"./summary-box-rpKWzcmi.js";import"./tag-BaXE9Fwc.js";import"./text-area-CPIHjsdo.js";import"./time-picker-BjWpsv0Q.js";import"./tooltip-Ck9scKOs.js";import"./index-CeC9og-I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RV7t3OPq.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CiZW3QX2.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
