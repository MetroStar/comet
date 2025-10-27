import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DwbOoiOR.js";import{P as i}from"./table-CTHJRurc.js";import"./banner-BpjHpRyz.js";import"./button-CEdaOz0v.js";import"./button-group-DPUcNWat.js";import"./checkbox-CeDcbjZa.js";import"./combo-box-Df2_U8wx.js";import"./date-picker-D-VCXnPA.js";import"./error-messages-_lA7co94.js";import"./index-CLsMeELU.js";import"./form-group-N2izWhMO.js";import"./helper-text-BRA2CuHl.js";import"./icon-D8iiNzoR.js";import"./label-0qqEdO1f.js";import"./modal-DsQx7LhB.js";import"./process-list-lglvHysC.js";import"./radio-button-C9zE0qcx.js";import"./range-slider-BzcdN58g.js";import"./search-DCqu2wfv.js";import"./select-sAGlyFDv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-Ba8esuHl.js";import"./step-indicator-DYwCyK75.js";import"./summary-box-DCFq3_YR.js";import"./tag-BWyj0ide.js";import"./text-area-Z6rUOkKh.js";import"./time-picker-CakTvnCc.js";import"./tooltip-I7dpAhOi.js";import"./index-BIsXNuh7.js";import"./index-CJmWpGmW.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DweQinfd.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
