import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{l as d}from"./table-BQL0JfDZ.js";import"./banner-BOhAuR3U.js";import"./button-0lmkM3fD.js";import"./button-group-CZhUERTb.js";import"./checkbox-fT2FCOvu.js";import"./combo-box-CLCaBMvM.js";import"./date-picker-BL4r-SdH.js";import"./error-messages-pdO9TZPZ.js";import"./index-CwwaLKAA.js";import"./form-group-CL2GuKdf.js";import"./helper-text-BRA2CuHl.js";import"./icon-jurcj1Nf.js";import"./label-0qqEdO1f.js";import"./modal-CFm0QTZ1.js";import"./process-list-AE9dDrc7.js";import"./radio-button-DuKZRfEc.js";import"./range-slider-BJh14v4A.js";import"./search-DGzVu3E9.js";import"./select-C6KxA7eF.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-cjdRzAPZ.js";import"./step-indicator-C7ZPDABy.js";import"./summary-box-D0zDo-mv.js";import"./tag-CWTFBZDR.js";import"./text-area-C_SND7HQ.js";import"./time-picker-OgCg1Xfc.js";import"./tooltip-BxjZneBO.js";import"./index-BoQPokf7.js";import"./iframe-C2QaQG_Z.js";import"./index-bqbLV7rw.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CVA6Rm36.js";import"./active-element-BuxAly_Z.js";const ee={title:"USWDS/Table",component:d,argTypes:{id:{required:!0},sortDir:{control:"select"}}},m=e=>{const p=[{id:"name",name:"Name"},{id:"orderAdmitted",name:"Order admitted to union"},{id:"dateOfVote",name:"Date of ratification vote"},{id:"dateAdmitted",name:"Date admitted to union"},{id:"percentVoters",name:"Percent of voters in favor of ratification"},{id:"votesCast",name:"Votes cast in favor of ratification"},{id:"estimatedPopulation",name:"Estimated population at time of admission",sortable:!1}],u=[{name:{value:"Hawaii",sortValue:"Hawaii"},orderAdmitted:{value:"50th",sortValue:"50"},dateOfVote:{value:"Apr. 24, 1956",sortValue:"331844400"},dateAdmitted:{value:"Aug. 21, 1959",sortValue:"327092400"},percentVoters:{value:"94.3%",sortValue:"0.943"},votesCast:{value:"132,773",sortValue:"132773"},estimatedPopulation:{value:"632,772",sortValue:"632772"}},{name:{value:"Alaska",sortValue:"Alaska"},orderAdmitted:{value:"49th",sortValue:"49"},dateOfVote:{value:"Jun. 27, 1959",sortValue:"431978400"},dateAdmitted:{value:"Jan. 3, 1959",sortValue:"346960800"},percentVoters:{value:"68.1%",sortValue:"0.681"},votesCast:{value:"17,477",sortValue:"17477"},estimatedPopulation:{value:"226,167",sortValue:"226167"}},{name:{value:"Arizona",sortValue:"Arizona"},orderAdmitted:{value:"48th",sortValue:"48"},dateOfVote:{value:"Feb. 9, 1911",sortValue:"1858528800"},dateAdmitted:{value:"Feb. 14, 1912",sortValue:"1826560800"},percentVoters:{value:"78.7%",sortValue:"0.787"},votesCast:{value:"12,187",sortValue:"12187"},estimatedPopulation:{value:"204,354",sortValue:"204354"}}];return c.jsx(d,{id:e.id,tabIndex:e.tabIndex,columns:p,data:u,caption:e.caption,borderless:e.borderless,striped:e.striped,scrollable:e.scrollable,sortable:e.sortable,sortDir:e.sortDir,sortIndex:e.sortIndex,onSort:e.onSort})},t={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0},render:e=>m(e)},r={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0,onSort:()=>{console.log("Sorting...")}},render:e=>m(e)};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
