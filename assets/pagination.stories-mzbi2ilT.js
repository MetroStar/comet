import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-C46Q6aS9.js";import{P as i}from"./table-EA1y5ut-.js";import"./banner-CAGrKBsD.js";import"./button-DSB6x01T.js";import"./button-group-DoUEIhI2.js";import"./checkbox-D92JDoOs.js";import"./combo-box-kv4Zj3ip.js";import"./date-picker-DeOeusIq.js";import"./error-messages-_lA7co94.js";import"./index--PxvN4ag.js";import"./form-group-CNy8DDjE.js";import"./helper-text-BRA2CuHl.js";import"./icon-CoTVHJHi.js";import"./label-0qqEdO1f.js";import"./modal-BKK3aVOm.js";import"./process-list-B2W3GOc_.js";import"./radio-button-CRka0rgF.js";import"./range-slider-DEZb4C9L.js";import"./search-BMOfAqqA.js";import"./select-D3GcbaQv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CEaHIX6K.js";import"./step-indicator-KzAYTCs1.js";import"./summary-box-sEgleKYK.js";import"./tag-BRlHQhP2.js";import"./text-area-Dq7PS0lJ.js";import"./time-picker-qN-3jLPm.js";import"./tooltip-C6MBNeTd.js";import"./index-BrLkV3m_.js";import"./index-CqwsvFH3.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BlqFUN-c.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
