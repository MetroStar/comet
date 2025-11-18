import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-nl7dBz9Z.js";import{P as i}from"./table-hzsZ3yNS.js";import"./banner-DkIwXkOU.js";import"./button-Dk8wHbcB.js";import"./button-group-BTjygAXg.js";import"./checkbox-NisSa0r1.js";import"./combo-box-CFVhT9gX.js";import"./date-picker-CmknYkJM.js";import"./error-messages-DQwxQ3pR.js";import"./index-9j484q7r.js";import"./form-group-_DXArboa.js";import"./helper-text-C5i0f8Ge.js";import"./icon-5iiv7Ua4.js";import"./label-Z58zP1tT.js";import"./modal-m0qzC8Um.js";import"./process-list-DN565JV4.js";import"./radio-button-Dw7Gb0xo.js";import"./range-slider-DwIDWau-.js";import"./search-CJEmPhN0.js";import"./select-DBGTIg3Z.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CocnM4md.js";import"./step-indicator-_QX7SUDc.js";import"./summary-box-gIEos8kd.js";import"./tag-B-gIfjeS.js";import"./text-area-CXDLVR1_.js";import"./time-picker-B1YLTgxm.js";import"./tooltip-_J1saDjG.js";import"./index-D55o9aet.js";import"./preload-helper-PPVm8Dsz.js";import"./index-j-nxxJDD.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B3nRdOI3.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
