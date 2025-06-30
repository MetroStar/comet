import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{l as d}from"./table-PiQKqWot.js";import"./banner-BIUhIOGt.js";import"./button-4POMs2EY.js";import"./button-group-CL3mf8vR.js";import"./checkbox-B5Gt84Lz.js";import"./combo-box-Bct81XLK.js";import"./date-picker-DS9Gxvt9.js";import"./error-messages-pdO9TZPZ.js";import"./index-b9o7Vjy2.js";import"./form-group-D1BkIUNZ.js";import"./helper-text-BRA2CuHl.js";import"./icon-DEIpQ_jd.js";import"./label-0qqEdO1f.js";import"./modal-DZZ04_D2.js";import"./process-list-DJo8omkl.js";import"./radio-button-8NO9pNju.js";import"./range-slider-0gKY5Srp.js";import"./search-FlA3WQtB.js";import"./select-3USV_5y9.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-D7BEF8Gj.js";import"./step-indicator-CeIMTuFn.js";import"./summary-box-CbWSBrtA.js";import"./tag-Cfs8zox1.js";import"./text-area-CJSx7yip.js";import"./time-picker-DI32aVe8.js";import"./tooltip-Fgr-n6X3.js";import"./index-BAkss3hx.js";import"./iframe-YKUTTlTG.js";import"./index-Do0kNAB-.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CSFFTE0I.js";import"./active-element-BuxAly_Z.js";const ee={title:"USWDS/Table",component:d,argTypes:{id:{required:!0},sortDir:{control:"select"}}},m=e=>{const p=[{id:"name",name:"Name"},{id:"orderAdmitted",name:"Order admitted to union"},{id:"dateOfVote",name:"Date of ratification vote"},{id:"dateAdmitted",name:"Date admitted to union"},{id:"percentVoters",name:"Percent of voters in favor of ratification"},{id:"votesCast",name:"Votes cast in favor of ratification"},{id:"estimatedPopulation",name:"Estimated population at time of admission",sortable:!1}],u=[{name:{value:"Hawaii",sortValue:"Hawaii"},orderAdmitted:{value:"50th",sortValue:"50"},dateOfVote:{value:"Apr. 24, 1956",sortValue:"331844400"},dateAdmitted:{value:"Aug. 21, 1959",sortValue:"327092400"},percentVoters:{value:"94.3%",sortValue:"0.943"},votesCast:{value:"132,773",sortValue:"132773"},estimatedPopulation:{value:"632,772",sortValue:"632772"}},{name:{value:"Alaska",sortValue:"Alaska"},orderAdmitted:{value:"49th",sortValue:"49"},dateOfVote:{value:"Jun. 27, 1959",sortValue:"431978400"},dateAdmitted:{value:"Jan. 3, 1959",sortValue:"346960800"},percentVoters:{value:"68.1%",sortValue:"0.681"},votesCast:{value:"17,477",sortValue:"17477"},estimatedPopulation:{value:"226,167",sortValue:"226167"}},{name:{value:"Arizona",sortValue:"Arizona"},orderAdmitted:{value:"48th",sortValue:"48"},dateOfVote:{value:"Feb. 9, 1911",sortValue:"1858528800"},dateAdmitted:{value:"Feb. 14, 1912",sortValue:"1826560800"},percentVoters:{value:"78.7%",sortValue:"0.787"},votesCast:{value:"12,187",sortValue:"12187"},estimatedPopulation:{value:"204,354",sortValue:"204354"}}];return c.jsx(d,{id:e.id,tabIndex:e.tabIndex,columns:p,data:u,caption:e.caption,borderless:e.borderless,striped:e.striped,scrollable:e.scrollable,sortable:e.sortable,sortDir:e.sortDir,sortIndex:e.sortIndex,onSort:e.onSort})},t={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0},render:e=>m(e)},r={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0,onSort:()=>{console.log("Sorting...")}},render:e=>m(e)};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'table-1',
    tabIndex: 0,
    caption: 'Voter Data',
    borderless: false,
    striped: false,
    scrollable: false,
    sortable: true,
    sortDir: 'ascending',
    sortIndex: 0
  },
  render: (args: TableProps) => createTable(args)
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,n,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'table-1',
    tabIndex: 0,
    caption: 'Voter Data',
    borderless: false,
    striped: false,
    scrollable: false,
    sortable: true,
    sortDir: 'ascending',
    sortIndex: 0,
    onSort: () => {
      // eslint-disable-next-line no-console
      console.log('Sorting...');
    }
  },
  render: (args: TableProps) => createTable(args)
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const te=["Default","OnSort"];export{t as Default,r as OnSort,te as __namedExportsOrder,ee as default};
