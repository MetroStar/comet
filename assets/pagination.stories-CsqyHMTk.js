import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-B31pvYvh.js";import{P as i}from"./table-BcAjHaPe.js";import"./banner-Bb9tgDMu.js";import"./button-DHPf3ZSy.js";import"./button-group-DXkD3Odw.js";import"./checkbox-CWxi48TQ.js";import"./combo-box-BgWuh_WY.js";import"./date-picker-CY9wn-JD.js";import"./error-messages-DQwxQ3pR.js";import"./index-BeU7Me-t.js";import"./form-group-030VDF0V.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CtOfy-k_.js";import"./label-Z58zP1tT.js";import"./modal-D415_Ju7.js";import"./process-list-B5_A_qL3.js";import"./radio-button-iLLUIu9s.js";import"./range-slider-B-Hf8WYx.js";import"./search-297e9Y7D.js";import"./select-P2zO11OG.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BBLMX3ph.js";import"./step-indicator-VzIYVCPL.js";import"./summary-box-i_aO1v2Q.js";import"./tag-BURryAb1.js";import"./text-area-CrhVCt3o.js";import"./time-picker-CvagkXJf.js";import"./tooltip-BhAJp-EY.js";import"./index-BdXVIPuw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCMedrEY.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-A9mp8xSv.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
