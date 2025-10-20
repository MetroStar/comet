import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DAkoUa8c.js";import{P as i}from"./table-DN2zX9w5.js";import"./banner-DmybvjyX.js";import"./button-DaVVrHT6.js";import"./button-group-DL1d-oUd.js";import"./checkbox-B95JovIm.js";import"./combo-box-3yuNCmgT.js";import"./date-picker-MXHZCJx-.js";import"./error-messages-_lA7co94.js";import"./index-BSnHZeMx.js";import"./form-group-DBzbMrNY.js";import"./helper-text-BRA2CuHl.js";import"./icon-DTn1fg3T.js";import"./label-0qqEdO1f.js";import"./modal-C9ErPmL0.js";import"./process-list-CxnI2fTS.js";import"./radio-button-BptSw1UH.js";import"./range-slider-BRs7lDMv.js";import"./search-D7OaEWwM.js";import"./select-DBPXSEr4.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BrMEkozl.js";import"./step-indicator-BLqJZzSw.js";import"./summary-box-BITmi2EU.js";import"./tag-BQwTgAeY.js";import"./text-area-aL1qtgvL.js";import"./time-picker-PZ_jVo6d.js";import"./tooltip-DqmHi9L2.js";import"./index-CZnHAbqW.js";import"./index-VfhVxxkQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BmV7Pdh3.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Y=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Y as __namedExportsOrder,X as default};
