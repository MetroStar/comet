import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DuCqQX56.js";import{P as i}from"./table-C8360qz1.js";import"./banner-0cQ1VwYA.js";import"./button-BKWxX-Da.js";import"./button-group-0Qrdnekb.js";import"./checkbox-V_TbU8x_.js";import"./combo-box-CWkgIpCj.js";import"./date-picker-OWJbCQWY.js";import"./error-messages-_lA7co94.js";import"./index-BJ28ckkj.js";import"./form-group-ccVGZY8n.js";import"./helper-text-BRA2CuHl.js";import"./icon-BvgBwPFf.js";import"./label-0qqEdO1f.js";import"./modal-Cy6gDfT6.js";import"./process-list-D0b4fxYS.js";import"./radio-button-Debg-0BK.js";import"./range-slider-fW4YPf0L.js";import"./search-DcpVRyol.js";import"./select-BVMgADpF.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DOYv-Ov_.js";import"./step-indicator-DjwAnxsg.js";import"./summary-box-BPTqOlAt.js";import"./tag-BPwouCyO.js";import"./text-area-mLO4G3tx.js";import"./time-picker-BVLec-T2.js";import"./tooltip-BGDht52a.js";import"./index-DwWsIt9I.js";import"./index-CyGskYRl.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DuoJpcJJ.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
