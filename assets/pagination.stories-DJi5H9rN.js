import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BWSz9So8.js";import{P as i}from"./table-CvmPfSUC.js";import"./banner-BwEE1fCf.js";import"./button-DnGnzYJl.js";import"./button-group-LTdk4OWd.js";import"./checkbox-e4Y_ckhj.js";import"./combo-box-BaXlIVuK.js";import"./date-picker-DJdBt-9d.js";import"./error-messages-_lA7co94.js";import"./index-BVo_kvWB.js";import"./form-group-8jYj3Y7M.js";import"./helper-text-BRA2CuHl.js";import"./icon-BnuOR3E6.js";import"./label-0qqEdO1f.js";import"./modal-CyphDcoJ.js";import"./process-list-DC0p2f6t.js";import"./radio-button-RU0tDYN1.js";import"./range-slider-CsBLh5Zx.js";import"./search-Di5fDXID.js";import"./select-D7Qnylr_.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CY56Emxt.js";import"./step-indicator-22trubn0.js";import"./summary-box-CVwyDQy5.js";import"./tag-BET6tKi0.js";import"./text-area-DmXx35cn.js";import"./time-picker-CBInagW_.js";import"./tooltip-C_Y0L0LB.js";import"./index-K_UqQySj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_fBeR743.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BQL2wJBc.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
