import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CCJFRkb0.js";import{P as i}from"./table-C1T_Hy-L.js";import"./banner-DO5hvgnM.js";import"./button-XgcnM0uG.js";import"./button-group-CvPdpJzo.js";import"./checkbox-B3YkBqWl.js";import"./combo-box-WfySd2Em.js";import"./date-picker-CT6uOhvT.js";import"./error-messages-_lA7co94.js";import"./index-CmTLF3eZ.js";import"./form-group-oS_-cAgG.js";import"./helper-text-BRA2CuHl.js";import"./icon-CMaK07ig.js";import"./label-0qqEdO1f.js";import"./modal-CXY4gmYy.js";import"./process-list-zlPAdYXT.js";import"./radio-button-C1coLMFg.js";import"./range-slider-CkEeCFda.js";import"./search-DpDw9Dfe.js";import"./select-DnxPJAIv.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-hoOHyEsx.js";import"./step-indicator-DVrqYPba.js";import"./summary-box-CeIzJN4S.js";import"./tag-CQumEc23.js";import"./text-area-DgYVSH4W.js";import"./time-picker-CUgQjvfO.js";import"./tooltip-Dltimqdy.js";import"./index-DJxORCHa.js";import"./index-MnkQOSnn.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DIfjoeEk.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
