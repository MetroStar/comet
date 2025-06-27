import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BTDZFy0C.js";import{P as i}from"./table-CwM-e1Ld.js";import"./banner-CghSNQac.js";import"./button-DmQlEe5k.js";import"./button-group-CzHupFz8.js";import"./checkbox-B4ogPmPY.js";import"./combo-box-DTr5hLrb.js";import"./date-picker-BAjdwWxm.js";import"./error-messages-pdO9TZPZ.js";import"./index-B9xeDuGV.js";import"./form-group-Dpd_9Ciz.js";import"./helper-text-BRA2CuHl.js";import"./icon-HidOGawT.js";import"./label-0qqEdO1f.js";import"./modal-BjsfUY3z.js";import"./process-list-CCzppcJI.js";import"./radio-button-B0rdgAKy.js";import"./range-slider-DebgFVuZ.js";import"./search-DBBsVxls.js";import"./select-4SSRmt_-.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-BABO9nkk.js";import"./step-indicator-D6Dm9Ncv.js";import"./summary-box-C4ax1MQo.js";import"./tag-B0oWdQ5d.js";import"./text-area-BhfI6C58.js";import"./time-picker-Brz1130R.js";import"./tooltip-mjUvhVd0.js";import"./index-DEcbbbY2.js";import"./index-BejGjDqK.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-C4w5M_iJ.js";import"./active-element-BuxAly_Z.js";const nr={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},l=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=d.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=l(t),c.jsx(i,{...e})}};var s,p,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
