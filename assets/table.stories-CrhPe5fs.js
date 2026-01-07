import{j as n}from"./jsx-runtime-u17CrQMm.js";import{l as o}from"./table-BE7P90A5.js";import"./banner-CdKUtT4Q.js";import"./button-BuClEYRA.js";import"./button-group-3NzQO1eL.js";import"./checkbox-B_FgE5YG.js";import"./combo-box-BwDn4-7X.js";import"./date-picker-DtP7l5jL.js";import"./error-messages-DQwxQ3pR.js";import"./index-Bni-B5ok.js";import"./form-group-BZBdvamC.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CdkrdHks.js";import"./label-Z58zP1tT.js";import"./modal-xumiYz7t.js";import"./process-list-CcAX-yjy.js";import"./radio-button-Bd2bWT8y.js";import"./range-slider-Be1UaCg9.js";import"./search-P4kxlHtr.js";import"./select-vPNxENBR.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-CPGEl31o.js";import"./step-indicator-DJJpD3pM.js";import"./summary-box-0wY2PkS2.js";import"./tag-DkogBOJ7.js";import"./text-area-1c32Owjo.js";import"./time-picker-DmCzu4M3.js";import"./tooltip-CnpPKDFp.js";import"./index-Bj4XtJnt.js";import"./iframe-BhXn9yy1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt53Fj7x.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B4TSTOiY.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Table",component:o,argTypes:{id:{required:!0},sortDir:{control:"select"}}},a=e=>{const s=[{id:"name",name:"Name"},{id:"orderAdmitted",name:"Order admitted to union"},{id:"dateOfVote",name:"Date of ratification vote"},{id:"dateAdmitted",name:"Date admitted to union"},{id:"percentVoters",name:"Percent of voters in favor of ratification"},{id:"votesCast",name:"Votes cast in favor of ratification"},{id:"estimatedPopulation",name:"Estimated population at time of admission",sortable:!1}],i=[{name:{value:"Hawaii",sortValue:"Hawaii"},orderAdmitted:{value:"50th",sortValue:"50"},dateOfVote:{value:"Apr. 24, 1956",sortValue:"331844400"},dateAdmitted:{value:"Aug. 21, 1959",sortValue:"327092400"},percentVoters:{value:"94.3%",sortValue:"0.943"},votesCast:{value:"132,773",sortValue:"132773"},estimatedPopulation:{value:"632,772",sortValue:"632772"}},{name:{value:"Alaska",sortValue:"Alaska"},orderAdmitted:{value:"49th",sortValue:"49"},dateOfVote:{value:"Jun. 27, 1959",sortValue:"431978400"},dateAdmitted:{value:"Jan. 3, 1959",sortValue:"346960800"},percentVoters:{value:"68.1%",sortValue:"0.681"},votesCast:{value:"17,477",sortValue:"17477"},estimatedPopulation:{value:"226,167",sortValue:"226167"}},{name:{value:"Arizona",sortValue:"Arizona"},orderAdmitted:{value:"48th",sortValue:"48"},dateOfVote:{value:"Feb. 9, 1911",sortValue:"1858528800"},dateAdmitted:{value:"Feb. 14, 1912",sortValue:"1826560800"},percentVoters:{value:"78.7%",sortValue:"0.787"},votesCast:{value:"12,187",sortValue:"12187"},estimatedPopulation:{value:"204,354",sortValue:"204354"}}];return n.jsx(o,{id:e.id,tabIndex:e.tabIndex,columns:s,data:i,caption:e.caption,borderless:e.borderless,striped:e.striped,scrollable:e.scrollable,sortable:e.sortable,sortDir:e.sortDir,sortIndex:e.sortIndex,onSort:e.onSort})},t={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0},render:e=>a(e)},r={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0,onSort:()=>{console.log("Sorting...")}},render:e=>a(e)};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const X=["Default","OnSort"];export{t as Default,r as OnSort,X as __namedExportsOrder,Q as default};
