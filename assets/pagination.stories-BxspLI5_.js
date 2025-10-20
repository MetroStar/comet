import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CeHEORJQ.js";import{P as i}from"./table-CMDmZj7c.js";import"./banner-BAz2G--5.js";import"./button-B9OaNNhT.js";import"./button-group-DlaVFbxh.js";import"./checkbox-C28N4a1k.js";import"./combo-box-BvakVT0f.js";import"./date-picker-UsI544BE.js";import"./error-messages-_lA7co94.js";import"./index-Bkp4uBDp.js";import"./form-group-Bpk2fpaH.js";import"./helper-text-BRA2CuHl.js";import"./icon-cxkbKgKE.js";import"./label-0qqEdO1f.js";import"./modal-BQkULiVL.js";import"./process-list-Bss4hcvS.js";import"./radio-button-CEz13IeH.js";import"./range-slider-BpGVvSsE.js";import"./search-Cin5Af7e.js";import"./select-BlI-nL0Q.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-LVKe454Y.js";import"./step-indicator-C4JBCoYw.js";import"./summary-box-DnFH13SG.js";import"./tag-CneVrYpY.js";import"./text-area-D_fB21ck.js";import"./time-picker-CSKB0_Nb.js";import"./tooltip-Y544ZiXZ.js";import"./index-o8AzxdkW.js";import"./index-Da7q7RYZ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-4Bao6GuI.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
