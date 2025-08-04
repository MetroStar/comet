import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-7518lDOu.js";import{P as i}from"./table-DqHQ9AC6.js";import"./banner-CKUJPF1-.js";import"./button-ByK7N37x.js";import"./button-group-DisPr8Ll.js";import"./checkbox-ZBX-3sk9.js";import"./combo-box-D1B40_Ed.js";import"./date-picker-Dk0zHLIH.js";import"./error-messages-_lA7co94.js";import"./index-eGJhptUH.js";import"./form-group-DYKjDP8T.js";import"./helper-text-BRA2CuHl.js";import"./icon-Bs7luVDn.js";import"./label-0qqEdO1f.js";import"./modal-C_aHr31j.js";import"./process-list-BrnP9Mlx.js";import"./radio-button-C4ZsFajo.js";import"./range-slider-CRQ9fPP5.js";import"./search-DzgeHfgH.js";import"./select-DJpgwHeu.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DBdkujVI.js";import"./step-indicator-Bwjm-2R5.js";import"./summary-box-BaPYr4D4.js";import"./tag-DDOzNfXQ.js";import"./text-area-1YDixWzp.js";import"./time-picker-DgYDaV_B.js";import"./tooltip-BzHK-RTl.js";import"./index-Bk9_ws4F.js";import"./index-DENiOEZQ.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Dz9jb3-2.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
