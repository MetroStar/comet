import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-TQQq_xwn.js";import{P as i}from"./table-Bj-ieh0N.js";import"./banner-DHXPmgHt.js";import"./button-WXiSigBI.js";import"./button-group-C3Md5rMb.js";import"./checkbox-v0CmJ0fV.js";import"./combo-box-D6E53Ltn.js";import"./date-picker-CjxICpbw.js";import"./error-messages-_lA7co94.js";import"./index-8sAm4bIA.js";import"./form-group-U4i5E8Pz.js";import"./helper-text-BRA2CuHl.js";import"./icon-DLRFSs-D.js";import"./label-0qqEdO1f.js";import"./modal-DuZBzutb.js";import"./process-list-BZY3uAyG.js";import"./radio-button-e8GAg1jo.js";import"./range-slider-C2gAsZFm.js";import"./search-DtK5-wbC.js";import"./select-IwB_nyID.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BprknOUj.js";import"./step-indicator-DOOfVLKw.js";import"./summary-box-Bv21eHgr.js";import"./tag-3iSrbP2k.js";import"./text-area-49zULSyA.js";import"./time-picker-Cw7BpC7A.js";import"./tooltip-BYVxI0PO.js";import"./index-tsUwO6kK.js";import"./index-qCMx_cnb.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-xQGsZq0x.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
