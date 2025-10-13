import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Bwz6XU0D.js";import{P as i}from"./table-CCYgxckp.js";import"./banner-pKjHS12l.js";import"./button-B47c1YYu.js";import"./button-group-CYPZmXKt.js";import"./checkbox-CzUrMOvt.js";import"./combo-box-BOHJSksH.js";import"./date-picker-CBSj8zvm.js";import"./error-messages-_lA7co94.js";import"./index-BMwdlhat.js";import"./form-group-CJ3mn56K.js";import"./helper-text-BRA2CuHl.js";import"./icon-NAorSJnD.js";import"./label-0qqEdO1f.js";import"./modal-DL0P4ibX.js";import"./process-list-EZ68CPKv.js";import"./radio-button-1kiY3UA7.js";import"./range-slider-Cm5ueJhP.js";import"./search-tjUloL2j.js";import"./select-UJptg5wt.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-oHPgUl6e.js";import"./step-indicator-NhVbAgWk.js";import"./summary-box-NLL7Ni77.js";import"./tag-Ct2h3KgO.js";import"./text-area-D-UqW_wP.js";import"./time-picker-rVrnL5sX.js";import"./tooltip-20H6euzk.js";import"./index-CaF2RGos.js";import"./index-EONbNr6g.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DJDqlcXL.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
