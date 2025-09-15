import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-B7oP2X8t.js";import{P as i}from"./table-CJqRdRnA.js";import"./banner-CDze5A-o.js";import"./button-Cfsih1JM.js";import"./button-group-C7oR13Zx.js";import"./checkbox-DdvE8Qv0.js";import"./combo-box-MLHL-BJJ.js";import"./date-picker-CzeDYvZ6.js";import"./error-messages-_lA7co94.js";import"./index-Cd6JFthD.js";import"./form-group-B0crHuAm.js";import"./helper-text-BRA2CuHl.js";import"./icon-_aWJ0mlv.js";import"./label-0qqEdO1f.js";import"./modal-0FNrf6C-.js";import"./process-list-BXqeNRaz.js";import"./radio-button-Nt_CKpgW.js";import"./range-slider-C7Ny-QWb.js";import"./search-KLEJmmQN.js";import"./select-CAlDhwkC.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-C3x03OFs.js";import"./step-indicator-CDd_u7Xd.js";import"./summary-box-Bu6NGAGG.js";import"./tag-LtQ0fvOs.js";import"./text-area-DnBgkfMa.js";import"./time-picker-ByDgOAtB.js";import"./tooltip-CA57b6l2.js";import"./index-Sl1xyaxe.js";import"./index-BmmP-Ded.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-EhFKVBHe.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
