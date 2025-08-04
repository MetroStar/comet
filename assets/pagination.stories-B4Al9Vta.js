import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DKa0YoIq.js";import{P as i}from"./table-C9HOtrxI.js";import"./banner-DFuFeIia.js";import"./button-IPy9jbLs.js";import"./button-group-DXolzND2.js";import"./checkbox-BQkuhU1G.js";import"./combo-box-CWBhLbX6.js";import"./date-picker-ufywb9kd.js";import"./error-messages-_lA7co94.js";import"./index-BDHufz-7.js";import"./form-group-DRm-Z0uU.js";import"./helper-text-BRA2CuHl.js";import"./icon-USpDURA8.js";import"./label-0qqEdO1f.js";import"./modal-35WI-peH.js";import"./process-list-Cw48gBrz.js";import"./radio-button-C3KSXNgA.js";import"./range-slider-Bw0Kc7v6.js";import"./search-CzhcTNXV.js";import"./select-BpTAUJhf.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-B5IEr7J2.js";import"./step-indicator-CR0utXOF.js";import"./summary-box-B7sxQFWe.js";import"./tag-DvWwyFUj.js";import"./text-area-CxcDxdlk.js";import"./time-picker-B98iZ5IH.js";import"./tooltip-tb7otWC0.js";import"./index-C_W0PhG5.js";import"./index-Bac-0u3O.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BxY-v_t6.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
