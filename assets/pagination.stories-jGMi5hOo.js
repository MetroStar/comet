import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BwwnJ4bQ.js";import{P as i}from"./table-BtFq5zL4.js";import"./banner-uV95zGFs.js";import"./button-DfKPFT4w.js";import"./button-group-B8qwif5I.js";import"./checkbox-CdDK2Ail.js";import"./combo-box-Ct--mWcL.js";import"./date-picker-rlS4rEJ_.js";import"./error-messages-pdO9TZPZ.js";import"./index-D0vkdLY0.js";import"./form-group-BNvSNT6e.js";import"./helper-text-BRA2CuHl.js";import"./icon-DZs_2Psf.js";import"./label-0qqEdO1f.js";import"./modal-CuUbPca1.js";import"./process-list-g8Hqj4X6.js";import"./radio-button-MwQ8sEZH.js";import"./range-slider-DAYuTYd2.js";import"./search-CAVmMV5z.js";import"./select-D-tMA2XJ.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-DEEFijFP.js";import"./step-indicator-DQV4Yclx.js";import"./summary-box-WhOrEbhX.js";import"./tag-49nF4kNV.js";import"./text-area-BuVE8XGA.js";import"./time-picker-CvQcDVRT.js";import"./tooltip-ByMU_4Qo.js";import"./index-H7MKBO52.js";import"./index-CvXiQi1r.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DN-9Y53f.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,P,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(P=o.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};const tr=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,tr as __namedExportsOrder,nr as default};
