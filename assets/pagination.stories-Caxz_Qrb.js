import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-D7rw0kbP.js";import{P as i}from"./table-D6PxWkEz.js";import"./banner-5PnvCMeN.js";import"./button-C6DDMlzm.js";import"./button-group-D2NUrE1E.js";import"./checkbox-97CiXItc.js";import"./combo-box-CqKpeFyZ.js";import"./date-picker-9XfVeNZj.js";import"./error-messages-_lA7co94.js";import"./index-Dc5iOzpo.js";import"./form-group-C37VFKvz.js";import"./helper-text-BRA2CuHl.js";import"./icon-ldTZd2PJ.js";import"./label-0qqEdO1f.js";import"./modal-CLRIHiE2.js";import"./process-list-Dv3imPAG.js";import"./radio-button-CQt1YoIZ.js";import"./range-slider-CnELvyde.js";import"./search-CYLnDm6f.js";import"./select-g8Uw7pfh.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-CBI-9iTh.js";import"./step-indicator-C3Nqgbfm.js";import"./summary-box-D4YHkNEC.js";import"./tag-DrpHvKAI.js";import"./text-area-ANeT3eEi.js";import"./time-picker-BphduNSw.js";import"./tooltip-DwNK3jut.js";import"./index-DUKoxV3s.js";import"./index-C9q_5GSN.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-SMKFmbVV.js";import"./active-element-BuxAly_Z.js";const X={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(n,t)=>{n.preventDefault(),r(t)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[n,t]=p.useState(r.currentPage),e={...r};return e.currentPage=n,e.onPage=g(t),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
