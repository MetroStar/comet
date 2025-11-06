import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BiUBZBi9.js";import{P as i}from"./table-COi9ma6z.js";import"./banner-BY97cSax.js";import"./button-CqrPBp8K.js";import"./button-group-CdGkF7WG.js";import"./checkbox-3ChjEf2R.js";import"./combo-box-B6O4vxiK.js";import"./date-picker-Dd9Iw-ol.js";import"./error-messages-_lA7co94.js";import"./index-CE4Qbm93.js";import"./form-group-C2lFXs7K.js";import"./helper-text-BRA2CuHl.js";import"./icon-Eg7KUmam.js";import"./label-0qqEdO1f.js";import"./modal-ByL-yNd7.js";import"./process-list-oXo-lIyy.js";import"./radio-button-C6MUYnX_.js";import"./range-slider-BRFEcZKS.js";import"./search-B58zHbmN.js";import"./select-DOSbCKLB.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BuAtgi14.js";import"./step-indicator-D8MXlKv6.js";import"./summary-box-BxR4roeg.js";import"./tag-CWw6NOTz.js";import"./text-area-d4GYi33a.js";import"./time-picker-CU9bog2Y.js";import"./tooltip-ugUe3fuh.js";import"./index-Cd-en3Xw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L6niw3Vl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Br38tAj3.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
